import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthorizationModule } from './modules/authorization/authorization.module'

import { AppComponent } from './app.component';


import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';


import { AppRoutes } from './app.routing';


@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        AngularMaterialModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        HttpClientModule,
        AuthorizationModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
