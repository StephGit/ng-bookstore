import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class CatalogService {

  constructor(
    private apiService: ApiService
  ) { }

}
