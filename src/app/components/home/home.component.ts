import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private es:ElectronService) { }

  ngOnInit(): void {
  }

  close = () => {
    this.es.ipcRenderer?.invoke("close");
  }

}
