import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrices, getWallets } from "../../store/actions";
import Cards from "../Cards/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const wallets = useSelector((store) => store.wallets);
  const prices = useSelector((store) => store.prices);

  useEffect(() => {
    dispatch(getWallets());
    dispatch(getPrices());
  }, [wallets.length, dispatch]);
  const finalWallets = wallets.map((wallet) => {
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
      <div>
        {finalWallets.map((wallet) => {
          return (
            <Cards
              key={wallet.id}
              id={wallet.id}
              address={wallet.address}
              balance={wallet.balance}
              isFavorite={wallet.isFavorite}
              isOld={wallet.isOld}
              ethusd={wallet.ethusd}
              ethbtc={wallet.ethbtc}
            />
          );
        })}
      </div>
    </section>
  );
}
