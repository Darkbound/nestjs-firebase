import { Module } from '@nestjs/common';
import { SomeNewStuffService } from './some-new-stuff.service';
import { SomeNewStuffController } from './some-new-stuff.controller';

@Module({
  controllers: [SomeNewStuffController],
  providers: [SomeNewStuffService]
})
export class SomeNewStuffModule {}
