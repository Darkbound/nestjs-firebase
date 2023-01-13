import { OrderByDirection, UpdateData } from "firebase-admin/firestore";
import { CollectionReference } from "@google-cloud/firestore";
import { FirebaseService } from "./firebase.service";
import { FirebaseAdmin } from "nestjs-firebase/lib/firebase.interface";

export class FirebaseCollectionService<T> extends FirebaseService<T> {
  protected db: CollectionReference<T>;

  constructor(firebase: FirebaseAdmin, collectionPath: string | string[]) {
    super(firebase.db);

    this.db = super.createCollection(collectionPath);
  }

  public override async create(createObj: Partial<T & { id: string }>): Promise<string | null> {
    const id = createObj?.id || this.generateRandomId(20);

    const docRef = this.db.doc(id);

    await docRef.create({ ...createObj, id } as T & { id: string });

    return id;
  }

  public async findOne(id: string) {
    const docRef = this.db.doc(id);

    const doc = await docRef.get();

    if (!doc.data()) return null;

    return doc.data()!;
  }

  public async findAll() {
    const docsRef = await this.db.get();

    if (docsRef.docs.length <= 0) return [];

    return docsRef.docs.map(doc => doc.data());
  }

  protected async getTopByValue(key: keyof T, limit: number, direction?: OrderByDirection): Promise<T[]> {
    const topByValueDocsRef = this.db.orderBy(key as string, direction).limit(limit);

    const topByValueDocs = await topByValueDocsRef.get();

    if (topByValueDocs.docs.length <= 0) return [];

    return topByValueDocs.docs.map(doc => doc.data());
  }

  public async update(id: string, updateObjectData: UpdateData<T>): Promise<void> {
    const docRef = this.db.doc(id);

    await docRef.update(updateObjectData);
  }

  public async delete(id: string): Promise<void> {
    const docRef = this.db.doc(id);

    await docRef.delete();
  }

  private generateRandomId = (length: number): string => {
    const alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";

    let chars = alphaNum;

    let id = "";

    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };
}
