import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { PurchaseTransaction } from "./entities/purchase-transaction.entity";
import { NestjsFirebase } from "src/firebase/nestjs-firebase.service";

@Injectable()
export class PurchaseTransactionService extends NestjsFirebase<PurchaseTransaction> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    // So how to get userId to here and get it to reinitialize when userId changes?
    super(firebase, ["users", userId, "purchaseTransactions"]);
  }
}
