import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  //Injecting router
  //activeroute-injectis currently active route
  constructor(private serversService: ServersService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // '/servers' is a absolute path
    // 'servers' is a relative path
    //relativeTo - define relative to which route this component should be loaded
    // this.router.navigate(['servers'],{relativeTo: this.route});
   }
}
