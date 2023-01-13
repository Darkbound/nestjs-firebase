import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v2");

  const config = new DocumentBuilder()
    .addServer("v2")
    .setTitle("Casino Games")
    .setDescription("Casino Games API - Crash Game")
    .setVersion("2.0")
    .build();

  const options: SwaggerDocumentOptions = {
    ignoreGlobalPrefix: true
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("api/v2", app, document);

  await app.listen(3000);
}

bootstrap();
