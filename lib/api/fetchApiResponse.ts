// lib/api/fetchApiResponse.ts
import { toast } from 'react-toastify';
import { signOut } from 'next-auth/react';

export interface MetaEnvelope<T> {
  meta: { status: number; message: string };
  data: T;
}

async function fetchApiResponse<T = unknown>(
  url: string,
  options?: RequestInit,          // ← was: options?: FetchOptions
  showLoginModal?: () => void,
): Promise<MetaEnvelope<T>> {
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

  const data = (await res.json().catch(() => null)) as MetaEnvelope<T> | null;
  if (!data || !data.meta) {
    throw new Error(`Unexpected response from ${url} (status ${res.status})`);
  }

  if (!url.includes('/login') && data.meta.status === 401) {
    await signOut();
    showLoginModal?.();
  } else if (
    !url.includes('/login') &&
    (data.meta.status === 400 || data.meta.status === 409)
  ) {
    if (data.meta.message === 'Tokens are not valid for this user') {
      await signOut();
      showLoginModal?.();
    } else if (!url.includes('/signup') && !url.includes('/onboard')) {
      toast.error(data.meta.message);
    }
  }

  return data;
}

export default fetchApiResponse;