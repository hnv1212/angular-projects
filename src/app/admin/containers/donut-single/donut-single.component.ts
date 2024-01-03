import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form
        [donut]="donut"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      ></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.donutService.readOne(id).subscribe((d: Donut) => (this.donut = d));
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe();
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: () => console.log('update successfully'),
      error: (err) => console.log(err),
    });
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe();
  }
}
