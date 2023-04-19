import {NavigationItem} from "../interfaces/navigation-item.interface";

export const PAGE_CONFIG: NavigationItem[] = [
  {
    id: 0,
    page: 'Dashboard',
    url: './dashboard',
    icon: 'home'
  },
  {
    id: 1,
    page: 'Map',
    url: './map',
    icon: 'map'
  },
  {
    id: 2,
    page: 'Saved Location',
    url: './location',
    icon: 'local_library'
  },
  {
    id: 3,
    page: 'Calendar',
    url: './calendar',
    icon: 'calendar_month'
  }
];