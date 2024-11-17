import {
  Controller,
  Get,
  Post,
  Render,
  UseInterceptors,
  UploadedFile,
  Response,
  Param,
  Req,
} from '@nestjs/common';
import { Express, Response as TypeRes, Request } from 'express';
import { UploadService } from './upload.service';

import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('uploadImage')
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    console.log(file);
    this.uploadService.uploadImage(file);
    return 'this is post upload';
  }

  @Get('index')
  @Render('Upload/Upload')
  page() {
    return {
      name: 'Upload',
    };
  }

  @Get('home')
  findAll(@Response() response: TypeRes) {
    response.cookie('access_token', `${new Date().getTime()}`, {
      maxAge: 86400,
      httpOnly: true,
      path: '/',
      priority: 'high',
      secure: true,
      sameSite: 'strict',
      signed: true,
    });
    response.send('this is home page');
  }

  @Get(':id')
  findOne(@Req() query: Request, @Param('id') id: string) {
    // 获取未加密的cookies
    // return {
    //   cookies: query.cookies.access_token,
    //   id: id,
    // };

    // 获取加密之后的cookies

    return {
      name: 'Upload',
      cookies: query.signedCookies.access_token,
      id: id,
    };
  }
}
