import {Component, OnInit} from '@angular/core';
import {settingButtonConfig} from './entities/constants/buttons-config.constant';
import {PAGE_CONFIG} from '@constants/route.constnat';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  public readonly pageConfig = PAGE_CONFIG;
  public readonly settingButtons = settingButtonConfig;

  public activePage: string;

  constructor() {
    this.pageConfig = PAGE_CONFIG;
  }

  ngOnInit(): void {
    this.activePage = this.pageConfig[0].page;
  }

  public isActivePage(page: string): boolean {
    return this.activePage === page;
  }
}
