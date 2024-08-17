import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HelloWorldService } from './hello-world.service';

@ApiTags('Hello World')
@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Get()
  @ApiOperation({
    summary: 'Endpoint example',
    description: 'This endpoint is used to return a Hello World',
  })
  @ApiOkResponse({
    description: 'The hello world have been properly retrieved from the api',
    type: String,
  })
  helloWorld() {
    return this.helloWorldService.helloWorld();
  }
}
