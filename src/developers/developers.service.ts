import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { Repository } from 'typeorm';
import { Developer } from './entities/developer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private readonly repository: Repository<Developer>
  ) {}

  create(createDeveloperDto: CreateDeveloperDto) {
    const developer = this.repository.create(createDeveloperDto);
    return this.repository.save(developer);
  }



  findAll() {
    return this.repository.find();
  }


  findOne(id: string) {
    return this.repository.findOne({ where: { id } });
  }


  update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return this.repository.update(id, updateDeveloperDto);
  }


  remove(id: string) {
    return this.repository.delete(id);
  }

}
