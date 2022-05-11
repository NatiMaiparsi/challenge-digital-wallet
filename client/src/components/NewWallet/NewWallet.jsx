import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newWallet } from "../../store/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./NewWallet.css";

export default function NewWallet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  function onChange(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

  function onSubmitCreateWallet() {
    dispatch(newWallet(address));
    navigate("/todos");
  }
  return (
    <section>
      <NavBar />
      <div id="container-sidebar-newwallet">
        <SideBar />
        <div id="card-newWallet-container">
             <div id="newWallet-container">
          <form className="address-container">
            <span>Dirección: </span>
            <input onChange={(e) => onChange(e)} value={address} />
          </form>
          <div id="button-container">
            <button onClick={(e) => onSubmitCreateWallet(e)} type="submit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10L7 10"
                  stroke="#2ec5ce"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13L10 7"
                  stroke="#2ec5ce"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="9.25"
                  stroke="#2ec5ce"
                  strokeidth="1.5"
                />
              </svg>
              Agregar billetera
            </button>
          </div>
        </div> 
        </div>
      
      </div>
      <Footer />
    </section>
  );
}
