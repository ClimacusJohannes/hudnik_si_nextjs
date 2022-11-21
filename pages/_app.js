import '../styles/globals.css'
import useSWR from 'swr'
import fetch from 'unfetch'
import Transition from '../components/Transitions.jsx';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/layout';

const fetcher = url => fetch(url).then(r => r.json())

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`

  

  // const { users, error } = useSWR('http://localhost:8000/website/api', fetcher)
  // if (error) return <div>Failed to load</div>
  // if (!users) {
  //   console.log(users);
  //   return <div>Loading...</div>
  // }

  return (
    <Layout>
      <AnimatePresence>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </Layout>

  )
}
