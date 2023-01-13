import { Injectable } from "@nestjs/common";
import { CreatePurchaseTransactionDto } from "./dto/create-purchase-transaction.dto";
import { UpdatePurchaseTransactionDto } from "./dto/update-purchase-transaction.dto";

@Injectable()
export class PurchaseTransactionService {
  create(createPurchaseTransactionDto: CreatePurchaseTransactionDto) {
    return "This action adds a new purchaseTransaction";
  }

  findAll() {
    return `This action returns all purchaseTransaction`;
  }

  findOne(transactionId: string) {
    return `This action returns a #${transactionId} purchaseTransaction`;
  }

  update(transactionId: string, updatePurchaseTransactionDto: UpdatePurchaseTransactionDto) {
    return `This action updates a #${transactionId} purchaseTransaction`;
  }

  remove(transactionId: string) {
    return `This action removes a #${transactionId} purchaseTransaction`;
  }
}
