export interface Wallets {
  id?: number;
  address: string;
  isFavorite: boolean;
  firstTransaction: string;
  balance?: number;
}
