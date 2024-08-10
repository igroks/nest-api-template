import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configOptions } from './core/config/config.options';

@Module({
  imports: [ConfigModule.forRoot(configOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
