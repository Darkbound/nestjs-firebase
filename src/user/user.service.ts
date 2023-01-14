import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { User } from "./entities/user.entity";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";
import { UpdateUserCreditsDto } from "./dto/update-user-credits.dto";

@Injectable()
export class UserService extends FirebaseCollectionService<User> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase.db, "users");
  }

  async addCredits(id: string, updateUserCredits: UpdateUserCreditsDto): Promise<void> {
    await super.update(id, {
      credits: updateUserCredits.credits
    });
  }
}
