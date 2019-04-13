import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';
  @import 'color';

  .background {
    position: absolute;
    height: 100%;
    left: 30%;
    width: 70%;
  }

  .container {
    margin: 0;
    padding: 40px;
    position: absolute;
    display: block;
    top: 50%;
    left: 30%;
    transform: translate(-30%, -50%);
    background-color: color(bg);
    width: 480px;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
    color: #72767d;
    font-size: 18px;
    vertical-align: baseline;
    z-index: 1;

    .login-logo {
      margin-bottom: 3rem;

      .app-logo {
        width: 100%;
      }
    }

    h2 {
      margin: 2rem 0;
      font-size: 20px;
      font-weight: 400;
      color: color(black);
    }

    div.error {
      display: none;
      border: 1px solid accent(alert);
      border-radius: 5px;
      background-color: rgba(245, 37, 54, 0.2);
      color: accent(alert);
      position: relative;

      .close-btn {
        position: absolute;
        padding: 8px;
        top: 6px;
        right: 6px;
        font-size: 2rem;
        color: accent(alert);
        text-decoration: none;
        cursor: pointer;
      }

      p {
        padding: 1.5rem;
        font-size: rem(17px);
        margin: 0;
      }
    }

    div.error.show {
      display: block;
    }

    .login-form {
      .field {
        margin: 2rem 0;

        h5 {
          margin: 0;
        }

        input {
          width: 100%;
          height: 2.5rem;
          background-color: color(bg);
          border: none;
          border-bottom: 2px solid accent(mainAccentColor);
          font-size: 1rem;
          font-weight: bold;
        }

        input.error {
          border-bottom: 2px solid accent(alert);
        }

        input:focus {
          outline: none;
        }
      }

      .submit {
        float: right;
      }
    }
  }

  @media (max-width: 576px) {
    .background {
      display: none;
    }

    .container {
      width: 100%;
      background-color: transparent;
      box-shadow: none;
      -webkit-box-shadow: none;

      .login-logo {
        .app-logo {
          width: 100%;
        }
      }
    }
  }
`;

export default styles;
