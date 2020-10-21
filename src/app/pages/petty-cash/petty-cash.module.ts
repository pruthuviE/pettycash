import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PettyCashRoutingModule} from './petty-cash-routing.module';
import {PettyCashViewComponent} from './petty-cash-view/petty-cash-view.component';
import {PettyCashAddComponent} from './petty-cash-add/petty-cash-add.component';
import {AdjustmentsComponent} from '../salary/adjustments/adjustments.component';
import {AddSalaryComponent} from '../salary/add-salary/add-salary.component';
import {ViewSalaryComponent} from '../salary/view-salary/view-salary.component';
import {AddAdjustmentsComponent} from '../salary/adjustments/add-adjustments/add-adjustments.component';
import {ViewAdjustmentsComponent} from '../salary/adjustments/view-adjustments/view-adjustments.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule, NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule} from '@angular/forms';
import {PettyCashReportComponent} from './petty-cash-report/petty-cash-report.component';


@NgModule({
  declarations: [PettyCashViewComponent, PettyCashAddComponent,
    PettyCashReportComponent],
  imports: [
    CommonModule,
    PettyCashRoutingModule,
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbRadioModule,
    FormsModule,
  ],
})
export class PettyCashModule {
}
