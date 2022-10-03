\r
mport { NgModule } from '@angular/core';
\r
mport { FormsModule } from '@angular/forms';
\r
mport { BrowserModule } from '@angular/platform-browser';
\r

\r
mport { AppComponent } from './app.component';
\r
mport { ServerComponent } from './server/server.component';
\r
mport { ServersComponent } from './servers/servers.component';
\r

\r
NgModule({
\r
 declarations: [AppComponent, ServerComponent, ServersComponent],
\r
 imports: [BrowserModule, FormsModule],
\r
 providers: [],
\r
 bootstrap: [AppComponent],
\r
)
\r
xport class AppModule {}
