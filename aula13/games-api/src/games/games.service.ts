import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto.js';
import { UpdateGameDto } from './dto/update-game.dto.js';
import { Game } from './entities/game.entity.js';

@Injectable()
export class GamesService {
  constructor (
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const novoGame = this.gameRepository.create(createGameDto);
    return await this.gameRepository.save(novoGame);
  }

  async findAll(): Promise<Game[]> {
    return await this.gameRepository.find();
  }

  async findOne(id: number): Promise<Game | null> {
    return await this.gameRepository.findOneBy({id});
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game | null> {
    await this.gameRepository.update(id, updateGameDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.gameRepository.delete(id);
  }
}