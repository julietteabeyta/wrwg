import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head />
                <link rel="icon"
                    type="image/png"
                    href="hands.png"></link>
                <body>
                    <Main />
                    <NextScript />
                    <script> </script>
                </body>
            </Html>
        )
    }
}