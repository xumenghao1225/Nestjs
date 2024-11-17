import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { UploadPipe } from './upload.pipe';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, `../uploads/`),
        filename: (_, file, callback) => {
          const fileName = `${new Date().getTime()}${extname(file.originalname)}`;
          callback(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService, UploadPipe],
})
export class UploadModule {}
