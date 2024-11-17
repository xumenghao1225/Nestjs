import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  ParseFilePipe,
} from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class UploadPipe implements PipeTransform {
  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    console.log(metadata);
    return value;
  }
}
