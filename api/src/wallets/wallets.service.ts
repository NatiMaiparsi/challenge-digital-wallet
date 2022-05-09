import * as dotenv from 'dotenv';
dotenv.config();
const { API_KEY } = process.env;

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import axios from 'axios';
import { Wallets } from './interfaces/wallet';
import { Wallet } from './wallet.model';
import { Price } from './interfaces/prices';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet)
    private walletModel: typeof Wallet,
  ) {}

  async addNewWallet(address: string): Promise<Wallets> {
    const results = await axios(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=des&apikey=${API_KEY}`,
    );
    const transactions = results.data.result;
    let firstTransactionDate: string = null;
    transactions.map((transaction) => {
      if (transaction.blockNumber === '0') {
        firstTransactionDate = transaction.timeStamp;
      }
    });
    const newWallet = await this.walletModel.create({
      address: address,
      isFavorite: false,
      firstTransaction: firstTransactionDate,
    });
    return newWallet;
  }

  async getWalletsInfo(): Promise<Wallets[]> {
    const walletsInDB = await this.walletModel.findAll();
    const accounts = walletsInDB.map((wallet) => wallet.address);
    const strAccounts: string = accounts.join(',');
    const results = await axios(
      `https://api.etherscan.io/api?module=account&action=balancemulti&address=${strAccounts}&tag=latest&apikey=${API_KEY}`,
    );
    const allWalletsInfo: Wallets[] = results.data.result.map((wallet) => {
      for (let i = 0; i < walletsInDB.length; i++) {
        if (walletsInDB[i].address === wallet.account) {
          return {
            id: walletsInDB[i].id,
            address: walletsInDB[i].address,
            isFavorite: walletsInDB[i].isFavorite,
            firstTransaction: walletsInDB[i].firstTransaction,
            balance: wallet.balance,
          };
        }
      }
    });
    return allWalletsInfo;
  }

  async editFavorite(id: number): Promise<void> {
    const wallet = await this.walletModel.findOne({ where: { id } });
    if (wallet.isFavorite === false) {
      await this.walletModel.update({ isFavorite: true }, { where: { id } });
    } else {
      await this.walletModel.update({ isFavorite: false }, { where: { id } });
    }
  }

  async getEtherPrices(): Promise<Price> {
    const results = await axios(
      `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`,
    );
    const prices = results.data.result;
    return {
      ethbtc: parseFloat(prices.ethbtc),
      ethusd: parseFloat(prices.ethusd),
    };
  }
}
