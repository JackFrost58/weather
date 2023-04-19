import {Component} from '@angular/core';
import {routerButtonConfig, settingButtonConfig} from './entities/constants/buttons-config.constant';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public readonly routerButtons = routerButtonConfig;
  public readonly settingButtons = settingButtonConfig;
}
