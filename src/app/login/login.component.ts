import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private afa: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmitForm(f: NgForm) {
    if(f.valid) {
      this.afa.auth.signInWithEmailAndPassword(f.value.email, f.value.password);
      this.router.navigate(['history'])
    }
  }
}
