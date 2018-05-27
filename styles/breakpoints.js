import { css } from 'styled-components';

export const sizes = {
  small: 768,
  medium: 1024,
  large: 1440
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${(sizes[label] - 1) / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});