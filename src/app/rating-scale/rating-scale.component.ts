import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.css']
})
export class RatingScaleComponent implements OnInit {
  rating3: number=1;
  public form: FormGroup;
 
  constructor(private fb: FormBuilder){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

}
