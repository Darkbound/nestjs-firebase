import { FirebaseCollectionService } from "./firebase-collection.service";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";
import { UpdateData } from "firebase-admin/firestore";

export class NestjsFirebase<Entity> {
  constructor(protected readonly firebase: FirebaseAdmin, protected readonly collectionPath: string) {}

  async create(createEntityDto: Partial<Entity & { id: string }>): Promise<string> {
    const db = new FirebaseCollectionService<Entity>(this.firebase, this.collectionPath);

    return await db.create(createEntityDto);
  }

  async findAll(): Promise<Entity[]> {
    const db = new FirebaseCollectionService<Entity>(this.firebase, this.collectionPath);

    return await db.findAll();
  }

  async findOne(id: string): Promise<Entity> {
    const db = new FirebaseCollectionService<Entity>(this.firebase, this.collectionPath);

    return await db.findOne(id);
  }

  async update(id: string, updateEntityDto: UpdateData<Entity>): Promise<void> {
    const db = new FirebaseCollectionService<Entity>(this.firebase, this.collectionPath);

    await db.update(id, updateEntityDto);
  }

  async remove(id: string): Promise<void> {
    const db = new FirebaseCollectionService<Entity>(this.firebase, this.collectionPath);

    await db.delete(id);
  }
}
