import { useRouter } from 'next/router'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { processCv } from '../components/processCv'


export async function getStaticPaths() {
    return {
        paths: [
            { params: { name: 'Izak' } },
            { params: { name: 'Tobija' } },
            { params: { name: 'Ruben' } },
            { params: { name: 'Jonatan' } },
            { params: { name: 'Milan' } },
            { params: { name: 'Hermina' } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
}

export default function UserPage(props) {

    const { asPath } = useRouter();
    const router = useRouter()
    const name = router.query.name
    const users = props.users_ordered

    const user = Object.values(users).filter(item => item.fst_name.startsWith(name))[0]

    let image = user.image
    let cv = processCv(user.cv)
    console.log(cv)

    return (
        <main className="page" id="page-main">
            < motion.div
                key={asPath}
                variants={variants}
                initial="in"
                animate="inactive"
                exit="out"
                className="name"> 

                    <div class="grey-backgound" id="name" key={name}>
                        <div class="title-grid">
                            <div class="title-item">
                                <h1 class="titleName">{user.fst_name.toUpperCase()} {user.last_name.toUpperCase()}</h1>
                            </div>
                            <div class="title-item">
                            </div>
                        </div>

                        <div class="profile-container">
                            <div class="profile-item" class="imageProfile">
                                <Image
                                    src={image}
                                    width={6000}
                                    height={4000}
                                    layout="responsive" />
                            </div>
                            <div class="profile-item">
                                <h2>About</h2>
                                {/* < class="about" style={{ font-weight: 400, font-size: "30px" }}>About</p> */}
                                {cv.map((p) => {
                                    return (
                                        <p class="about">{p}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div><div class="grey-backgound"><p>Pride se kaj tukaj</p></div>
            </motion.div>
        </main>

        
                    
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
                users_ordered = users_ordered.concat([users[user]])
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
        y: "-35vh",
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
    out: {
        opacity: 0,
        y: "10vh",
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    in: {
        y: "50vh",
        opacity: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};