import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-target',
  templateUrl: './edit-target.component.html',
  styleUrls: ['./edit-target.component.css']
})
export class EditTargetComponent implements OnInit {
  targets$: Observable<any[]>;
  @Input() targetId: any;

  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
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
    this.apiService.getTarget(this.targetId).subscribe(target => {
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

  deleteKeyContactClick(): void {
    if ((this.form.get('keyContacts') as FormArray).length > 1) {
      (this.form.get('keyContacts') as FormArray).removeAt(
        (this.form.get('keyContacts') as FormArray).length - 1
      );
    }
  }

  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
  }

  save() {
    const formData = this.form.value;
    this.apiService.updateTarget(this.targetId, formData);
    this.targets$ = this.apiService.targets;
    this.modalService.hide(1);
    this.router.navigateByUrl('/view/targets');
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
