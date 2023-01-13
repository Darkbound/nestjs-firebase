import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserCreditsDto } from "./dto/update-user-credits.dto";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { InjectFirebaseAdmin } from "nestjs-firebase/lib/firebase.decorator";
import { FirebaseCollectionService } from "src/firebase/firebase-collection.service";
import { User } from "./entities/user.entity";
import { NotFoundException } from "@nestjs/common/exceptions";
import { Param } from "@nestjs/common/decorators";

@Injectable()
class NestjsFirebase<T> {
  constructor(@InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin, private readonly collectionPath: string) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    const db = new FirebaseCollectionService<User>(this.firebase, this.collectionPath);

    return await db.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    const db = new FirebaseCollectionService<User>(this.firebase, this.collectionPath);

    return await db.findAll();
  }

  async findOne(userId: string): Promise<User> {
    const db = new FirebaseCollectionService<User>(this.firebase, this.collectionPath);

    return await db.findOne(userId);
  }

  async addCredits(userId: string, updateUserCredits: UpdateUserCreditsDto): Promise<void> {
    const db = new FirebaseCollectionService<User>(this.firebase, this.collectionPath);

    await db.update(userId, {
      credits: updateUserCredits.credits
    });
  }

  async remove(userId: string): Promise<void> {
    const db = new FirebaseCollectionService<User>(this.firebase, this.collectionPath);

    await db.delete(userId);
  }
}

@Injectable()
export class UserService extends NestjsFirebase<User> {
  constructor(@InjectFirebaseAdmin() firebase: FirebaseAdmin) {
    super(firebase, "users");
    // console.log(userId);
  }
}
