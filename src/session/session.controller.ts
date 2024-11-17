import { Controller, Request, Get, Res, Render } from '@nestjs/common';
// import { Request } from 'express';
@Controller('session')
export class SessionController {
  @Get('setSession')
  setSession(@Request() req, @Res() res) {
    req.session.userId = 'req.session.userId';
    return res.status(200).json({
      status: 'success',
      data: {},
      code: 200,
    });
  }

  @Get('getSession')
  getSession(@Request() req, @Res() res) {
    console.log(req.session.userId);
    return res.status(200).json({
      status: 'success',
      data: {},
      code: 200,
    });
  }
}
