import styles from "./SiteQueHacemos.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import CompSubHeader from "../CompSubHeader/CompSubHeader";

export default function SiteQueHacemos() {
  return (
    <div className={styles.SiteQueHacemos}>
      <CompSubHeader />

      <Box sx={{ flexGrow: 1 }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "auto",
            color: "#222",
          }}
        >
          <h1 style={{ textAlign: "center" }}>¿Qué Hacemos?</h1>
          <p>
            La Fundación Leer/IBBY Costa Rica es una organización dedicada a la
            creación de comunidades lectoras a través de mediadores capacitados
            y actividades lúdicas, en espacios de diálogo.
          </p>
          <p>
            Concebimos la lectura como un bien social al que la niñez y en la
            juventud tenga acceso para su formación y gozo, con el fin de
            contribuir al desarrollo de personas libres y reflexivas que
            participen en la construcción de una sociedad más justa.
          </p>
          <br></br>

          <ul>
            <li>
              Realizar talleres, seminarios, cursos, conferencias, exposiciones
              y eventos culturales y educativos dirigidos para toda la familia.
            </li>
            <li>
              Generar espacios de formación, capacitación profesional y de
              intercambio, a nivel nacional e internacional.
            </li>
            <li>
              Desarrollar investigaciones vinculadas a temas literarios,
              sociales, culturales y educativos.{" "}
            </li>
            <li>
              Colaborar con instituciones gubernamentales, no gubernamentales y
              organizaciones civiles para el fortalecimiento de la promoción de
              la lectura y la escritura
            </li>
          </ul>
        </div>

        <br />
      </Box>
      <div
        className={styles["bg-row-que-hacemos"]}
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img
          src="/images/quehacemos.png"
          className={styles["round-image"]}
        ></img>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
