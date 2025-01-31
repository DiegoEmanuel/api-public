import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

const nanoid = require('nanoid');
@Entity('developers')
export class Developer {
    @PrimaryColumn()
    id: string; //esse vai ser o id do desenvolvedor



    @Column()
    name: string; //esse vai ser o nome do desenvolvedor

    @Column()
    email: string; //esse vai ser o email do desenvolvedor


    @Column()
    dateOfBirth: string; //esse vai ser a data de nascimento do desenvolvedor


    @BeforeInsert()    
    generateId() {
        this.id = `dev_${nanoid()}`;
    }

}
