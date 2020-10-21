import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashAddComponent } from './petty-cash-add/petty-cash-add.component';
import { PettyCashViewComponent } from './petty-cash-view/petty-cash-view.component';
import {PettyCashReportComponent} from './petty-cash-report/petty-cash-report.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: PettyCashAddComponent,
    },
    {
      path: 'view',
      component: PettyCashViewComponent,
    },
    {
      path: 'report',
      component: PettyCashReportComponent,
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PettyCashRoutingModule { }
