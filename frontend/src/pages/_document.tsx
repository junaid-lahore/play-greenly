import { Html, Head, Main, NextScript } from 'next/document';
import fonts from '@/fonts.json';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {fonts.map((font) => (
          <link key={font} href={font} rel="stylesheet" />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
