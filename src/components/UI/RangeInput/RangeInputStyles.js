import { css } from 'styled-components';

/**
 * Styles for the custom range input
 * for Chrome, Firefox and IE/Edge.
 * 
 * Using styled-components `css` function to be
 * able to receive props.
 */
export const RangeInputStyles = css`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  &:focus {
    outline-color: var(--color-grey-medium); /* Consider alternate style for accesibility */
  }
  
  /* Chrome */
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    border-radius: 3px;
    height: .6rem;
    width: 100%;
    background: ${p => `linear-gradient(to right, var(--color-grey-dark) 0%, var(--color-grey-dark) ${p.progress}%, var(--color-white) ${p.progress}%, var(--color-white) 100%)`};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--color-white);
    border: 1px solid var(--color-grey-dark);
    border-radius: 50%;
    cursor: pointer;
    margin-top: -8px; /* Margin needed for Chrome to adjust the thumb */
    height: 20px;
    width: 20px;
  }
  
  /* Firefox */
  &::-moz-range-track {
    -webkit-appearance: none;
    border-radius: 3px;
    height: .6rem;
    width: 100%;
    background: ${p => `linear-gradient(to right, var(--color-grey-dark) 0%, var(--color-grey-dark) ${p.progress}%, var(--color-white) ${p.progress}%, var(--color-white) 100%)`};
  }
  
  &::-moz-range-progress {
    background: var(--color-grey-dark);
  }
  
  &::-moz-range-thumb {
    -webkit-appearance: none;
    background: var(--color-white);
    border: 1px solid var(--color-grey-dark);
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  /* IE, Edge */
  &::-ms-fill-lower {
    background: var(--color-grey-dark);
    border-radius: 3px;  
  }

  &::-ms-fill-upper {
    background: var(--color-grey-dark);
    border-radius: 3px;  
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    background: var(--color-white);
    border: 1px solid var(--color-grey-dark);
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`;