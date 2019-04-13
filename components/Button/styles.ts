import css from 'styled-jsx/css';

export default css`
  @import 'color';
  @import 'rem';

  .Button {
    align-items: center;
    background: transparent;
    border-radius: rem(2px);
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: rem(0.6px);
    height: rem(48px);
    margin: 0;
    padding: rem(9px) rem(28px);
    position: relative;
    text-decoration: none;
    color: color(grey, lightest);

    &:hover  {
      text-decoration: none;
    }

    &:disabled,
    &:hover:disabled {
      background-color: transparent;
      border-color: color(grey, disabled-border, false);
      color: color(grey, disabled-text, false);
      cursor: not-allowed;
    }

    &--primary {
      background-color: accent(mainAccentColor);
      color: color(grey, lightest);

      &:hover,
      &:focus,
      &:active {
        background-color: color(black);
        color: color(grey, lightest);
      }
    }

    &--secondary {
      border-color: accent(mainAccentColor);
      color: color(black);

      &:hover {
        border-color: color(black);
      }

      &:hover,
      &:active {
        background-color: transparent;
        border-color: color(black);
        color: color(black);
      }

      &:focus {
        background-color: color(black);
        border-color: color(black);
        color: color(white);
      }
    }
  }
`;
