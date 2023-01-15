import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { SomeNewStuffService } from "./some-new-stuff.service";
import { CreateSomeNewStuffDto } from "./dto/create-some-new-stuff.dto";
import { UpdateSomeNewStuffDto } from "./dto/update-some-new-stuff.dto";

@Controller()
export class SomeNewStuffController {
  constructor(private readonly someNewStuffService: SomeNewStuffService) {}

  @Post()
  create(
    @Param("userId") userId: string,
    @Param("transactionId") transactionId: string,
    @Body() createSomeNewStuffDto: CreateSomeNewStuffDto
  ) {
    return this.someNewStuffService.create(createSomeNewStuffDto, { transactionId, userId });
  }

  @Get()
  findAll(@Param("userId") userId: string, @Param("transactionId") transactionId: string) {
    return this.someNewStuffService.findAll({ transactionId, userId });
  }

  @Get(":newStuffId")
  findOne(@Param("userId") userId: string, @Param("transactionId") transactionId: string, @Param("newStuffId") newStuffId: string) {
    return this.someNewStuffService.findOne(newStuffId, { transactionId, userId });
  }

  @Patch(":newStuffId")
  update(
    @Param("userId") userId: string,
    @Param("transactionId") transactionId: string,
    @Param("newStuffId") newStuffId: string,
    @Body() updateSomeNewStuffDto: UpdateSomeNewStuffDto
  ) {
    return this.someNewStuffService.update(newStuffId, updateSomeNewStuffDto, { transactionId, userId });
  }

  @Delete(":newStuffId")
  remove(@Param("userId") userId: string, @Param("transactionId") transactionId: string, @Param("newStuffId") newStuffId: string) {
    return this.someNewStuffService.delete(newStuffId, { transactionId, userId });
  }
}
