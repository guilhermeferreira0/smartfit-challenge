import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

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
  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data.locations))

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
