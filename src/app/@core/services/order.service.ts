import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class OrderService {

  constructor( private apiService: ApiService) { }

}
