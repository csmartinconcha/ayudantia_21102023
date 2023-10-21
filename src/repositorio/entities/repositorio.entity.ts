/* eslint-disable prettier/prettier */
import { Column, Entity,PrimaryColumn } from "typeorm";




@Entity({name: 'Repositorios'})
export class Repositorios {

    @PrimaryColumn({ name: 'id'})
    id :string;

    @Column({ name: 'ruta'})
    ruta:string;
    
    @Column({ name: 'descripcionm'})
    descripcion:string;
    
    @Column({ name: 'publico'})
    publico:boolean;

    @Column({ name: 'idProyecto'})
    idProyecto:string;

}
