import { PartialType } from "@nestjs/mapped-types";
import { CreatePurchaseTransactionDto } from "./create-purchase-transaction.dto";

export class UpdatePurchaseTransactionDto extends PartialType(CreatePurchaseTransactionDto) {}
