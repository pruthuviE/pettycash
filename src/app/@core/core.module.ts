import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
} from './utils';
import { UserData } from './data/users';
import { UserService } from './mock/users.service';
import { MockDataModule } from './mock/mock-data.module';
import { DepartmentData } from './data/department';
import { DepartmentService } from './mock/department.service';
import { CustomerData } from './data/customer';
import { CustomerService } from './mock/customer.service';
import { OrdersData } from './data/orders';
import { OrdersService } from './mock/orders.service';
import { ProductsData } from './data/products';
import {AttendanceData} from './data/attendance';
import {AttendanceService} from './mock/attendance.service';
import {SalaryData} from './data/salary';
import {SalaryService} from './mock/salary.service';
import {AdjustmentsData} from './data/adjustments';
import {AdjustmentsService} from './mock/adjustments.service';
import { ProductsService } from './mock/products.service';
import { ProviderService } from './mock/provider.service';
import { ProviderData } from './data/provider';
import { DeliveryData } from './data/delivery';
import { DeliveryService } from './mock/delivery.service';
import { SuppliersService } from './mock/suppliers.services';
import { SuppliersData } from './data/suppliers';
import { WarehousesData } from './data/warehouses';
import { WarehousesService } from './mock/warehouses.service';
import { DesignationData } from './data/designation';
import { DesignationService } from './mock/designation.service';
import {PettycashData} from './data/petty-cash';
import {PettycashService} from './mock/petty-cash.service';
const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: DepartmentData, useClass: DepartmentService },
  { provide: CustomerData, useClass: CustomerService },
  { provide: OrdersData, useClass: OrdersService },
  { provide: ProductsData, useClass: ProductsService },
  { provide: AttendanceData, useClass: AttendanceService },
  { provide: SalaryData, useClass: SalaryService},
  { provide: AdjustmentsData, useClass: AdjustmentsService},
  { provide: ProviderData, useClass: ProviderService },
  { provide: DeliveryData, useClass: DeliveryService },
  { provide: DesignationData, useClass: DesignationService},
  { provide: SuppliersData, useClass: SuppliersService },
  { provide: WarehousesData, useClass: WarehousesService },
  { provide: PettycashData, useClass: PettycashService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
