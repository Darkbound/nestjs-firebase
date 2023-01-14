import { Injectable } from "@nestjs/common";
import { OrderByDirection, UpdateData } from "firebase-admin/firestore";
import { FirebaseService } from "./firebase.service";

type PathArgs<Z> = [Z] extends [never] ? [] : [pathArgs: Z];

@Injectable()
export class FirebaseCollectionService<T, P = never> extends FirebaseService<T, P> {
  constructor(firebase: FirebaseFirestore.Firestore, collectionPath: string) {
    super(firebase, collectionPath);
  }

  public async create(createObj: Partial<T & { id: string }>, ...pathArgs: PathArgs<P>): Promise<string | null> {
    const db = this.getDb(...pathArgs);
    const id = createObj?.id || this.generateRandomId(20);

    const docRef = db.doc(id);

    await docRef.create({ ...createObj, id } as T & { id: string });

    return id;
  }

  public override async findOne(id: string, ...pathArgs: PathArgs<P>): Promise<T> {
    const db = this.getDb(...pathArgs);
    const docRef = db.doc(id);

    const doc = await docRef.get();

    if (!doc.data()) return null;

    return doc.data();
  }

  public override async findAll(...pathArgs: PathArgs<P>) {
    const db = this.getDb(...pathArgs);
    const docsRef = await db.get();

    if (docsRef.docs.length <= 0) return [];

    return docsRef.docs.map(doc => doc.data());
  }

  protected async getTopByValue(
    key: keyof T,
    limit: number,
    options?: { direction?: OrderByDirection },
    ...pathArgs: PathArgs<P>
  ): Promise<T[]> {
    const db = this.getDb(...pathArgs);
    const topByValueDocsRef = db.orderBy(key as string, options.direction).limit(limit);

    const topByValueDocs = await topByValueDocsRef.get();

    if (topByValueDocs.docs.length <= 0) return [];

    return topByValueDocs.docs.map(doc => doc.data());
  }

  public override async update(id: string, updateObjectData: UpdateData<T>, ...pathArgs: PathArgs<P>): Promise<void> {
    const db = this.getDb(...pathArgs);
    const docRef = db.doc(id);

    await docRef.update(updateObjectData);
  }

  public override async delete(id: string, ...pathArgs: PathArgs<P>): Promise<void> {
    const db = this.getDb(...pathArgs);
    const docRef = db.doc(id);

    await docRef.delete();
  }
}
