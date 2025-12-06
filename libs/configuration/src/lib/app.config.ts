import { IsNumber } from 'class-validator';

export class AppConfiguration {
  @IsNumber()
  readonly PORT: number;

  constructor() {
    this.PORT = process.env['PORT'] ? Number(process.env['PORT']) : 3300;
  }
}
