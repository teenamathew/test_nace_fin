import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

const backend_def =  environment.apiUrl;



@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  // ALL THE REST API PATHS HERE
  login_route_endpoint = backend_def + 'user/login';
  // ALL THE REST API PATHS HERE

  constructor() {  }

}
