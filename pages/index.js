import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        This is Posts 
        <Link href="/posts/first-post/">
          <a>First-page</a>
        </Link>
      </h1>

      <style jsx>{`
        .red {
          color: red;
        }
      `}</style>
    </div>
  )
}