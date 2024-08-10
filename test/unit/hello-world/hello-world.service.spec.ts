import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldService } from '../../../src/hello-world/hello-world.service';

describe('HelloWorldService', () => {
  let service: HelloWorldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloWorldService],
    }).compile();

    service = module.get<HelloWorldService>(HelloWorldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
