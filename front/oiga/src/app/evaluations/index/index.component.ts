import { Component, OnInit } from '@angular/core';
import { evaluationsService } from '../evaluations.service';
import { evaluations } from '../evaluations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  evaluationss: evaluations[] = [];

  constructor(public evaluationsService: evaluationsService) { }

  ngOnInit(): void {
    this.evaluationsService.getAll().subscribe((data: evaluations[]) => {
      this.evaluationss = data;
      console.log(this.evaluationss);
    })
  }

  deleteevaluations(id: string) {
    if (window.confirm("Do you you want to delete this evaluations?")) {
      this.evaluationsService.delete(id).subscribe(res => {
        this.evaluationss = this.evaluationss.filter(item => item.id !== id);
        console.log('evaluations deleted!');
      })
    }
  }
}