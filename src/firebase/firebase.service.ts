import { CollectionReference } from "@google-cloud/firestore";
import { UpdateData } from "firebase-admin/firestore";

export abstract class FirebaseService<T> {
  protected firestore: FirebaseFirestore.Firestore;

  constructor(firebaseAdmin: FirebaseFirestore.Firestore) {
    this.firestore = firebaseAdmin;
  }

  protected createCollection<T>(collectionName: string | string[]) {
    if (typeof collectionName === "string") return this.firestore.collection(collectionName) as CollectionReference<T>;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const collectionPath: CollectionReference<T> = collectionName.reduce((accumulatedPath, currentPath, i) => {
      return accumulatedPath[i % 2 === 0 ? "collection" : "doc"](currentPath);
    }, this.firestore);

    return collectionPath;
  }

  public abstract findOne(id: string): Promise<T>;
  public abstract findAll(): Promise<T[]>;
  public abstract create(createObj: Partial<T & { id: string }>): Promise<string>;
  public abstract delete(id: string): Promise<void>;
  public abstract update(id: string, updateObj: UpdateData<T>): Promise<void>;
}
