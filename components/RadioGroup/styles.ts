import css from 'styled-jsx/css';

const styles = css`
  @import 'color';

  form {
    :global(span) {
      font-size: 1rem;
      color: color(grey, base);
    }

    :global(label) {
      margin: 0 5px;
    }
  }
`;

export default styles;
