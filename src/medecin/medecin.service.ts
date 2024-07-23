// src/medecins/medecin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medecin } from './medecin.entity';

@Injectable()
export class MedecinService {
  constructor(
    @InjectRepository(Medecin)
    private readonly medecinRepository: Repository<Medecin>,
  ) {}

  async create(medecinData: Partial<Medecin>): Promise<Medecin> {
    const medecin = this.medecinRepository.create(medecinData);
    return await this.medecinRepository.save(medecin);
  }

  async findAll(): Promise<Medecin[]> {
    return await this.medecinRepository.find();
  }

  async findOne(id: number): Promise<Medecin> {
    return await this.medecinRepository.findOne({ where: { id } });
  }

  async update(id: number, medecinData: Partial<Medecin>): Promise<Medecin> {
    await this.medecinRepository.update(id, medecinData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.medecinRepository.delete(id);
  }
}
