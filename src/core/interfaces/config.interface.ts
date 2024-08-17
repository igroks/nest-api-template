import { NodeEnv } from '@core/enums';

export interface Company {
  website: string;
  name: string;
}

export interface App {
  port: number;
  name: string;
  version: string;
  company: Company;
  env: NodeEnv;
}

export interface Config {
  app: App;
}
