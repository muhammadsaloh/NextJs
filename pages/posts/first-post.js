import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
      <Layout>
          <h1>
            First Page
            <Link href="/">
                <a>Back to home</a>
            </Link>
          </h1>
      </Layout>
  )
}