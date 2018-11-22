import {Routes, RouterModule} from '@angular/router';

import {DashbordComponent} from './components/dashbord/dashbord.component';
import {ManageComponent} from './components/manage/manage.component';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
