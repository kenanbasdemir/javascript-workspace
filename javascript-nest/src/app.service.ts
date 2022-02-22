import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import Todo from './todo';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) { }

  findAll(): Observable<AxiosResponse<Todo[]>> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/todos')
  }
}
