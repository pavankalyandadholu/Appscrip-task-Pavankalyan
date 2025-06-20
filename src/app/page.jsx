import Nav from "./Components/Nav/Nav";
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
        {/* {products?.length>0 && products.map(p=><h1 key={p.id}>{p.title}</h1>)} */}
      </div>
    </div>
  );
}




