import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  keyContacts$: Observable<any[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getKeyContacts();
    this.keyContacts$ = this.apiService.keyContacts;
  }
}
