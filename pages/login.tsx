import React from 'react';
import Head from 'next/head';
import Login from 'components/Login';
import withAuth from 'components/withAuth';

const LoginPage = () => (
  <>
    <Head>
      <title>Login | UpCloud</title>
    </Head>
    <main>
      <Login />
    </main>
  </>
);

export default withAuth(LoginPage);