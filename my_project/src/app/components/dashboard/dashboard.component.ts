import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
 import {  collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
interface Item {
  company: string
  image: string
  name: string
  price: number
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})



export class DashboardComponent implements OnInit {
  item$: Observable<any>;

  constructor(public authService: AuthService, firestore: AngularFirestore) {
    this.item$ = firestore.collection('products').valueChanges();
  }

  ngOnInit(): void {}
}
