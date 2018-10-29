import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NotificationserviceService } from '../../services/notificationservice.service';
import { Router } from '@angular/router';
import {LoginForm} from '../../components/login-form/login-form.model';

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent implements OnInit {

    // to display date in login screen
    test: Date = new Date();

    // ui data
    login_form_ui_data_to_send: LoginForm = {
        title: 'Login',
        button_text : 'Authenticate',
        field1_placeholder: 'Username',
        field2_placeholder : 'Password',
    }
    // ui data


    constructor(public authService: AuthService, private notify: NotificationserviceService, private router: Router ) {}

    ngOnInit() {

        // for layout allignments
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
              // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        // for layout allignments
    }

    // login event function
    onLogin(form: NgForm) {
      if (form.invalid) {
        return;
      }
      this.authService.login(form.value.username, form.value.password)
      .subscribe(response => {

        //  this.notify.openSnackBar(response.msg, '');

        if (response.flag === 1) {
         this.router.navigate(['/homepage']);
         this.notify.showNotification('top', 'right', response.msg, 2);
        } else if (response.flag === 0) {
        this.notify.showNotification('top', 'right', response.msg, 4);
        this.reset_form(form);
        }
     }, error => {
        // this.notify.openSnackBar(error , '')
        this.notify.showNotification('top', 'right', error, 4);
        this.reset_form(form);

        });
    }


    reset_form(form: NgForm) {
        form.resetForm();
    }

}
