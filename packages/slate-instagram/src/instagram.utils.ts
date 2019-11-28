import { Block } from 'slate';
import { INSTAGRAM_DATA_KEY_URL } from './instagram.constants';
import { InstagramProps } from './instagram.component';

export function getInstagramUrlFromEmbedCode(embedCode: string): string | undefined {
  const template = document.createElement('template');
  template.innerHTML = embedCode;
  const { firstChild } = template.content;

  if (!firstChild || firstChild.nodeName !== 'BLOCKQUOTE') {
    return undefined;
  }

  const blockquote = firstChild as HTMLElement;
  const link = (blockquote.firstChild as HTMLDivElement).children[0] as HTMLLinkElement | null | undefined;

  if (!link) {
    return undefined;
  }

  const href = link.getAttribute('href');

  if (!href) {
    return undefined;
  }

  return href.replace(/^https:\/\/www\.instagram\.com\//, '').replace(/\/$/, '');
}

export function getInstagramPropsFromBlock(block: Block): InstagramProps {
  return { url: block.data.get(INSTAGRAM_DATA_KEY_URL) || '' };
}
