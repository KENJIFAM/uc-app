import css from 'styled-jsx/css';

const storageListStyles = css`
  @import 'color';

  h3 {
    font-weight: 500;

    span {
      color: color(grey, disabled-text);
    }
  }
`;

const storageHeadStyles = css`
  @import 'color';

  .storages-sort {
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
    .storages-sort {
      display: none;
    }
  }
`;

export {
  storageListStyles,
  storageHeadStyles
};
