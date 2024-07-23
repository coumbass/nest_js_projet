// src/rendezvous/rendezvous.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendezVous } from './rendezvous.entity';

@Injectable()
export class RendezVousService {
  constructor(
    @InjectRepository(RendezVous)
    private readonly rendezvousRepository: Repository<RendezVous>,
  ) {}

  async create(rendezvous: RendezVous): Promise<RendezVous> {
    return await this.rendezvousRepository.save(rendezvous);
  }

  async findAll(): Promise<RendezVous[]> {
    return await this.rendezvousRepository.find();
  }

  async findOne(id: number): Promise<RendezVous> {
    return await this.rendezvousRepository.findOneBy({ id });
  }

  async update(id: number, rendezvous: Partial<RendezVous>): Promise<RendezVous> {
    await this.rendezvousRepository.update(id, rendezvous);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rendezvousRepository.delete(id);
  }
}
