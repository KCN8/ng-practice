import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = "No server was created!"
  serverName = ""

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
