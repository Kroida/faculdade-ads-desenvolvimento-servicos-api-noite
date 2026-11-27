import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    estudio: string;

    @Column()
    categoria: string;

    @Column()
    idade: string;

    @Column('decimal', {precision: 10, scale: 2})
    valor: number;

    @Column()
    disponibilidade: boolean;
}