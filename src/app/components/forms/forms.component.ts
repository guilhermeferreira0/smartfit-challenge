import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/locations-interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent implements OnInit {
  results: Location[] = [];
  filteredResults: Location[] = []
  pushForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) {}

  ngOnInit(): void {
    this.pushForm = this.formBuilder.group({
      hour: '',
      shouldClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    })
  }

  onSubmit(): void {
    if (!this.pushForm.value.shouldClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true);
      return;
    }

    this.filteredResults = this.results;
  }

  onClean(): void {
    this.pushForm.reset();
  }
}
