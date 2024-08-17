import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller';
import { HelloWorldService } from './hello-world.service';

@Module({
  providers: [HelloWorldService],
  controllers: [HelloWorldController],
})
export class HelloWorldModule {}
