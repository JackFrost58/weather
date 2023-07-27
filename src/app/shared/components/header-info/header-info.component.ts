import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {languageSearchType} from './entities/header-info.interfaces';
import {languageHeader} from './entities/language.constant';
import {TimeTransfer} from '@helpers/time-translate.helper';

@Component({
  selector: 'header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit, OnChanges {
  @Input() withSearch = true;
  @Input() currentLanguage = 'en';

  @Output() searchTown = new EventEmitter<string>();

  public searchValue = '';
  public currentDate = new Date();
  public langField: languageSearchType = {
    searchField: languageHeader.en.searchField,
    defaultCity: languageHeader.en.defaultCity
  }

  public currentDateRus: string | undefined;

  public readonly intervalTimeUpdate = 5000;
  public readonly languageField = languageHeader;

  constructor() {
    setInterval(()=> {
      this.currentDate = new Date();
    }, this.intervalTimeUpdate)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentLanguage']) {
    
      this.langField = {
        ...languageHeader[this.currentLanguage]
      }
     
      switch(this.currentLanguage) {
        case 'ru': {
          this.currentDateRus = TimeTransfer.toRuTranslate(this.currentDate);
          break;
        }
      }
    }    
  }

  ngOnInit(): void {}
}
