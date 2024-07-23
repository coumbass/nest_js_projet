// src/medecins/medecin.controller.ts
import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { Medecin } from './medecin.entity';

@Controller('medecins')
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @Post()
  async create(@Body() medecinData: Partial<Medecin>): Promise<Medecin> {
    return await this.medecinService.create(medecinData);
  }

  @Get()
  async findAll(): Promise<Medecin[]> {
    return await this.medecinService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Medecin> {
    return await this.medecinService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() medecinData: Partial<Medecin>): Promise<Medecin> {
    return await this.medecinService.update(id, medecinData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.medecinService.remove(id);
  }
}
