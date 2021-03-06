import { BlockJSON } from 'slate';
import { CreateJsxSerializerRuleConfig, createJsxSerializerRule } from '@artibox/slate-jsx-serializer/rule';
import { HEADING_TYPE } from './constants';
import { HeadingProps } from './typings';
import { getHeadingPropsFromBlock } from './utils/get-heading-props-from-block';
import Heading from './components/heading';

export type CreateHeadingJsxSerializerRuleConfig = Partial<
  Pick<CreateJsxSerializerRuleConfig<BlockJSON, HeadingProps>, 'type' | 'component'>
>;

export function createHeadingJsxSerializerRule(config?: CreateHeadingJsxSerializerRuleConfig) {
  const { type = HEADING_TYPE, component = Heading } = config || {};
  return createJsxSerializerRule<BlockJSON, HeadingProps>({
    type,
    component,
    getProps: getHeadingPropsFromBlock
  });
}
