import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { USER_LOGIN_URL } from '../shared/models/constants/urls';
import { User } from '../shared/models/User';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private taostrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
        next:(user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.taostrService.success(
            `Welcome to FoodApp ${user.name}!`,
            'Login Successful'
          )

        },
        error: (errorResponse) => {
          this.taostrService.error(errorResponse.error,'Login Failed');

        }
      })
    );
  }

  register(userRegister:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.taostrService.success(
            `Welcome to the FoodApp ${user.name}`,
            'Register successfully'
          )
        },
        error: (errorResponse) => {
          this.taostrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }


  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
