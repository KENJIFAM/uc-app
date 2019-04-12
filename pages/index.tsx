import React from 'react';
import Head from 'next/head';
import Servers from 'components/Servers';

const Home = () => (
  <>
    <Head>
      <title>Servers | UpCloud</title>
    </Head>
    <main>
      {/* TODO: render servers etc. ? */}
      <Servers />
    </main>
  </>
);

export default Home;
