import React from 'react';
import Wrapper from 'components/Wrapper';
import css from 'styled-jsx/css';
import globalStyles from './globalStyles';
import styles from './styles';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import Router from 'next/router';

// some custom styles for header wrapper
const headerWrapperCss = css.resolve`
  .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;    

    return (
      <div className="app">
        <style jsx>{styles}</style>
        {headerWrapperCss.styles}

        {Router.pathname !== '/login' && (
          <header className="app-header">
            <Wrapper className={headerWrapperCss.className}>
              <Link href='/'>
                <a>
                  <img
                    className="app-logo"
                    src="/static/upcloud-logo.svg"
                    alt="UpCloud logo"
                  />
                </a>
              </Link>
              <nav className="app-nav">
                <Navbar />
              </nav>
            </Wrapper>
          </header>
        )}

        <Wrapper>{children}</Wrapper>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
    );
  }
}

export default Layout;
