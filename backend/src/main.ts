import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para o frontend em http://localhost:3001
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true, // se quiser suportar cookies/autenticação no futuro
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
