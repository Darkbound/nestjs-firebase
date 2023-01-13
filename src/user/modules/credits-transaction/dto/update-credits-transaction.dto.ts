import { PartialType } from "@nestjs/mapped-types";
import { CreateCreditsTransactionDto } from "./create-credits-transaction.dto";

export class UpdateCreditsTransactionDto extends PartialType(CreateCreditsTransactionDto) {}
