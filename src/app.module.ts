import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';

import { SessionController } from './session/session.controller';

@Module({
  imports: [UploadModule],
  controllers: [AppController, SessionController],
  providers: [AppService],
})
export class AppModule {}
