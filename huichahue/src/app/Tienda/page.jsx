import { Producto } from "../components/Producto";
import data from "./data";
import styles from "./Tienda.module.css";

export default function Tienda() {
  console.log(data);
  return (
    <main className={styles.container}>
      <h1> Tienda </h1>
      <section className={styles.container_items}>
        {data.map((info, index) => (
          <div key={index}>
            <Producto
              id={info.id}
              nombre={info.nombre}
              seo={info.seo}
              descripcion={info.descripcion}
              precio={info.precio}
              grados={info.grados}
              formato={info.formato}
              enStock={info.enStock}
              Imagen={info.Imagen}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
