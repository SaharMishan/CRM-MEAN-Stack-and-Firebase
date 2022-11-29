import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider } from '@firebase/auth';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private auth: Auth) { }

  login(user: Users){
return signInWithEmailAndPassword(this.auth,user.email,user.password)
  }
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }
  logOut(){
    return this.auth.signOut();
  }
  register(user:Users){
  return createUserWithEmailAndPassword(this.auth,user.email,user.password)

}
}
