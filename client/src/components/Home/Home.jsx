import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

export default function Home() {
  return (
    <section>
      <NavBar />
      <div id="container-sidebar-home">
        <SideBar />
        <div id="container-home">
          <h1>Bienvenido a EtherExchange</h1>
          <div id="container-buttons-home">
            <a href="/Todos">Ver Billeteras</a>
            <a href="/Nueva">Agregar Billetera</a>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
