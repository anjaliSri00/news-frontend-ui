// lib/auth/hash.ts
import md5 from 'blueimp-md5';

/**
 * Hash a password for transport to the backend.
 * NOTE: This is NOT password storage — the backend must still bcrypt/argon2
 * the value it receives. This only prevents plaintext from leaving the browser.
 */
export function hashPasswordForTransport(plain: string): string {
  // Some backends also mix a shared salt with the password.
  // If yours does, e.g. md5(password + salt), do it here so
  // client and server agree.
  return md5(plain);
}