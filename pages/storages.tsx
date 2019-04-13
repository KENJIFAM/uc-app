import React from 'react';
import Head from 'next/head';
import Storages from 'components/Storages';
import withAuth from 'components/withAuth';

const StoragesPage = () => (
  <>
    <Head>
      <title>Storages | UpCloud</title>
    </Head>
    <main>
      <Storages />
    </main>
  </>
);

export default withAuth(StoragesPage);