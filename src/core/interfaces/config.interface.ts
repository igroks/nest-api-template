import { NodeEnv } from '../enums/node-env.enum';

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
