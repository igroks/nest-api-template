import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpUtil } from '../utils/http.util';

@Catch()
export class DefaultExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode,
      error: HttpUtil.httpStatusDescription[statusCode],
      message: 'Internal Server Error',
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    response.status(statusCode).json(responseBody);
  }
}
