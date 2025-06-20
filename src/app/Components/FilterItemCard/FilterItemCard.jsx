import styles from './FilterItemCard.module.css';
const FilterItemCard = ({title}) => {
    return (
        <div className={styles.FilterItemCardContainer}>
            <div className={styles.FilterItemCardTitleContainer}>
            <h2 className={styles.FilterItemCardTitle}>
{title}
            </h2>
            <img src="down-arrow.png" alt="" />
            </div>
            <h2 className={styles.FilterItemCardSubTitle}>
        All
            </h2>
        </div>
    );
}

export default FilterItemCard;