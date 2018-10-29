import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {

    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

   showNotification(from: any, align: any, message: string, colourcode: number) {
        const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        const colour = type[colourcode];

        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: colour,
            delay: 1000,
            placement: {
                from: from,
                align: align
            },
            allow_dismiss: true,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' + 
            '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">'+
            '<i class="material-icons">close</i></button>' +
            '<span data-notify="message"><b>{2}</b></span></div>'
        });
    }
}
