import { Component } from '@angular/core';
import { 
    FormBuilder,
    FormGroup,
    Validators, 
} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    form: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
        private readonly auth: AuthService,
        private readonly router: Router,
    ) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [Validators.required, Validators.minLength(6)],
            ],
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.log('Form value', this.form.value);
        // Demo: 直接登录 + 导航到dashboard
        this.auth.login();
        this.router.navigate(['/dashboard']);
    }

    get emailCtrl() {
        return this.form.get('email');
    }

    get passwordCtrl() {
        return this.form.get('password');
    }
}