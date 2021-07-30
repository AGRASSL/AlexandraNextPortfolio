import Link from 'next/link'
import style from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={style.header}>

            <div className={style.menu_wrap}>
                <input type="checkbox" className={style.toggler}/>
                <div className={style.hamburger}><div></div></div>
                <div className={style.menu}>
                    <div>
                        <div>
                            <ul>
                        
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li>
                                    <Link href='/about-me'>About Me</Link>
                                </li>
                                <li>
                                    <Link href='/my-work'>My Work</Link>
                                </li>
                                <li>
                                    <Link href='/experience'>Experience</Link>
                                </li>
                                {/* <li>
                                    <Link href='/Logs'>game log</Link>
                                </li> */}
                                <li>
                                    <Link href='/contact-me'>Contact Me</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </nav>
    )
}

export default Nav