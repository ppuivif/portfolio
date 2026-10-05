import type { Locale } from './ui';

export function sitePath(path = '', locale: Locale = 'en') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const localizedPrefix = locale === 'fr' ? 'fr/' : '';
  return `${base}${localizedPrefix}${path.replace(/^\/+/, '')}`;
}
