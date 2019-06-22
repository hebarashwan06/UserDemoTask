import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ManageUsersComponent, pathMatch: 'full' },
      { path: 'User/Create', component: CreateUserComponent },
      { path: 'User/:id', component: EditUserComponent },
      { path: 'Users', component: ManageUsersComponent }

    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
