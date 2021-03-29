import { css } from 'styled-components';

export const InputGroupStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: ${props => `${props.mtop || '0'}px`};
  margin-bottom: ${props => `${props.mbottom || '0'}px`};
  position: relative;
  width: 100%;
`;