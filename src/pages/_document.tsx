import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><use href="/sprite.svg" /></svg>`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
