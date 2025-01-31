import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { Developer } from './entities/developer.entity';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private developersRepository: Repository<Developer>,
  ) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    const developer = new Developer();
    developer.setName(createDeveloperDto.name);
    developer.setEmail(createDeveloperDto.email);
    developer.setDateOfBirth(createDeveloperDto.dateOfBirth);
    developer.setSpeciality(createDeveloperDto.speciality);

    return await this.developersRepository.save(developer);
  }

  findAll() {
    return this.developersRepository.find();
  }

  findOne(id: string) {
    return this.developersRepository.findOneBy({ id });
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    const developer = await this.findOne(id);
    if (!developer) {
      return null;
    }

    if (updateDeveloperDto.name) {
      developer.setName(updateDeveloperDto.name);
    }
    if (updateDeveloperDto.email) {
      developer.setEmail(updateDeveloperDto.email);
    }
    if (updateDeveloperDto.dateOfBirth) {
      developer.setDateOfBirth(updateDeveloperDto.dateOfBirth);
    }
    if (updateDeveloperDto.speciality) {
      developer.setSpeciality(updateDeveloperDto.speciality);
    }

    return await this.developersRepository.save(developer);
  }

  async remove(id: string) {
    const developer = await this.findOne(id);
    if (developer) {
      await this.developersRepository.remove(developer);
      return true;
    }
    return false;
  }
}
