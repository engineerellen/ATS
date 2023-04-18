import { Component, OnInit } from '@angular/core';
import { evaluationsService } from '../evaluations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { evaluations } from '../evaluations';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: string;
  evaluations!: evaluations;
  form!: FormGroup;
 
  constructor(
    public evaluationsService: evaluationsService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
        
    this.evaluationsService.find(this.id).subscribe((data: evaluations)=>{
      this.evaluations = data;
    });

    this.form = new FormGroup({
      gender : new FormControl(''),
      team : new FormControl('')
    });
  }
}