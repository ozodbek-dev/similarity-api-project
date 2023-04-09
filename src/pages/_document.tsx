import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  // @ts-ignore
    return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900  antialiased">
                   <Main/>
                   <NextScript/>
      </body>
    </Html>
  )
}
