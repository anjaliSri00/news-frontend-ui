// lib/api/client.ts
export interface ApiError {
  message: string;
  status: number;
  details?: unknown;
}

export class ApiRequestError extends Error implements ApiError {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    this.details = details;
  }
}

interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

function resolveBaseUrl(): string {
  if (typeof window === 'undefined') {
    return (
      process.env.NEXT_PUBLIC_API_URL ??
      'http://localhost:8000'
    );
  }
  return process.env.NEXT_PUBLIC_API_URL ?? '';
}

export interface ApiResult<T> {
  data: T;
  headers: Headers;
  status: number;
}

export async function apiFetchWithHeaders<T>(
  path: string,
  options: RequestOptions = {},
): Promise<ApiResult<T>> {
  const { body, headers, ...rest } = options;

  const res = await fetch(`${resolveBaseUrl()}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(headers ?? {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: 'include', // so the refresh-token cookie is stored
  });

  const text = await res.text();
  const parsed = text ? safeJsonParse(text) : null;

  if (!res.ok) {
    const message =
      (parsed && typeof parsed === 'object' && 'message' in parsed
        ? String((parsed as { message: unknown }).message)
        : null) ??
      `Request failed with status ${res.status}`;

    throw new ApiRequestError(message, res.status, parsed);
  }

  return { data: parsed as T, headers: res.headers, status: res.status };
}

export async function apiFetch<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { data } = await apiFetchWithHeaders<T>(path, options);
  return data;
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}