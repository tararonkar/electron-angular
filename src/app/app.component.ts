import { Component } from '@angular/core';
import { ElectronService } from './services/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starter-app';

  constructor(private electronService: ElectronService){

  }

  closeApp = () => {
    console.log("Calling close from renderer.")
    this.electronService.ipcRenderer?.invoke("close");
    console.log("Called close from renderer, app should close");
  }

}
