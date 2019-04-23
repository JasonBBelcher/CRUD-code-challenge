import { Component, OnInit, TemplateRef } from '@angular/core';
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
  modalRef: BsModalRef;
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

  addKeyContactsFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
  }

  addKeyContactClick(): void {
    (this.form.get('keyContacts') as FormArray).push(
      this.addKeyContactsFormGroup()
    );
    console.log('clicked');
  }

  save() {
    this.submitted = true;
    const formData = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.apiService.createTarget(formData);
    this.targets$ = this.apiService.targets;
    this.resetForm();
    this.modalRef.hide();
  }

  resetForm() {
    this.form = this.fb.group({
      targetName: [''],
      keyContacts: this.fb.array([this.addKeyContactsFormGroup()]),
      companyInformation: [''],
      kpiData: this.fb.group({ startYearValue: [''], endYearValue: [''] }),
      status: ['RESEARCHING']
    });
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
