import Link from "next/link";

import Logo from "@/assets/logo.png"

import classes from './main-header.module.css'
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {





    return <header className={classes.header}>

        <Link className={classes.logo} href={'/'} >
            <Image src={Logo} alt="a plate" priority />
            Next Level Food
        </Link>

        <nav className={classes.nav}>

            <ul>

                <li>
                    {/* <Link href={'/meals'}

                        className={path.startsWith('/meals') ? classes.active : undefined}

                    >
                        browse meals
                    </Link> */}
                    <NavLink href={'/meals'}> browse meals </NavLink>
                </li>

                <li>
                    {/* <Link href={'/community'}

                        className={path.startsWith('/community') ? classes.active : undefined}

                    >
                        community
                    </Link> */}

                    <NavLink href={'/community'}> foodies community </NavLink>
                </li>
            </ul>

        </nav>

    </header>
} 