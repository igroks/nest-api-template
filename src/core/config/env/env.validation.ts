import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, validateSync } from 'class-validator';
import { NodeEnv } from 'src/core/enums/node-env.enum';

class EnvironmentVariables {
  @IsNumber()
  APP_PORT: number = 3000;

  @IsNotEmpty()
  APP_NAME: string;

  @IsNotEmpty()
  APP_VERSION: string;

  @IsNotEmpty()
  COMPANY_NAME: string;

  @IsNotEmpty()
  COMPANY_WEBSITE: string;

  @IsOptional()
  NODE_ENV: NodeEnv;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
