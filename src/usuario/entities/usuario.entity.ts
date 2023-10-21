/* eslint-disable prettier/prettier */
import { Column, Entity,PrimaryColumn } from "typeorm";



@Entity({name: 'Usuarios'})
export class Usuario {

    @PrimaryColumn({ name: 'nombre'})
    nombre :string;

    @Column({ name: 'clave'})
    clave:string;
    
    @Column({ name: 'correo'})
    correo:string;
    
    @Column({ name: 'correo'})
    nombreMostrar:string;


}
