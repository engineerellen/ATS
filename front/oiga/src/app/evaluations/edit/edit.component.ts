import { Component, OnInit } from '@angular/core';
import { evaluationsService } from '../evaluations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { evaluations } from '../evaluations';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: string;
  evaluations!: evaluations;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public evaluationsService: evaluationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.evaluationsService.find(this.id).subscribe((data: evaluations)=>{
      this.evaluations = data;
    }); 
      
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
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.evaluationsService.update(this.id,
      this.form.value).subscribe((res:any) => {
         console.log('evaluations updated!');
         this.router.navigateByUrl('evaluations/index');
    })
  }
}