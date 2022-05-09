import { Controller, Get, Param, Put } from '@nestjs/common';
import { Price } from './interfaces/prices';
import { Wallets } from './interfaces/wallet';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get('/prices')
  getPrices(): Promise<Price> {
    return this.walletsService.getEtherPrices();
  }
  
  @Get('/:address')
  getWallet(@Param('address') address: string): Promise<Wallets> {
    return this.walletsService.addNewWallet(address);
  }

  @Get('/')
  getAllInfo(): Promise<Wallets[]> {
    return this.walletsService.getWalletsInfo();
  }

  @Put('/favorite/:id')
  putFavorite(@Param('id') id: number): Promise<void> {
    return this.walletsService.editFavorite(id);
  }
}
