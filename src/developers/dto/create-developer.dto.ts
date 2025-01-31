import { IsString, IsEmail, IsDateString, IsEnum } from 'class-validator';


export enum TypesOfSpeciality {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    FULLSTACK = 'fullstack',
}

export class CreateDeveloperDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsDateString()
    dateOfBirth: string;
    @IsEnum(TypesOfSpeciality)
    speciality: TypesOfSpeciality;

}
