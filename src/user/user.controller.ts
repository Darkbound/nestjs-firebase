import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, CreateUserDtoSchema } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserCreditsDto, UpdateUserCreditsDtoSchema } from "./dto/update-user-credits.dto";
import { JoiValidationPipe } from "src/validation.pipe";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { InternalServerErrorException } from "@nestjs/common/exceptions";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Operation Bro" })
  @ApiCreatedResponse({ description: "Created a User" })
  @Post()
  @UsePipes(new JoiValidationPipe(CreateUserDtoSchema))
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (e) {
      console.log(e);
    }
  }

  @Get(":userId")
  async findOne(@Param("userId") userId: string) {
    return this.userService.findOne(userId);
  }

  @Get("/by-username/:username")
  async findByUsername(@Param("username") userId: string) {
    return this.userService.findOne(userId);
  }

  @Get("/by-email/:email")
  async findByEmail(@Param("email") userId: string) {
    return this.userService.findOne(userId);
  }

  @Patch(":userId/add-credits")
  @UsePipes(new JoiValidationPipe(UpdateUserCreditsDtoSchema))
  async update(@Param("userId") userId: string, @Body() updateUserCreditsDto: UpdateUserCreditsDto) {
    return this.userService.addCredits(userId, updateUserCreditsDto);
  }

  @Delete(":userId")
  async remove(@Param("userId") userId: string) {
    return this.userService.delete(userId);
  }
}
