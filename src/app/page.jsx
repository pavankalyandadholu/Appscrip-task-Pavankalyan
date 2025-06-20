import Nav from "./Components/Nav/Nav";
import OurProducts from "./Components/Our-Products/OurProducts";
import Products from "./Components/Products/Products";
import styles from "./page.module.css";



export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // to simulate getServerSideProps-like behavior
  });
  const products = await res.json();
  return (
    <div className={styles.page}>
      <div>
        <Nav/>
        <div className={styles.container}>
        <OurProducts/>
        <Products products={products}/>
        </div>
       
      </div>
    </div>
  );
}




