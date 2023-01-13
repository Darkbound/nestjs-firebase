import { Module } from "@nestjs/common";
import { PurchaseTransactionService } from "./purchase-transaction.service";
import { PurchaseTransactionController } from "./purchase-transaction.controller";

@Module({
  controllers: [PurchaseTransactionController],
  providers: [PurchaseTransactionService]
})
export class PurchaseTransactionModule {}
