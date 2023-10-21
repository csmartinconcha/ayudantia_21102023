/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { Proyecto } from './proyecto/entities/proyecto.entity';
import { Repositorios } from './repositorio/entities/repositorio.entity';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: "root",
      password: 'clave123',
      database: 'GIT',
      entities: [
        Usuario,
        Proyecto,
        Repositorios,
      ]
      }),

    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
