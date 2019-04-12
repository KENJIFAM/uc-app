import css from 'styled-jsx/css';

const styles = css`
  @import 'color';
  @import 'rem';

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      margin: auto rem(6px);

      .state {
        width: 1rem;
        height: 1rem;
        border-radius: rem(4px);
      }

      .started {
        background-color: color(ui, green);
      }
    
      .stopped {
        background-color: color(ui, red);
      }
    
      .error, .maintenance {
        background-color: color(ui, yellow);
      }
    }

    .content {
      margin: auto rem(6px);

      .title {
        font-weight: 500;
        margin-top: 0;
        margin-bottom: rem(5px);
      }

      .hostname {
        font-weight: 500;
        margin: 0;
        color: color(grey, base);
      }
    }
  }
`;

export default styles;
