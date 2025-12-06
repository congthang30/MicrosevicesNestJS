import { IsBoolean, IsNotEmpty, IsString, validateSync } from 'class-validator';
import { Logger } from '@nestjs/common';

export class BaseConfiguration {
  readonly NODE_ENV: string;

  @IsBoolean()
  readonly IS_DEV: boolean;

  @IsString()
  @IsNotEmpty()
  readonly GLOBAL_PREFIX: string;

  constructor(env: NodeJS.ProcessEnv = process.env) {
    this.NODE_ENV = env['NODE_ENV'] ?? 'development';
    this.IS_DEV = this.NODE_ENV === 'development';
    this.GLOBAL_PREFIX = env['GLOBAL_PREFIX'] ?? 'api/v1';
  }

  valiDate() {
    const errors = validateSync(this);
    if (errors.length > 0) {
      const _errors = errors.map((error) => {
        return error.children;
      });

      Logger.error(_errors);

      throw new Error('Configuration is invalid');
    }
  }
}
