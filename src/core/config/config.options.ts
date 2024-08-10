import { ConfigModuleOptions } from '@nestjs/config';
import config from './config';
import { validate } from './env/env.validation';

export const configOptions: ConfigModuleOptions = {
  envFilePath: '.env',
  validate,
  isGlobal: true,
  expandVariables: true,
  load: [config],
};
