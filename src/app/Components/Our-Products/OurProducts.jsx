import styles from './OurProducts.module.css';
const OurProducts = () => {
    return (
    <div className={styles.ourProductsContainer}>
            {/* text */}
            <div className={styles.ourProductsTitle}>
                <h1>DISCOVER OUR PRODUCTS</h1>
            </div>
            {/* para */}
            <div  className={styles.ourProductsPara}>
<p>
    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
</p>
            </div>
        </div>
    );
}

export default OurProducts;