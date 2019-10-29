import { Component, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private balanceDoc: AngularFirestoreDocument<any>;
  balance: Observable<any>;
  constructor(private afs: AngularFirestore) {
    this.balanceDoc = afs.collection('basics').doc<any>('balance');
    this.balance = this.balanceDoc.valueChanges();
  }

  ngOnInit() {
  }

}
