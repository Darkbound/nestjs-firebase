import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { SomeNewStuff } from "./entities/some-new-stuff.entity";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";

type FirebaseCollectionPathParams = {
  userId: string;
  transactionId: string;
};

@Injectable()
export class SomeNewStuffService extends FirebaseCollectionService<SomeNewStuff, FirebaseCollectionPathParams> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase.db, "users/{userId}/purchase-transactions/{transactionId}/some-new-stuff");
  }
}
