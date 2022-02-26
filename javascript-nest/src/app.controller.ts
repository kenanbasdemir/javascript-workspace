import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    this.appService.findAll().subscribe(response =>{
      return response.data
    })
  }
  
  @Post()
  postSample() {
    return 'OK'
  }
}
