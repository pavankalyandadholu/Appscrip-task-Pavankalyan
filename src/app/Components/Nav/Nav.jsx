import styles from './Nav.module.css';
import Link from 'next/link';
const Nav = () => {
    return (
        <section>
            {/* Top Branding */}
            <div className={styles.navContainer}>
            <div className={styles.navTop}>
              <NavTopItem />
              <NavTopItem />
              <NavTopItem />
            </div>
               {/* Nav Bar */}
            <nav className={styles.navBar}>
                {/* Nav Logos */}
                <div className={styles.navBarLogo}>
                    <div>
                        <img src="Logo.png" alt="" />
                    </div>
                    <div className={styles.navBarLogoText}><h1>LOGO</h1></div>
                    <div className={styles.navBarLogoIcons}>
                        <div>
                            <img src="search-normal.png" alt="" />
                        </div>
                        <div>
                            <img src="heart.png" alt="" />
                        </div>
                        <div>
                            <img src="person.png" alt="" />
                        </div>
                        <div>
                            <img src="store.png" alt="" />
                        </div>
                        <div className={styles.navBarLogoIconsLanguage}>
                            <h3 className={styles.navBarLogoIconsLanguageText}>
                                ENG
                            </h3>
                            <div className={styles.navBarLogoIconsLanguageIcon}>
        <img src="down-arrow.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                {/* Nav Links */}
                <div className={styles.navBarLinks}>
                    
                    <Link href={'/'}>
                    <h3>Shop</h3>
                    </Link>

                    <Link href={'/'}>
                        <h3>Skills</h3>
                    </Link>
                    <Link href={'/'}>
                        <h3>Stories</h3>
                    </Link>
                    <Link href={'/'}>
                        <h3>About</h3>
                    </Link>
                    <Link href={'/'}>
                        <h3>Contact US</h3>
                    </Link>
                    
                </div>
                <div className={styles.navBarLinksSmall}>
                    
                    <Link href={'/'}>
                    <h3>Home</h3>
                    </Link>
                    <div></div>
                    <Link href={'/'}>
                    <h3>Shop</h3>
                    </Link>

                   
                    
                </div>
            </nav>
            </div>
         
        </section>
    );
}

export default Nav;

const NavTopItem=()=>{
    return(
    <div className={styles.navTopItem}>
        <div className={styles.navTopItemIcon}>
            <div className={styles.navTopItemIconContainer1}>

         
        <div className={styles.navTopItemIconBox1}>
        
        </div>
        <div className={styles.navTopItemIconBox2}>
        
        </div>
           </div>
           {/* second half  */}
           <div className={styles.navTopItemIconContainer2}>
            <div className={styles.navTopItemIconBox3}>

            </div>
        <div className={styles.navTopItemIconBox4}>
        
        </div>
           </div>
        </div>
        <h3 className={styles.navTopItemText}>
            Lorem ipsum dolor
        </h3>
    </div>)
}