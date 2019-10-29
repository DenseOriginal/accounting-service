import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth: AngularFireAuth) {
    auth.auth.signInWithEmailAndPassword('ak.kornerup@gmail.com', '1234567890')
  }

  ngOnInit() {
    
  }
}
