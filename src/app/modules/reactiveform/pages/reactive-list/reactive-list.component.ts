import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AntiHero } from '../../model/anti-hero';

@Component({
  selector: 'app-reactive-list',
  templateUrl: './reactive-list.component.html',
  styleUrls: ['./reactive-list.component.scss'],
})
export class ReactiveListComponent {
  antiHeroForm: FormGroup;
  powerFormArray: FormArray;

  // constructor
  constructor(private fb: FormBuilder) {
    this.antiHeroForm = this.fb.group({
      firstName: ['Bruce', Validators.required],
      lastName: '',
      knownAs: '',
      powers: this.fb.array([new FormControl('fly'), new FormControl('zap')]),
    });

    this.powerFormArray = this.antiHeroForm.controls['powers'] as FormArray;
  }

  onSubmit = () => {};
}
