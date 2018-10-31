import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KycComponent } from './kyc.component';
import { KycRoutes } from './kyc.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KycRoutes),
        FormsModule

    ],
    declarations: [KycComponent]
})

export class KycModule {}
