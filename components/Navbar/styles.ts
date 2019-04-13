import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';
  @import 'color';

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .menu {
      border-bottom: 1px solid color(grey, slider-bg);
      display: flex;
      justify-content: space-between;
      margin: 0 10px;

      a {
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
    }

    .sign-out {
      display: block;
      margin: 0 10px;
    }

    .icon {
      display: none;
    }
  }
  
  @media screen and (max-width: 600px) {
    .navbar {
      .menu, .sign-out {
        display: none;
      }

      a.icon {
        display: block;
        cursor: pointer;
        font-size: 2rem;
        color: color(black, light);
        text-decoration: none;
        margin: 0 1rem;
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

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .menu {
        margin-bottom: 1rem;
        width: 100%;
      }

      .sign-out {
        
      }
    }

    a {
      text-align: center;
      padding: 1rem;
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
      padding: 8px;
      top: 20px;
      right: 20px;
      font-size: 36px;
    }
  }
`;

export default styles;
