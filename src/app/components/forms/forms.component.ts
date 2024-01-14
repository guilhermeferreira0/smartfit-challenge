import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  results = [];
  pushForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pushForm = this.formBuilder.group({
      hour: '',
      shouldClosed: false
    })
  }

  onSubmit(): void {
    console.log(this.pushForm.value);
  }

  onClean(): void {
    this.pushForm.reset();
  }
}
