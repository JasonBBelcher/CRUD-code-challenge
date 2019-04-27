import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent implements OnInit {
  targets$: Observable<any[]>;
  currentResponse: any;
  errorResponse: any;
  modalRef: BsModalRef;
  saveModalRef: BsModalRef;
  errorModalRef: BsModalRef;

  form: FormGroup;
  submitted = true;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.form = this.fb.group({
      targetName: ['', Validators.required],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: ['', Validators.required],
      kpiData: this.fb.group({
        startYearValue: ['', Validators.required],
        endYearValue: ['', Validators.required]
      }),
      status: ['RESEARCHING', Validators.required]
    });
  }

  @ViewChild('saveConfirmed') public saveConfirmTemplateRef: TemplateRef<any>;
  @ViewChild('errorMessage') public errorMessageTemplateRef: TemplateRef<any>;

  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      title: ['', Validators.required]
    });
  }
  // convenience method to check if next value is just an empty object inside of save modal
  isEmpty(obj: object) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }
  // dynamically add a form group object to fill out before saving target
  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
  }
  // dynamically removes a form group contact object if greater than 1

  deleteKeyContactClick(): void {
    if ((this.form.get('keyContacts') as FormArray).length > 1) {
      (this.form.get('keyContacts') as FormArray).removeAt(
        (this.form.get('keyContacts') as FormArray).length - 1
      );
    }
  }

  save() {
    this.submitted = true;
    const formData = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.apiService.createTarget(formData);
    this.targets$ = this.apiService.targets;
    this.apiService.currentResponse.subscribe(
      next => {
        /* check that next is NOT empty object and if it is do nothing and
          respond with error instead, otherwise fullfill save confirmation with payload returned from
         mongodb save request */

        if (!this.isEmpty(next)) {
          this.currentResponse = next;
          this.saveModalRef = this.modalService.show(
            this.saveConfirmTemplateRef
          );
        }
      },
      err => {
        if (err) {
          this.errorResponse = err;
          this.errorModalRef = this.modalService.show(
            this.errorMessageTemplateRef
          );
        }
      }
    );

    this.resetForm();
  }

  resetForm() {
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });

    // check if the modelRef exists before firing hide method
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
