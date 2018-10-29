import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() login_form_ui_data;
  @Output() login_event = new EventEmitter();

  constructor() { }

  onLogin(form: NgForm) {
    this.login_event.emit(form);
  }

  ngOnInit() {
  }

}
