import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // Demo 用boolean, 真实的项目会用token / user profile
    private loggedIn = false;

    login(): void {
        this.loggedIn = true;
    }

    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}