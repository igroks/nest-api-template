import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const start = Date.now();
    const { ip, method, originalUrl: url } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const end = Date.now();
      const responseTime = end - start;

      this.loggerService.show({
        ip,
        method,
        statusCode,
        url,
        userAgent,
        responseTime,
      });
    });

    next();
  }
}
