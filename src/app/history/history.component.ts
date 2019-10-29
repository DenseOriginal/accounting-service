import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { IPayment } from '../shared/interfaces';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  private paymentsCollection: AngularFirestoreCollection<IPayment>
  payments: Observable<any[]>;
  modalShow: boolean = false;

  newPayment = <any>{}
  

  constructor(private afs: AngularFirestore) {
    this.paymentsCollection = afs.collection('basics').doc('history').collection('payments', ref => ref.orderBy('date', 'desc'));
    this.payments = this.paymentsCollection.valueChanges({ idField: 'propertyId' });
  }

  ngOnInit() {
  }

  modalToggle() {
    this.modalShow = !this.modalShow;
  }

  onSubmitForm(f: NgForm) {
    if(f.valid) {
      this.afs.collection('basics').doc('balance').update({
        amount: firebase.firestore.FieldValue.increment(parseFloat(f.value.amount)),
        lastUpdate: new Date().getTime()
      });

      const paymentData = {
        amount: f.value.amount,
        note: f.value.note || '',
        date: new Date().getTime()
      }

      this.afs.collection('basics').doc('history').collection('payments').add(paymentData);

      f.reset();
      this.modalToggle();
    }
  }

}
