import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';

  .app {
    background: #f9f9f9;
    min-height: 100%;
    overflow: hidden;
  }

  .app-header {
    background: #fff;
    padding: 0.5rem 0;

    @media (min-width: 400px) {
      padding: 1rem 0;
    }
  }

  .app-logo {
    width: 180px;

    @media (min-width: 400px) {
      width: 200px;
    }
  }

  .app-nav {
    display: flex;
    justify-content: space-around;

    a + a {
      margin-left: rem(10px);
    }
  }
`;

export default styles;
