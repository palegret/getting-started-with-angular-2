import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
	selector: 'user-form',
	templateUrl: './app/users/user-form.component.html',
	styleUrls: [
		'./app/users/user-form.component.css'
	]
})
export class UserFormComponent {
	@Output()
	userCreated = new EventEmitter()

	active: boolean = true;
	newUser: User = new User();

	private resetForm() {
 		this.newUser = new User();
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}

	onSubmit() {
 		this.userCreated.emit({ user: this.newUser });
		this.resetForm();
	}
}
