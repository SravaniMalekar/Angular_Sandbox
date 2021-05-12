import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedDate;
  errorTitle;
  docCount = this.translate.instant("0");

  constructor(private translate : TranslateService){}
  appStatus = new Promise((resolve, reject)=>
  {
    setTimeout(()=>{
      resolve('stable');
    },2000)
  });
  
  ngOnInit(){
    this.errorTitle = this.translate.instant("error.title-att", {
			"docCount": this.docCount})
    this.selectedDate = this.translate.instant("DATE.LAST_NINETY_DAYS");
    console.log(this.errorTitle);
  }
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus ='';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(){
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started : new Date(15, 1,2017)
    })
  }
}
