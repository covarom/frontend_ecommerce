import { INavbarData } from "./helper";
export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'category',
    icon: 'fal fa-box-open',
    label: 'Category',
    items: [
      {
        routeLink: 'categoriesList/73833238-8066-11ed-a1eb-0242ac120002',
        label: 'Accessories'
      },
      {
        routeLink: 'categoriesList/bfb90a06-8066-11ed-a1eb-0242ac120002',
        label: 'Televisions'
      },
      {
        routeLink: 'categoriesList/d52c1874-8066-11ed-a1eb-0242ac120002',
        label: 'Sunglass'
      },
      {
        routeLink: 'categoriesList/eb2d7b04-8066-11ed-a1eb-0242ac120002',
        label: 'Watch'
      },
      {
        routeLink: 'categoriesList/0619e420-8067-11ed-a1eb-0242ac120002',
        label: 'Computers & Tablets'
      },
    ]
  }
];
