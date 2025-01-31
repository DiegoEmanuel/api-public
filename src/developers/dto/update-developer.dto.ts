import { PartialType } from '@nestjs/mapped-types';
import { CreateDeveloperDto } from './create-developer.dto';

//ta dizendo que é pra aproveitar oq tem lá na create-developer.dto só que é opcional
export class UpdateDeveloperDto extends PartialType(CreateDeveloperDto) {}
