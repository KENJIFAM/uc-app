import React from 'react';
import Head from 'next/head';
import Storages from 'components/Storages';

const StoragesPage = () => (
  <>
    <Head>
      <title>UpCloud</title>
    </Head>
    <main>
      <Storages />
    </main>
  </>
);

export default StoragesPage;