import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './core/config/config.options';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Module({
  imports: [ConfigModule.forRoot(configOptions), HelloWorldModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
