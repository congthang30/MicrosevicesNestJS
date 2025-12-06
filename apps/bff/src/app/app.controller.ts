import { BadGatewayException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from '@common/interface/gateway/response.interface';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    const result = this.appService.getData();
    throw new BadGatewayException('Bad Gateway');

    return new ResponseDto({ data: result });
  }
}
