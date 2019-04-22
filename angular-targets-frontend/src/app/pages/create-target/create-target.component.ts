import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent implements OnInit {
  targets$: Observable<any[]>;
  form: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // some test form data to get the POST right.
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }

  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      phone: [''],
      title: ['']
    });
  }

  ngOnInit() {}

  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
  }

  save() {
    const formData = this.form.value;

    this.apiService.createTarget(formData).subscribe(() => {
      this.router.navigateByUrl('/view/targets');
    });
  }

  resetForm() {
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array(['']),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }
}
