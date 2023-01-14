import { CollectionReference } from "@google-cloud/firestore";
import { UpdateData } from "firebase-admin/firestore";

type PathArgs<Z> = [Z] extends [never] ? [] : [pathArgs: Z];

export abstract class FirebaseService<T, P> {
  protected firestore: FirebaseFirestore.Firestore;

  constructor(firebaseAdmin: FirebaseFirestore.Firestore, protected collectionPath: string) {
    this.firestore = firebaseAdmin;
  }

  protected getDb(...pathArgs: PathArgs<P>): CollectionReference<T> {
    return this.createCollection(this.generateDocumentPath(pathArgs));
  }

  protected createCollection(collectionName: string): CollectionReference<T> {
    return this.firestore.collection(collectionName) as CollectionReference<T>;
  }

  protected generateRandomId = (length: number): string => {
    const alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";

    let chars = alphaNum;

    let id = "";

    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  protected generateDocumentPath(args = {}) {
    const pathSplit = (this.collectionPath as string).split("/");

    const allKeys = pathSplit.filter(path => path.includes("{")).map(path => path.replace("{", "").replace("}", ""));

    const argsKeys = Object.keys(args);

    for (const argsKey of argsKeys) {
      if (!allKeys.includes(argsKey)) throw new Error(`Extra keys were provided! The key { ${argsKey} } is not necessary!`);
    }

    const requiredKeys = allKeys.slice(0, allKeys.length);

    for (const requiredKey of requiredKeys) {
      if (!args[requiredKey])
        throw new Error(`Key ${requiredKey} is required, but missing! { ${requiredKeys.join(", ")} } are all required!`);
    }

    let documentPath = "";

    for (const path of pathSplit) {
      if (path.includes("{")) {
        const key = path.substring(1, path.length - 1);
        const keyValue = args[key];

        if (keyValue) {
          documentPath += "/" + keyValue;
        }
      } else {
        documentPath += "/" + path;
      }
    }

    // to remove first slash
    return documentPath.substring(1);
  }

  public abstract findOne(id: string, ...pathArgs: PathArgs<P>): Promise<T>;
  public abstract findAll(...pathArgs: PathArgs<P>): Promise<T[]>;
  public abstract create(createObj: Partial<T & { id: string }>, ...pathArgs: PathArgs<P>): Promise<string>;
  public abstract delete(id: string, ...pathArgs: PathArgs<P>): Promise<void>;
  public abstract update(id: string, updateObj: UpdateData<T>, ...pathArgs: PathArgs<P>): Promise<void>;
}
