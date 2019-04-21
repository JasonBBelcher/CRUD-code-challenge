import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  targets$: Observable<any[]>;
  form: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // some test form data to get the POST right.
    this.form = this.fb.group({
      targetName: ['Test Name'],
      keyContacts: [
        [
          { name: 'test', phone: '4044445556666', title: 'worker' },
          { name: 'test name 2', phone: 4043458888, title: 'worker2' }
        ]
      ],
      companyInformation: ['Testing info field'],
      kpiData: [{ startYearValue: 400, endYearValue: 500 }],
      status: ['RESEARCHING']
    });
  }
  title = 'Targets for acquisitions';

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }
  // remove this later
  testCreateBtn() {
    this.apiService.createTarget(this.form.value);
  }
}
