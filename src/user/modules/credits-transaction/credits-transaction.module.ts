import { Module } from "@nestjs/common";
import { CreditsTransactionService } from "./credits-transaction.service";
import { CreditsTransactionController } from "./credits-transaction.controller";

@Module({
  controllers: [CreditsTransactionController],
  providers: [CreditsTransactionService]
})
export class CreditsTransactionModule {}
