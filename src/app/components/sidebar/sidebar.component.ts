import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DEFAULT_LANG} from '@constants/language.constants';
import {PAGE_CONFIG} from '@constants/route.constnat';
import {SettingsModalComponent} from '../settings-modal/settings-modal.component';
import {LanguageSidebarElement} from './entities/interfaces/sidebar-language.interface';
import {languageSidebar} from './entities/constants/sidebar.constants';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() language = DEFAULT_LANG;

  public pageConfig = PAGE_CONFIG;
  public readonly languageSidebar = languageSidebar;

  public languageConfig: LanguageSidebarElement;

  public activePage: string;

  constructor(public dialog: MatDialog) {
    this.pageConfig = PAGE_CONFIG;
  }

  ngOnInit(): void {
    this.activePage = this.pageConfig[0].page;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['language']?.currentValue) {
      this.languageConfig = {
        ...languageSidebar[this.language]
      }

      this.pageConfig = this.pageConfig.map((item, index) => {
        return {
          ...item,
          page: this.languageConfig.pages[index]
        }
      })
    }
  }

  public isActivePage(page: string): boolean {
    return this.activePage === page;
  }

  public openModalSettings(): void {
    const dialogRef = this.dialog.open(SettingsModalComponent, {
      data: {
        ...this.languageConfig
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  public logIn() {

  }

  public logOut() {

  }
}
