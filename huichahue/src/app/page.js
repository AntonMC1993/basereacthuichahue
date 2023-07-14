import Image from "next/image";
import styles from "./components/Home/Home.module.css";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main>
      <>
        <Carousel />
        <div className={styles.rectangulo2}>
          <p>PRODUCTOS DESTACADOS</p>
        </div>
        <div>
          <ul className={styles.fotosProductos}>
            <li id="cervezas">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <img
                src="ImagenPNG/amberale.png"
                alt="cerveza1"
                width={400}
                height={400}
              />
              <img
                src="ImagenPNG/pilsen.png"
                alt="cerveza2"
                width={400}
                height={400}
              />
              <img
                src="ImagenPNG/cachodecabra.png"
                alt="cerveza3"
                width={400}
                height={400}
              />
              <img
                src="ImagenPNG/arandano.png"
                alt="cerveza4"
                width={400}
                height={400}
              />
              <img
                src="ImagenPNG/maqui.png"
                alt="cerveza5"
                width={400}
                height={400}
              />
              <img
                src="ImagenPNG/moras.png"
                alt="cerveza6"
                width={400}
                height={400}
              />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className={styles.rectangulo3}>
          <p>PACKS</p>
        </div>
        <div>
          <ul className={styles.fotospacks}>
            <li id="packs">
              <br />
              <br />
              <br />
              <br />
              <img
                src="ImagenTienda/pack1.jpg"
                alt="cerveza1"
                width={400}
                height={400}
              />
              <img
                src="ImagenTienda/pack3.jpg"
                alt="cerveza2"
                width={400}
                height={400}
              />
              <img
                src="ImagenTienda/pack2.jpg"
                alt="cerveza3"
                width={400}
                height={400}
              />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <br />

        <section id="sec2">
          <div className="rectangulo4">
            <p>OBJETIVOS SOCIOAMBIENTALES</p>
          </div>
          <br />
          <br /> <br />
          <br /> <br />
          <br />
          <div className={styles.imagecontainer}>
            <ul id="imagecontainerimg" className={styles.imagecontainerimg}>
              <img src="/solidarity.png" alt="Imagen 1" width={90} />
              <img src="/cheers.png" alt="Imagen 2" width={90} />
              <img src="/group.png" alt="Imagen 3" width={90} />
              <img src="/recycle (1).png" alt="Imagen 4" width={90} />
            </ul>
          </div>
          <ul id="botonesobjetivos" className={styles.botonesobjetivos}>
            <li>
              <ul className={styles.botonesobjetivos}>
                <li>
                  <a className="botones" href="Index.html">
                    Impulsamos la comunidad local
                  </a>
                  <a className="botones" href="Index.html">
                    Beber con moderación
                  </a>
                  <a className="botones" href="Index.html">
                    Visitas guiadas con fines educativos
                  </a>
                  <a className="botones" href="Index.html">
                    Envases reciclados
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br />
        </section>
      </>
    </main>
  );
}
