import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games.service.js';
import { GamesController } from './games.controller.js';
import { Game } from './entities/game.entity.js';

@Module({
  // Disponibiliza o repositório de Game neste módulo.
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}