import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src='https://www.googletagmanager.com/gtag/js?id=UA-177902424-1' onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-177902424-1');
          }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
