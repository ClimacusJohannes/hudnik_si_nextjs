import React from "react"
import Link from "next/link"
import hudniki from "../public/hudniki.jpg"
import Image from "next/image"
import Layout from "../components/layout"
import { motion } from "framer-motion"

export default function HomeSecond(props) {
  
  console.log(props)
  let u
  console.log("Names:")
  for (u in props.users_ordered) {
    console.log(props.users_ordered[u].fst_name)
  }
  let users = props.users_ordered

  return (
    // <Layout></Layout>
    /* <section>
      {/* <ul>
          {users?.map((user) => {
            return (
            <li>
              <Link href={`/${user.fst_name}`} key={user.name} >{user.fst_name}</Link>
            </li>
        )})}
      </ul> */
      <motion.div 
        key="hudniki"
        variants={variants}
        initial="in"
        animate="inactive"
        exit="out"
        className="name"
      >
        <div class=".bgWrap" style={{opacity: 1}}>
          <Image
            alt="Hudniki"
            src={hudniki}
            // quality={1000}
            // height={800}
            // sizes="100vw"
            // layout="responsive"
            layout="fill"
            style={{ objectFit: 'cover' }}
          />
        </div>
        </motion.div>
    // </section>
    // </> 
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8000/website/api/')
  const users = await res.json()
  // console.log(users)

  let users_ordered = [];
  let names = ["Ruben", "Izak", "Tobija", "Milan", "Hermina", "Jonatan"];
  let n, user
  // console.log(users)
  // console.log(names)
  for (n in names) {
    for (user in users) {
      // console.log(users[user].fst_name + " = " + names[n])
      // console.log(users[user].fst_name === names[n])
      if (users[user].fst_name === names[n]) {
        users_ordered.push(users[user])
        // console.log("found one")
      }
    }
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users_ordered,
    },
  }
}


const variants = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  in: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};