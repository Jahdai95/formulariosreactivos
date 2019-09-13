import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MessageI } from '../models/message.interface';


@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<any>;

  constructor( private angularFirestone: AngularFirestore) {

    this.contactCollection = angularFirestone.collection<any>('contacts');

   }
saveMessage( newContact: MessageI ): void {
  this.contactCollection.add(newContact);
}

}
