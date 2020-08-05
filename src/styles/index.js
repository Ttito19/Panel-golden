import { css } from 'styled-components'

const Flex = (JContent = 'center', AItems = 'center', direction = 'row') => {
  return css`
    display: flex;
    flex-direction: ${direction};
    align-items : ${AItems};
    justify-content: ${JContent};
  `;
}

export {
  Flex
}