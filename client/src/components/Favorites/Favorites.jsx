import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, getPrices } from '../../store/actions';
import AllCards from '../Cards/AllCards';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './Favorites.css'

export default function Favorites() {
    const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);
  const prices = useSelector((store) => store.prices);

  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getPrices());
  }, [favorites, dispatch]);
  const finalWallets = favorites.map((wallet) => {
    const actualDate = new Date();
    const oldDate = new Date(1 - 1 - 1970);
    const difSeconds =
      actualDate -
      oldDate.setSeconds(
        oldDate.getSeconds() + parseInt(wallet.firstTransaction)
      );
    const difYears = difSeconds / (1000 * 60 * 60 * 24 * 360);
    if (difYears > 1) {
      return {
        id: wallet.id,
        address: wallet.address,
        balance: parseInt(wallet.balance) * Math.pow(10, -18),
        isOld: true,
        isFavorite: wallet.isFavorite,
        ethusd: parseInt(wallet.balance) * Math.pow(10, -18) * prices.ethusd,
        ethbtc: parseInt(wallet.balance) * Math.pow(10, -18) * prices.ethbtc,
      };
    } else {
      return {
        id: wallet.id,
        address: wallet.address,
        balance: parseInt(wallet.balance) * Math.pow(10, -18),
        isOld: false,
        isFavorite: wallet.isFavorite,
        ethusd: parseInt(wallet.balance) * Math.pow(10, -18) * prices.ethusd,
        ethbtc: parseInt(wallet.balance) * Math.pow(10, -18) * prices.ethbtc,
      };
    }
  });
  return (
    <section>
      <NavBar />
      <div id='container-cards-sidebar-fav'>
        <SideBar/> 
        {finalWallets.length > 0? (<AllCards finalWallets={finalWallets}/>) : (<div id="container-favorites">
          <h1>No tiene favoritos</h1>
          <div id="container-buttons-favorites">
            <a href="/Todos">Ver Billeteras</a>
            <a href="/Nueva">Agregar Billetera</a>
          </div>
        </div>)}
      </div>
      <Footer/>
    </section>
  );

}
