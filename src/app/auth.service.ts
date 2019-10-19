import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  connectedUser: any;

  constructor() {
    if (localStorage.getItem("connectedUser")) {
      this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    } else {
      this.connectedUser = null;
    }
  }

  islogged() {
    if (localStorage.getItem("connectedUser")) {
      return true;
    } else {
      return false;
    }
  }
}
