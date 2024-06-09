import React from 'react';
import App from 'next/app';
// eslint-disable-next-line @next/next/no-head-import-in-document
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="icon" href="/logo.png" />
          <title>Little Angel{"'"}s Academy</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
