// src/medecins/medecin.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Medecin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  profession: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @ManyToOne(() => User, (user) => user.medecins)
  user: User;
}
