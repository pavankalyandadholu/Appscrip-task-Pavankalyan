"use client";
import { useState } from "react";
import styles from "./Filters.module.css";
const Filters = ({ handleFiltersToggle, isFiltersOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersHeader}>
        <h1>Filters</h1>
      </div>
      <div className={styles.filtersItemsCount}>
        <h2>3425 Items</h2>
      </div>
      <div className={styles.filtersToggleButton}>
        <img
          src={isFiltersOpen ? "left-arrow.png" : "right-arrow.png"}
          alt=""
        />
        <button onClick={handleFiltersToggle}>
          {isFiltersOpen ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>
      <div className={styles.filtersCategories}>
        <h2>Recomended</h2>
        <img
          onClick={handleToggle}
          src={isOpen ? "up-arrow.png" : "down-arrow.png"}
          alt=""
        />
        <div
          className={
            isOpen
              ? styles.filtersCategoriesListContainer
              : styles.filtersCategoriesListContainerHidden
          }
        >
          <div>
            <h1>Recomended</h1>
          </div>
          <div>
            <h1>Newest first</h1>
          </div>
          <div>
            <h1>popular</h1>
          </div>
          <div>
            <h1>Price : high to low</h1>
          </div>
          <div>
            <h1>Price : low to high</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
