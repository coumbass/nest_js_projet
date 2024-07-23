// src/rendezvous/rendezvous.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from '../patient/patient.entity';
import { Medecin } from '../medecin/medecin.entity';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @ManyToOne(() => Patient)
  patient: Patient;

  @ManyToOne(() => Medecin)
  medecin: Medecin;

  @Column()
  date: string;

  @Column()
  heure: string;

  @Column()
  lieu: string;
}
