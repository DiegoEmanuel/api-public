import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developersService.create(createDeveloperDto);
  }

  @Get()
  findAll() {
    return this.developersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const developer = this.developersService.findOne(id);

    if (!developer) {
      throw new NotFoundException('Developer not found');
    }

    return developer;
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeveloperDto: UpdateDeveloperDto) {
    const developer = this.developersService.update(id, updateDeveloperDto);

    if (!developer) {
      throw new NotFoundException('Developer not found');
    }

    return developer;
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    const developer = this.developersService.remove(id);

    if (!developer) {
      throw new NotFoundException('Developer not found');
    }

    return;
  }
}
