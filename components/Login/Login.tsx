import React, { useState } from 'react';
import { request } from 'api/apiClient';
import Router from 'next/router';
import { setToken } from 'utils/auth';
import Button from 'components/Button';
import styles from './styles';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'username')
      setUsername(event.target.value);
    if (event.target.name === 'password')
      setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await request({ method: 'get', url: '/server' }, { username, password });
    if (response.status === 200) {
      setToken(username, password);
      Router.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <img
        className='background'
        src='/static/illustration-login.svg'
        alt='UpCloud login background'
      />
      <div className='container'>
        <div className='login-logo'>
          <img
            className='app-logo'
            src='/static/upcloud-logo.svg'
            alt='UpCloud logo'
          />
        </div>
        <h2 className='welcome'>Welcome back, log in to your workspaces</h2>
        <div className={`error${error ? ' show' : ''}`}>
          <a className='close-btn' onClick={() => setError(false)}>×</a>
          <p>Login failed, please check your credentials.</p>
        </div>
        <form className='login-form' onSubmit={handleSubmit} action='POST'>
          <div className='field'>
            <label>
              <h5>Username</h5>
              <input
                className={error ? 'error' : ''}
                name='username'
                type='text'
                value={username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='field'>
            <label>
              <h5>Password</h5>
              <input
                className={error ? 'error' : ''}
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='submit'>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;