import css from 'styled-jsx/css';

const serverItemStyles = css`
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

const serverHeadStyles = css`
  @import 'color';

  .servers-sort {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      line-height: 1.3;
      margin: 0 5px;
      color: color(grey, disabled-text);
      cursor: pointer;

      ::after {
        content: ' ▼';
        font-size: 10px;
      }
    }

    h4.sort-asc::after {
      content: ' ▲';
      font-size: 10px;
      color: accent(mainAccentColor);
    }

    h4.sort-des::after {
      content: ' ▼';
      font-size: 10px;
      color: accent(mainAccentColor);
    }
  }

  @media screen and (max-width: 319px) {
    .servers-sort {
      display: none;
    }
  }
`;

export {
  serverItemStyles,
  serverHeadStyles
};
