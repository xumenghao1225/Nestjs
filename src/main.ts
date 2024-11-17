import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as CookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, `uploads`), {
    prefix: '/images',
  });
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.use(CookieParser('jia middleware access_token'));
  app.use(
    session({
      secret: 'secret',
      cookieName: 'sessionName',
      cookieOptions: { maxAge: 60 * 1000 },
      rolling: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
