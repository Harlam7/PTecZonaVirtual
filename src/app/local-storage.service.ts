import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Método para almacenar datos en el Local Storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

    // Método para almacenar datos en el Local Storage con una fecha de expiración
    setItemWithExpiration(key: string, value: any, expirationMinutes: number): void {
      const expirationTimestamp = new Date().getTime() + expirationMinutes * 60 * 1000;
      const dataWithExpiration = { value, expirationTimestamp };
      localStorage.setItem(key, JSON.stringify(dataWithExpiration));
    }


  // Método para recuperar datos del Local Storage
  getItem(key: string): any {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  // Método para recuperar datos del Local Storage y verificar la expiración
  getItemWithExpiration(key: string): any {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      const { value, expirationTimestamp } = JSON.parse(storedValue);
      if (expirationTimestamp && expirationTimestamp > new Date().getTime()) {
        return value;
      } else {
        this.removeItem(key); // Elimina los datos si han expirado
      }
    }
    return null;
  }

  // Método para eliminar un elemento del Local Storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para actualizar un elemento del Local Storage
  updateItem(key: string, updatedValue: any): void{
    const storedValue = this.getItem(key);
    if (storedValue) {
      const updatedData = { ...storedValue, ...updatedValue };
      this.setItem(key, updatedData);
    }
  }
}
