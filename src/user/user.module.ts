import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PurchaseTransactionModule } from "./modules/purchase-transaction/purchase-transaction.module";
import { RouterModule, Routes } from "@nestjs/core";
import { CreditsTransactionModule } from "./modules/credits-transaction/credits-transaction.module";
import { SomeNewStuffModule } from "./modules/purchase-transaction/some-new-stuff/some-new-stuff.module";

const routes: Routes = [
  {
    path: "/user/:userId/purchase-transaction/",
    module: PurchaseTransactionModule
  },
  {
    path: "/user/:userId/credits-transaction/",
    module: CreditsTransactionModule
  },
  {
    path: "/user/:userId/purchase-transaction/:transactionId/some-new-stuff",
    module: SomeNewStuffModule
  }
];

@Module({
  imports: [PurchaseTransactionModule, CreditsTransactionModule, SomeNewStuffModule, RouterModule.register(routes)],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
