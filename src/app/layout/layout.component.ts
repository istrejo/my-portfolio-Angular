import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { BannerComponent } from '../shared/components/banner/banner.component';

@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [CommonModule, NavbarComponent, BannerComponent],
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export default class LayoutComponent {}
