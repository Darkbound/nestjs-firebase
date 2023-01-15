import { PartialType } from '@nestjs/swagger';
import { CreateSomeNewStuffDto } from './create-some-new-stuff.dto';

export class UpdateSomeNewStuffDto extends PartialType(CreateSomeNewStuffDto) {}
