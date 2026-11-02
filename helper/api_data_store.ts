import { toast } from 'react-toastify';

export interface MetaEnvelope<T> {
  meta: { status: number; message: string };
  data: T;
}

export interface ApiResult<T> {
  body: MetaEnvelope<T>;
  headers: Headers;
}

export async function fetchApiResponseFull<T = unknown>(
  url: string,
  options?: RequestInit,
  showLoginModal?: () => void,
): Promise<ApiResult<T>> {
  if (!url || url.includes('null') || url.includes('undefined')) {
    console.error('Invalid URL detected:', url);
    throw new Error('Invalid API URL');
  }

  let res: Response;
  try {
    res = await fetch(url, options);
  } catch {
    throw new Error(
      `Network error reaching ${url}. Check CORS, DNS, or that the API is running.`,
    );
  }

  const body = (await res.json().catch(() => null)) as MetaEnvelope<T> | null;
  if (!body || !body.meta) {
    throw new Error(`Unexpected response from ${url} (status ${res.status})`);
  }

  if (
    !url.includes('/login') &&
    !url.includes('/signup') &&
    (body.meta.status === 400 || body.meta.status === 409)
  ) {
    if (body.meta.message === 'Tokens are not valid for this user') {
      showLoginModal?.();
    } else {
      toast.error(body.meta.message);
    }
  }

  return { body, headers: res.headers };
}

// Backwards-compatible default export — existing callers still work.
async function fetchApiResponse<T = unknown>(
  url: string,
  options?: RequestInit,
  showLoginModal?: () => void,
): Promise<MetaEnvelope<T>> {
  const { body } = await fetchApiResponseFull<T>(url, options, showLoginModal);
  return body;
}

export default fetchApiResponse;