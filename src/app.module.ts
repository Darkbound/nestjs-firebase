import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GameModule } from "./game/game.module";
import { UserModule } from "./user/user.module";
import { FirebaseModule as NestjsFirebaseModule } from "nestjs-firebase";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    NestjsFirebaseModule.forRoot({
      googleApplicationCredential: {
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID
      }
    }),
    GameModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
