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
    page: 'Health',
    url: './health',
    icon: 'medical_information'
  },
  {
    id: 3,
    page: 'Wallet',
    url: './wallet',
    icon: 'credit_card'
  }
];