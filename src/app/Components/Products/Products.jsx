"use client";
import { useState } from "react";
import FilterItemCard from "../FilterItemCard/FilterItemCard";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
const Products = ({ products }) => {
  const FilterList = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const handleFiltersToggle = () => {
    setIsFiltersOpen(!isFiltersOpen);
  }
  return (
    <div>
      <Filters  handleFiltersToggle={handleFiltersToggle} isFiltersOpen={isFiltersOpen} />
      <div className={styles.ProductsContainer}>
        {/* Filters */}
        <div className={styles.ProductsFiltersContainer}>
          { isFiltersOpen && FilterList.map((item, index) => (
            <FilterItemCard key={index} title={item} />
          ))}
        </div>
        {/* Products */}
        <div className={styles.ProductsListContainer}>
          {/* Product Cards will go here */}
          {products?.length > 0 &&
            products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
