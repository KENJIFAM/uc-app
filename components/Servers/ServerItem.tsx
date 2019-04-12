import React from 'react';
import { IServer } from 'upcloud';
import styles from './styles';

const ServerItem = ({ hostname, title, state }: IServer) => {
  return (
    <div className='item'>
      <style jsx>{styles}</style>

      <div className='icon'>
        <div className={`state ${state}`}></div>
      </div>
      
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <h4 className='hostname'>Hostname: <span>{hostname}</span></h4>
      </div>
    </div>
  );
};

export default ServerItem;