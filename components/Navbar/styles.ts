import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';
  @import 'color';

  .navbar {
    overflow: hidden;
    border-bottom: 1px solid color(grey, slider-bg);

    a {
      float: left;
      display: block;
      color: color(black, light);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    a:hover {
      border-bottom: 3px solid accent(mainAccentColor);
      color: black;
      -webkit-transition: border-bottom 0.3s;
      transition: border-bottom 0.3s;
    }

    .active {
      border-bottom: 3px solid accent(mainAccentColor);
      font-weight: bold;
    }

    .icon {
      display: none;
    }
  }
  
  @media screen and (max-width: 600px) {
    .navbar {
      border: none;

      a {display: none;}
      a:hover {border: none;}

      a.icon {
        float: right;
        display: block;
        cursor: pointer;
        font-size: 2rem;
      }
    }

    .side-panel.responsive {
      width: 200px;
    }
  }

  .side-panel  {
    width: 0;
    position: fixed;
    z-index: 1;
    height: 100%;
    top: 0;
    right: 0;
    background-color: color(black, light);
    overflow-x: hidden;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    padding-top: 76px;
    padding-bottom: 20px;

    a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 17px;
      color: color(grey, lightest);
      display: block;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }

    a:hover {
      color: #f1f1f1;
    }

    .active {
      font-weight: bold;
      background-color: accent(mainAccentColor);
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 36px;
    }
  }
`;

export default styles;
