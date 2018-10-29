import { Injectable } from '@angular/core';
import {RouteInfo} from '../common_interfaces/menuservice.model';


// Menu Items
export const ROUTES: RouteInfo[] = [{
  path: '/homepage',
  title: 'Dashboard',
  type: 'link',
  icontype: 'dashboard'
}
// , {
//   path: '/homepage1',
//   title: 'Homepage1',
//   type: 'link',
//   icontype: 'person'
// }
];

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor() { }

  get_routes() {
    return ROUTES;
  }
}
