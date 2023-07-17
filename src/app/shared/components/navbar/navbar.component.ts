import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	darkMode: boolean = false;

	toggleMode() {
		this.darkMode = !this.darkMode;
		const html = document.querySelector('html') as HTMLElement;
		html.classList.toggle('dark', this.darkMode);
	}
}
