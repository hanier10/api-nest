import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola';
  }

  @Get('nueva-ruta')
  hello() {
    return 'probando ruta nueva';
  }
}
