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
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
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
        // loop over single target records keyContacts and create a formgroup object for each one.
        target.keyContacts.forEach(contact => {
          (this.form.get('keyContacts') as FormArray).push(
            this.createContactsFormGroup(
              contact.name,
              contact.phone,
              contact.title
            )
          );
        });
      });
    });
  }
  // created a method to dynamically push a formGrp for each contact coming from backend
  createContactsFormGroup(name: any, phone: any, title: any): FormGroup {
    return this.fb.group({
      name: [name],
      phone: [phone],
      title: [title]
    });
  }

  // call an empty formgroup so that user can add a contact to the target record
  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      phone: [''],
      title: ['']
    });
  }

  save() {
    const formData = this.form.value;
    this.apiService.updateTarget(this.id, formData);
    this.targets$ = this.apiService.targets;
    this.router.navigateByUrl('/view/targets');
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
