import {Component, OnDestroy, OnInit} from '@angular/core';
import {PettyCash, PettycashData} from '../../../@core/data/petty-cash';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ngx-petty-cash-add',
  templateUrl: './petty-cash-add.component.html',
  styleUrls: ['./petty-cash-add.component.scss'],
})
export class PettyCashAddComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  pettyash: PettyCash[];

  constructor(
    private pettycashData: PettycashData,
  ) {
  }

  pettyCash = new PettyCash();

  ngOnInit(): void {
  }

//add pettycash to db
  onSubmit() {
    this.pettycashData.addPettyCash(this.pettyCash).subscribe(petty => console.log(petty));
  }

  onCancel() {
    this.pettyCash = new PettyCash();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
