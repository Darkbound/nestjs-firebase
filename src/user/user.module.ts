import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PurchaseTransactionModule } from "./modules/purchase-transaction/purchase-transaction.module";
import { RouterModule, Routes } from "@nestjs/core";
import { CreditsTransactionModule } from "./modules/credits-transaction/credits-transaction.module";

const routes: Routes = [
  {
    path: "/user/:userId/purchase-transaction/",
    module: PurchaseTransactionModule
  },
  {
    path: "/user/:userId/credits-transaction/",
    module: CreditsTransactionModule
  }
];

@Module({
  imports: [PurchaseTransactionModule, CreditsTransactionModule, RouterModule.register(routes)],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
