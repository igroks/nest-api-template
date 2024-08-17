import { configOptions } from '@config/config.options';
import { NodeEnv } from '@core/enums';
import { App } from '@core/interfaces';
import { LoggerMiddleware } from '@core/middlewares';
import { LoggerService } from '@core/services';
import { HelloWorldModule } from '@modules/hello-world';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(configOptions), HelloWorldModule],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer): void {
    const { env } = this.configService.get<App>('config.app');
    if (env === NodeEnv.DEVELOPMENT) consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
