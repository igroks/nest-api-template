import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configOptions } from './core/config/config.options';
import { NodeEnv } from './core/enums/node-env.enum';
import { App } from './core/interfaces/config.interface';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { LoggerService } from './core/services/logger.service';
import { HelloWorldModule } from './hello-world/hello-world.module';

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
