import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  openWhatsApp(): void {
    // Replace '123456789' with the recipient's phone number
    const phoneNumber = '9739210666';

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the link in a new tab or window
    window.open(whatsappLink, '_blank');
  }
}
