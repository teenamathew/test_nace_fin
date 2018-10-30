import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

const backend_def =  environment.apiUrl;

// ALL THE REST API PATHS HERE
const login_route_endpoint = backend_def + 'user/login';
// ALL THE REST API PATHS HERE

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor() { }

  get_login_route_endpoint() {
    return login_route_endpoint;
  }
}
