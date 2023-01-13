import { Injectable } from "@nestjs/common";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { User } from "./entities/user.entity";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";
import { UpdateUserCreditsDto } from "./dto/update-user-credits.dto";
import { NestjsFirebase } from "src/firebase/nestjs-firebase.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService extends NestjsFirebase<User> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase, "users");
  }

  async addCredits(id: string, updateUserCredits: UpdateUserCreditsDto): Promise<void> {
    const db = new FirebaseCollectionService<User>(super.firebase, super.collectionPath as string);

    await db.update(id, {
      credits: updateUserCredits.credits
    });
  }
}
