import { App } from '@core/interfaces';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static init(app: INestApplication) {
    const configService = app.get(ConfigService);
    const { name, version, company } = configService.get<App>('config.app');

    const config = new DocumentBuilder()
      .setTitle(name)
      .setVersion(version)
      .setLicense(`${company.name} © All rights reserved`, company.website)
      .setDescription(`This is the documentation for ${name}`)
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
}
