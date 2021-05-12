import { Component, OnInit } from '@angular/core';

@Component({
  // select by element
  selector: 'app-servers',
  //select by attribute
  // selector: '[app-servers]',
  //select by class
  // selector: '.app-servers',

  //include template file
  templateUrl: './servers.component.html',

  //inline template
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
