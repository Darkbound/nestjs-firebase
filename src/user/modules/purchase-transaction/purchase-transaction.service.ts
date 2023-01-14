import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { PurchaseTransaction } from "./entities/purchase-transaction.entity";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";

@Injectable()
export class PurchaseTransactionService extends FirebaseCollectionService<PurchaseTransaction, { userId: string; transactionId: string }> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase, "users/{userId}/purchase-transactions");
  }
}
