import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { IPayment } from '../shared/interfaces';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html'
})
export class HistoryDetailComponent implements OnInit {
  @Input() paymentData
  
  detail = <any>{};
  date;
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.date = new Date(this.paymentData.date)
    this.detail = {
      amount: this.paymentData.amount,
      date: this.date.getDate() + '. ' + this.date.toLocaleString('default', { month: 'long' }),
      note: this.paymentData.note,
      color: this.paymentData.amount > 0 ? 'green' : 'red'
    }
  }

  deleteMe() {
    if(confirm('Are you sure you wanna delete this record?')) {
      this.afs.collection('basics').doc('history').collection('payments').doc(this.paymentData.propertyId).delete();
      this.afs.collection('basics').doc('balance').update({
        amount: firebase.firestore.FieldValue.increment(-parseFloat(this.paymentData.amount)),
        lastUpdate: new Date().getTime()
      });
    }
  }

}
