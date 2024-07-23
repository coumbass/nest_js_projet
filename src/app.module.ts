import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { MedecinModule } from './medecin/medecin.module';
import { RendezvousModule } from './rendezvous/rendezvous.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rv',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    PatientModule,
    MedecinModule,
    RendezvousModule,
  ],
})
export class AppModule {}
