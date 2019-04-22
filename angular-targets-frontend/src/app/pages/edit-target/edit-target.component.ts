import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-target',
  templateUrl: './edit-target.component.html',
  styleUrls: ['./edit-target.component.css']
})
export class EditTargetComponent implements OnInit {
  targets$: Observable<any[]>;
  form: FormGroup;
  id: any;
  sub: Subscription;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];

      this.apiService.getTarget(this.id).subscribe(target => {
        const {
          targetName,
          companyInformation,
          kpiData,
          status,
          keyContacts
        } = target;
        this.form.patchValue({
          targetName,
          keyContacts,
          companyInformation,
          kpiData,
          status
        });
      });
    });
  }

  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      phone: [''],
      title: ['']
    });
  }

  save() {
    const formData = this.form.value;
    console.log(formData);

    this.apiService.updateTarget(this.id, formData).subscribe(() => {
      this.router.navigateByUrl('/view/targets');
    });
  }

  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
  }

  resetForm() {
    this.form = this.fb.group({
      targetName: [''],
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }
}
