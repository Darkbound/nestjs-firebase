import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CreditsTransactionService } from "./credits-transaction.service";
import { CreateCreditsTransactionDto } from "./dto/create-credits-transaction.dto";
import { UpdateCreditsTransactionDto } from "./dto/update-credits-transaction.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "src/user/user.service";

@ApiTags("User Credits Transactions")
@Controller()
export class CreditsTransactionController {
  constructor(private readonly creditsTransactionService: CreditsTransactionService) {}

  @Post()
  create(@Body() createCreditsTransactionDto: CreateCreditsTransactionDto) {
    return this.creditsTransactionService.create(createCreditsTransactionDto);
  }

  @Get()
  findAll() {
    return this.creditsTransactionService.findAll();
  }

  @Get(":transactionId")
  findOne(@Param("transactionId") transactionId: string) {
    return this.creditsTransactionService.findOne(transactionId);
  }

  @Patch(":transactionId/state")
  update(
    @Param() { transactionId, userId }: { transactionId: string; userId: string },
    @Body() updateCreditsTransactionDto: UpdateCreditsTransactionDto
  ) {
    return this.creditsTransactionService.update(transactionId, updateCreditsTransactionDto);
  }
}
