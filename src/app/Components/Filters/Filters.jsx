import styles from './Filters.module.css';
const Filters = () => {
    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersHeader}>
                <h1>Filters</h1>
            </div>
            <div className={styles.filtersItemsCount}>
                <h2>3425 Items</h2>
            </div>
            <div className={styles.filtersToggleButton}>
                <img src="left-arrow.png" alt="" />
                <button>HIDE FILTER</button>
            </div>
            <div className={styles.filtersCategories}>
                <h2>Recomended</h2>
                <img src="down-arrow.png" alt="" />
            </div>
        </div>
    );
}

export default Filters;