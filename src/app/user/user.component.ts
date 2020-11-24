import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalDataSource } from 'ng2-smart-table';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
 // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public api: UserService, private sanitizer: DomSanitizer) { 
    this.api.getData()
      .subscribe(res => {
        this.source.load(res);
        console.log(res);
      }, err => {
        console.log(err);
      });
    
  }


  ngOnInit(): void {
  }
  settings = {
    add: {
     
      //actionButonContent:'<i (click)="addUser($event)"><i/>',
      confirmCreate: true,
    },
    edit: {
     
      confirmSave: true,
      //actionButonContent:'<i (click)="onEditConfir($event)"></i>'
    },
    delete: {
    
      confirmDelete: true,
      //actionButonContent:'<i (click)="onDeleteConfirm($event)"></i>'
    },
   
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Full Name',
        type: 'string',
      },
      username: {
        title: 'User Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      }
    }
  };
  onCreate(event : any) {
    if (window.confirm('Are you sure you want to create?')) {
      this.api.postData(event.newData)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
}
  }

  onEdit(event : any) {
    if (window.confirm('Are you sure you want to Edit?')) {
      this.api.putData(event.newData['id'],event.newData)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
      
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
}
  }

  onDelete(event : any) {
    if (window.confirm('Are you sure you want to Delete?')) {
      this.api.deleteData(event.data['id'])
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
      
      event.confirm.resolve();
    } else {
      event.confirm.reject();
}
  }

  source: LocalDataSource = new LocalDataSource();

  

}
