import styles from './ProductCard.module.css';
const ProductCard = ({product}) => {
    return (
        <div className={styles.ProductCardContainer}>
            <div className={styles.ProductNew}>
                <h2>
                    new product
                </h2>
            </div>
            <div className={styles.ProductCardImage}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.ProductCardDetails}>
                <h2>{product.title.slice(0,18)}...</h2>
                <div>
                    <p>
                       <span>Sign in</span>  or Create an account to see pricing
                    </p>
                    <img src="heart.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;