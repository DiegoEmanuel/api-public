import { Injectable, NotFoundException } from '@nestjs/common';
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


  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    const developer = await this.repository.findOne({
      where: { id }
    })

    if (!developer) {
      throw new NotFoundException('Developer not found');
    }

    this.repository.merge(developer, updateDeveloperDto); // o merge é para atualizar o developer com os dados do updateDeveloperDto
    return this.repository.save(developer);
  }




  remove(id: string) {
    return this.repository.delete(id);
  }

}
