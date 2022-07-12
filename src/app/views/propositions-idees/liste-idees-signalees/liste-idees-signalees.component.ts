import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-idees-signalees',
  templateUrl: './liste-idees-signalees.component.html',
  styleUrls: ['./liste-idees-signalees.component.scss'],
})
export class ListeIdeesSignaleesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  columns = [
    {
      key: 'name',
      _style: { width: '40%' },
      _props: { color: 'danger', class: 'fw-bold' },
    },
    'registered',
    {
      key: 'role',
      filter: false,
      sorter: false,
      _style: { width: '15%' },
      _classes: 'text-muted small',
    },
    { key: 'status', _style: { width: '15%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ];

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
}
