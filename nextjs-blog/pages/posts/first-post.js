import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}


//If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
//If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.