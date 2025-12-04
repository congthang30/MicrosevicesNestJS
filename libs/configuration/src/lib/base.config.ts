export class BaseConfiguration {
  readonly NODE_ENV: string;
  readonly IS_DEV: boolean;
  readonly GLOBAL_PREFIX: string;

  constructor(env: NodeJS.ProcessEnv = process.env) {
    this.NODE_ENV = env['NODE_ENV'] ?? 'development';
    this.IS_DEV = this.NODE_ENV === 'development';
    this.GLOBAL_PREFIX = env['GLOBAL_PREFIX'] ?? 'api/v1';
  }
}
