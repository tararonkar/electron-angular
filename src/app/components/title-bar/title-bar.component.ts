import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/services/electron/electron.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private es:ElectronService) { }

  ngOnInit(): void {
  }

  minimize = () => {
    this.es.ipcRenderer?.invoke("minimize");
  }

  maximize = () => {
    this.es.ipcRenderer?.invoke("maximize");
  }

  close = () => {
    this.es.ipcRenderer?.invoke("close");
  }

}
