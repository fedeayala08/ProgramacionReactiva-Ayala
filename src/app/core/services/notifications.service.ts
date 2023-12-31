import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

interface MyCustomNotification {
  type: 'success' | 'error';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notifier$ = new Subject<MyCustomNotification>()

  constructor() {
    this.notifier$.subscribe({
      next: (myNotification) => {
        Swal.fire(myNotification.title, myNotification.message, myNotification.type);
      }
    })
  }
  showSuccess(message: string, title = 'Usuarios cargados'): void {
    this.notifier$.next({
      type: 'success',
      message,
      title
    });
  }
  showError(message: string, title = 'Error en la carga'): void {
    this.notifier$.next({
      type: 'error',
      message,
      title
    });
  }
}
