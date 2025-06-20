import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            {/* Subscribe and contact Us */}
            <div className={styles.subscribeContactContainer}>
                {/* subscribe */}
                <div className={styles.subscribeContainer}>
                <div className={styles.subscribeText}>
                    <h1>Be the first to know</h1>
                    <p>Sign up for updates from mettā muse.</p>
                </div>
                <div className={styles.subscribeInput}>
                    <input type="email"  />
                    <button>Subscribe</button>
                </div>
                </div>
                {/* contact us and currency */}
                <div className={styles.contactCurrencyContainer}>
                    {/* contact Us */}
                    <div className={styles.contactUsContainer}>
                        <h1>CONTACT US</h1>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>

                    </div>
                    {/* currency */}
                    <div className={styles.currencyContainer}>
                        <h1 >
                            Currency</h1> 
                            <div className={styles.currency}>
                                <img src="usdflag.png" alt="" />
                                <div></div>
                                <p>USD</p>
                            </div>
                            <p>
                                Transactions will be completed in Euros and a currency reference is available on hover.
                            </p>
                    </div>

                </div>
            </div>
            <hr  className={styles.divider}/>
            {/* other Links  */}

            <div className={styles.otherLinksContainer}>
                {/* Meta mouse */}
        <div className={styles.mettaMuseContainer}>
            <h1>mettā muse</h1>
            <div className={styles.mettaMuseLinks}>
                <p>About Us</p>
                <p>Stories </p>
                <p>Artisans </p>
                <p>Boutiques </p>
                <p>Contact Us </p>
                <p>EU Compliances </p>
            </div>
        </div>
        <div className={styles.mettaMuseContainer}>
            <h1>Quick Links</h1>
            <div className={styles.mettaMuseLinks}>
                <p>Orders & Shipping  </p>
                <p>Join/Login as a Seller </p>
                <p>Payment & Pricing </p>
                <p>RReturn & Refunds </p>
                <p>FAQs </p>
                <p>Privacy Policy </p>
                <p>Terms & Conditions </p>
            </div>
        </div>
        {/* follow us */}
        <div>

        
        <div className={styles.followUsContainer}>
            <h1>Follow Us</h1>
            
                <div className={styles.followUs}>
                    <div>
                       <img src="instagram.png" alt="instagram" /> 
                    </div>
                    <div>
<img src="linkedIn.png" alt="linkedIn" />
                    </div>
                    
                   
                    
                </div>
                
        </div>
        <div className={styles.paymentsContainer}>
            <h1>mettā muse Accepts</h1>
            
                <div className={styles.payments}>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                    <div>
                       <img src="gpay.png" alt="visa" /> 
                    </div>
                   
                    
                   
                    
                    
                    
                </div>
                
        </div>
        </div>
            </div>
            <div className={styles.footerBottom}>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
        </div>
    );
}

export default Footer;