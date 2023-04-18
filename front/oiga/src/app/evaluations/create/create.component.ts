import { Component, OnInit } from '@angular/core';
import { evaluationsService } from '../evaluations.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;
 
  constructor(
    public evaluationsService:  evaluationsService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      birthDate : new FormControl(''),
      cpf : new FormControl(''),
      startDate : new FormControl(''),
      gender : new FormControl(''),
      team : new FormControl('')
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.evaluationsService.create(this.form.value).subscribe(res => {
         console.log('evaluations registered!');
         this.router.navigateByUrl('evaluations/index');
    })
  }
  
}