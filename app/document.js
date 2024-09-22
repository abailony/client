// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="portal-root"></div> {/* This is where the portal content will go */}
        <NextScript />
      </body>
    </Html>
  );
}
