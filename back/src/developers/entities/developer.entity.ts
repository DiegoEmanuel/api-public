import { BeforeInsert, Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { nanoid } from 'nanoid';
import { TypesOfSpeciality } from "../dto/create-developer.dto";

@Entity('developers')
export class Developer {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

    @Column()
    speciality: TypesOfSpeciality;

    @CreateDateColumn()
    createdAt: Date;


    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    generateId() {
        this.id = `dev_${nanoid()}`;
    }

    getName(): string {
        return this.name;
    }


    setName(name: string) {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getDateOfBirth(): string {
        return this.dateOfBirth;
    }

    setDateOfBirth(dateOfBirth: string) {
        this.dateOfBirth = dateOfBirth;
    }

    getSpeciality(): string {
        return this.speciality;
    }

    setSpeciality(speciality: TypesOfSpeciality) {
        this.speciality = speciality;
    }


    getCreatedAt(): Date {
        return this.createdAt;
    }

    getUpdatedAt(): Date {
        return this.updatedAt;
    }
}

