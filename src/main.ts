import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(helmet);
  await app.register(fastifyCookie);

  await app.listen(3000, (err, addr) => {
    if (err) {
      console.error(err);
    } else {
      console.debug(`Server listening at ${addr}`);
    }
  });
}
bootstrap();
