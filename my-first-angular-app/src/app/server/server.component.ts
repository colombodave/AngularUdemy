\r
mport { Component } from '@angular/core';
\r

\r
Component({
\r
 selector: 'app-server',
\r
 templateUrl: './server.component.html',
\r
)
\r
xport class ServerComponent {
\r
 serverId: number = 10;
\r
 serverStatus: string = 'online';
\r

\r
 getServerStatus() {
\r
   return this.serverStatus;
\r
 }
\r

