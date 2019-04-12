import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles';
import { withRouter, RouterProps } from 'next/router';
// import Button from 'components/Button';

const Navbar = withRouter<{router: RouterProps}>(props => {
  const [toggle, setToggle] = useState<boolean>(false);

  const navList = (onClick: (() => void) | undefined = undefined) => (
    <>
      <style jsx>{styles}</style>
      <Link href='/'>
        <a
          className={props.router.pathname === '/' ? 'active' : ''}
          onClick={onClick}
        >
          Servers
        </a>
      </Link>
      <Link href='/storages'>
        <a
          className={props.router.pathname === '/storages' ? 'active' : ''}
          onClick={onClick}
        >
          Storages
        </a>
      </Link>
    </>
  );

  return (
    <div>
      <style jsx>{styles}</style>
      <div className={`side-panel${toggle ? ' responsive' : ''}`}>
        <a className='close-btn' onClick={() => setToggle(!toggle)}>×</a>
        {navList(() => setToggle(!toggle))}
      </div>
      <div className='navbar'>
        {navList()}
        <a className='icon' onClick={() => setToggle(!toggle)}>☰</a>
      </div>
    </div>
  );
});

export default Navbar;