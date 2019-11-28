import { createJsxSerializer } from '@artibox/slate-jsx-serializer';
import { createBoldJsxSerializerRule } from '@artibox/slate-bold';
import { createItalicJsxSerializerRule } from '@artibox/slate-italic';
import { createUnderlineJsxSerializerRule } from '@artibox/slate-underline';
import { createStrikethroughJsxSerializerRule } from '@artibox/slate-strikethrough';
import { createHighlightJsxSerializerRule } from '@artibox/slate-highlight';
import { createLinkJsxSerializerRule } from '@artibox/slate-link';
import { createHeadingJsxSerializerRule } from '@artibox/slate-heading';
import { createBlockquoteJsxSerializerRule } from '@artibox/slate-blockquote';
import { createListJsxSerializerRules } from '@artibox/slate-list';
import { createSeparationLineJsxSerializerRule } from '@artibox/slate-separation-line';
import { createVideoJsxSerializerRule } from '@artibox/slate-video';
import { createInstagramJsxSerializerRule } from '@artibox/slate-instagram';
import { createFacebookJsxSerializerRule } from '@artibox/slate-facebook';

export const jsxSerializer = createJsxSerializer({
  blocks: [
    createHeadingJsxSerializerRule(),
    createBlockquoteJsxSerializerRule(),
    ...createListJsxSerializerRules(),
    createSeparationLineJsxSerializerRule(),
    createVideoJsxSerializerRule(),
    createInstagramJsxSerializerRule(),
    createFacebookJsxSerializerRule()
  ],
  inlines: [createLinkJsxSerializerRule()],
  marks: [
    createBoldJsxSerializerRule(),
    createItalicJsxSerializerRule(),
    createUnderlineJsxSerializerRule(),
    createStrikethroughJsxSerializerRule(),
    createHighlightJsxSerializerRule()
  ]
});
