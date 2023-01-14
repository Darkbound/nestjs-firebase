import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PurchaseTransactionService } from "./purchase-transaction.service";
import { CreatePurchaseTransactionDto } from "./dto/create-purchase-transaction.dto";
import { UpdatePurchaseTransactionDto } from "./dto/update-purchase-transaction.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User Purchase Transactions")
@Controller()
export class PurchaseTransactionController {
  constructor(private readonly purchaseTransactionService: PurchaseTransactionService) {}

  @Post()
  create(@Param("userId") userId: string, @Body() createPurchaseTransactionDto: CreatePurchaseTransactionDto) {
    return this.purchaseTransactionService.create(createPurchaseTransactionDto, { userId });
  }

  @Get()
  findAll() {
    return this.purchaseTransactionService.findAll();
  }

  @Get(":transactionId")
  findOne(@Param("userId") userId: string, @Param("transactionId") transactionId: string) {
    return this.purchaseTransactionService.findOne(transactionId, { userId });
  }

  @Patch(":transactionId/state")
  update(@Param("transactionId") transactionId: string, @Body() updatePurchaseTransactionDto: UpdatePurchaseTransactionDto) {
    return this.purchaseTransactionService.update(transactionId, updatePurchaseTransactionDto);
  }
}
