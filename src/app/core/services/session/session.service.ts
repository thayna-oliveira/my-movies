import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getSession(key: string): any {
    return JSON.parse(sessionStorage.getItem(key) || '[]');
  }
}
