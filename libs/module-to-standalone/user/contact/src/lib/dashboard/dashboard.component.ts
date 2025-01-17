import { Component } from '@angular/core';

@Component({
  selector: 'lib-contact-dashboard',
  template: `Contact Dashboard

    <button
      routerLink="create-contact"
      class="border bg-gray-700 rounded-lg p-2 text-white ml-10">
      Create contact
    </button> `,
  standalone: true,
})
export default class ContactDashboardComponent {}
