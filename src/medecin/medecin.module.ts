// src/medecins/medecin.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from './medecin.entity';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Medecin])],
  providers: [MedecinService],
  controllers: [MedecinController],
})
export class MedecinModule {}
