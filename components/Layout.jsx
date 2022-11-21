// import useRouter from "next/navidation"
import hudniki from '../public/hudniki-transparent.jpg';
import Image from 'next/image';
import Transition from './Transitions';
import {motion} from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';



export default function Layout({ children }) {

    const { asPath } = useRouter()

    return (
        <>
            
            <ul>
                <li><Link key="Ruben" href="/Ruben">Ruben</Link></li>
                <li><Link key="Izak" href="/Izak">Izak</Link></li>
                <li><Link key="Tobija" href="/Tobija">Tobija</Link></li>
                <li><Link key="Milan" href="/Milan">Milan</Link></li>
                <li><Link key="Hermina" href="/Hermina">Hermina</Link></li>
                <li><Link key="Jonatan" href="/Jonatan">Jonatan</Link></li>
            </ul>

            <header class="sticky">
                <div class=".bgWrap">
                    <Image
                        alt="Hudniki"
                        src={hudniki}
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </header>
            
            <main>{children}</main>
            
            <footer>
                <ul>
                    <li id="footer"><Link href={`/`}>Home</Link></li>
                </ul>
            </footer>
        </>
    )
}



const variants = {
    hidden: { opacity: 0, x: 0, y: "100vh" },
    enter: { opacity: 1, x: 0, y: "5vh" },
    exit: { opacity: 0, x: 0, y: "-100vh" },
}