export const FACEBOOK_TYPE = 'facebook' as const;
export type FACEBOOK_TYPE = typeof FACEBOOK_TYPE;

export const FACEBOOK_EMBED_TYPES = ['post', 'video'] as const;
export type FACEBOOK_EMBED_TYPES = typeof FACEBOOK_EMBED_TYPES[number];

export const FACEBOOK_DATA_KEY_TYPE = 'type' as const;
export type FACEBOOK_DATA_KEY_TYPE = typeof FACEBOOK_DATA_KEY_TYPE;
export const FACEBOOK_DATA_KEY_URL = 'url' as const;
export type FACEBOOK_DATA_KEY_URL = typeof FACEBOOK_DATA_KEY_URL;
export const FACEBOOK_DATA_KEY_WIDTH = 'width' as const;
export type FACEBOOK_DATA_KEY_WIDTH = typeof FACEBOOK_DATA_KEY_WIDTH;
export const FACEBOOK_DATA_KEY_HEIGHT = 'height' as const;
export type FACEBOOK_DATA_KEY_HEIGHT = typeof FACEBOOK_DATA_KEY_HEIGHT;

export const FACEBOOK_REG = /^(?:<iframe\s).*src="https:\/\/((?:www|m)\.)?(?:facebook\.com|fb\.com)\/plugins\/(video|post)\.php\?([^"]*href=[^"]*)"[^>]*>/;