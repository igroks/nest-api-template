import { SwaggerConfig } from '@config/swagger';
import { DefaultExceptionFilter, HttpExceptionFilter } from '@core/filters';
import { App } from '@core/interfaces';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port } = configService.get<App>('config.app');
  SwaggerConfig.init(app);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.useGlobalFilters(new DefaultExceptionFilter(), new HttpExceptionFilter());

  await app.listen(port);
}
bootstrap();
