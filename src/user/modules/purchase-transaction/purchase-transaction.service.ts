import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { PurchaseTransaction } from "./entities/purchase-transaction.entity";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";

type FirebaseCollectionPathParams = {
  userId: string;
};

@Injectable()
export class PurchaseTransactionService extends FirebaseCollectionService<PurchaseTransaction, FirebaseCollectionPathParams> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase.db, "users/{userId}/purchase-transactions");
  }

  async someComplexStuff(id: string, pathArgs: FirebaseCollectionPathParams): Promise<PurchaseTransaction> {
    const transaction = await super.findOne(id, pathArgs);

    await super.update(id, { hello: "hello" }, pathArgs);

    return transaction;
  }
}

// Path args is required for nested collections!
