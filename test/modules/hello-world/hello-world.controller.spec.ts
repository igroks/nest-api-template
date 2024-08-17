import { HelloWorldController, HelloWorldService } from '@modules/hello-world';
import { Test, TestingModule } from '@nestjs/testing';

describe('HelloWorldController', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
