import { NestFactory } from '@nestjs/core';
import { CveModule } from './cve.module';
import { ValidationPipe } from '@nestjs/common';
import { CnaModule } from './cna.module';
import { MainModule } from './main.module';

async function bootstrap() {
    const app = await NestFactory.create(MainModule);
    app.useGlobalPipes(new ValidationPipe());
    console.log(`Starting server on port ${process.env.PORT ?? 3000}`)
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
