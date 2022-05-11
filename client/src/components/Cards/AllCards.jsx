import React from 'react'
import Cards from './Cards';
import './Cards.css'

export default function AllCards({finalWallets}) {
  return (
    <section id='cards-container'>
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
    </section>
  )
}
