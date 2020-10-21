import { Component, OnInit } from '@angular/core';
import { PettycashData } from '../../../@core/data/petty-cash';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-petty-cash-view',
  templateUrl: './petty-cash-view.component.html',
  styleUrls: ['./petty-cash-view.component.scss']
})
export class PettyCashViewComponent implements OnInit {

  data: LocalDataSource;
  constructor(private pettyCashService: PettycashData) {
    this.data = new LocalDataSource;

    this.pettyCashService.getPettyCash().subscribe(data => {
      this.data.load(data)
    })

  }
  ngOnInit(): void {}

   settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      employeeId: {
        title: 'Employee ID'
      },
      employeeName: {
        title: 'Employee Name'
      },
      reason: {
        title: 'Reason'
      },
      Amount: {
        title: 'Amount'
      },
      Date: {
        title: 'Date'
      },
    },
    actions: {
      add: false,
      // edit: false,
      // delete: false,
    },
     confirmDelete: true
  };

}
