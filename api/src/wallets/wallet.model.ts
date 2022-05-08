import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Wallet extends Model {
  @Column
  address: string;

  @Column
  isFavorite: boolean;

  @Column
  firstTransaction: string;
}
