import { Injectable } from "@nestjs/common";
import { CreateCreditsTransactionDto } from "./dto/create-credits-transaction.dto";
import { UpdateCreditsTransactionDto } from "./dto/update-credits-transaction.dto";
import { UserService } from "src/user/user.service";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";

@Injectable()
export class CreditsTransactionService {
  constructor(@InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin) {}

  create(createCreditsTransactionDto: CreateCreditsTransactionDto) {
    return "This action adds a new creditsTransaction";
  }

  findAll() {
    return `This action returns all creditsTransaction`;
  }

  findOne(transactionId: string) {
    return `This action returns a #${transactionId} creditsTransaction`;
  }

  update(transactionId: string, updateCreditsTransactionDto: UpdateCreditsTransactionDto) {
    return `This action updates a #${transactionId} creditsTransaction`;
  }

  remove(transactionId: string) {
    return `This action removes a #${transactionId} creditsTransaction`;
  }
}
