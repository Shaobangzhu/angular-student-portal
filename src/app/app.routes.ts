import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SenderComponent } from './components/sender/sender.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: ReceiverComponent, // Demo: 用Receiver做dashboard展示
  },
  // 你也可以加一个页面同时包含 Sender + Reciever
  { path: 'messages/sender', component: SenderComponent },
  { path: 'messages/receiver', component: ReceiverComponent },

  { path: '**', redirectTo: 'students' },
];
