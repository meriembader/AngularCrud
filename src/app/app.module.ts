import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { CompleterService } from '@akveo/ng2-completer';
import { UserService } from './user.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    
    
    //CompleterService
  ],
  imports: [
    BrowserModule,
    
    Ng2SmartTableModule,
    HttpClientModule
   // NgbModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
