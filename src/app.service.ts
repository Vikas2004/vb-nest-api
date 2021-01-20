import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Vikas Baswapuram!';
  }
  getAbout(): string {
    return 'Vikas Baswapuram - Software developer';
  }
}
