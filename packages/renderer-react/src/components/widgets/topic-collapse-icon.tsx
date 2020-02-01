import { TopicDirection } from '@blink-mind/core';
import cx from 'classnames';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { collapseRefKey } from '../../utils';

const Icon = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  ${({ dir }) => {
    if (dir === TopicDirection.RIGHT)
      return css`
        right: -25px;
      `;
    if (dir === TopicDirection.LEFT)
      return css`
        left: -25px;
      `;
  }};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.3);
  //@ts-ignore
  //background: ${props => props.background};
  background: #fff;
  color: #888;
  cursor: pointer;
  padding: 0;
  //font-size: 16px !important;
  line-height: 16px;
  border: 0;
  z-index: 2;
  
  &:before {
    transform: scale(0.8, 0.8);
  }
`;

export function TopicCollapseIcon(props) {
  const { model, topicKey, topicStyle, dir, saveRef, onClickCollapse } = props;
  const topic = model.getTopic(topicKey);
  return topic.subKeys.size > 0 ? (
    <Icon
      ref={saveRef(collapseRefKey(topicKey))}
      onClick={onClickCollapse}
      // background={topicStyle.background}
      dir={dir}
      className={cx({
        icon: true,
        iconfont: true,
        [`bm-${topic.collapse ? 'plus' : 'minus'}`]: true
      })}
    />
  ) : null;
}
