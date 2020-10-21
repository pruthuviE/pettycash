import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {PettyCash, PettycashData} from '../../../@core/data/petty-cash';

@Component({
  selector: 'ngx-petty-cash-report',
  templateUrl: './petty-cash-report.component.html',
  styleUrls: ['./petty-cash-report.component.scss']
})
export class PettyCashReportComponent implements OnInit {
  data: LocalDataSource;

  date;

  constructor(private pettyCashService: PettycashData) {


  }

  ngOnInit(): void {
  }
  pettyCash = new PettyCash();

  onSubmit() {
    this.data = new LocalDataSource();
    this.pettyCashService.getPettyCashReport(this.data)
      .subscribe(data => {
        this.data.load(data);
      });
  }


  // pettycash report table create
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Name',
      },
      employeeId: {
        title: 'Employee ID',
      },
      employeeName: {
        title: 'Employee Name',
      },
      reason: {
        title: 'Reason',
      },
      Amount: {
        title: 'Amount',
      },
      Date: {
        title: 'Date',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
  };

}
