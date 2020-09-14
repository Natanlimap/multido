import "firebase/auth";
import fire from "./firebase";

export  const IsAuthenticated = () =>{
  var user = fire.auth().currentUser;

  if (user) {
    return user;
  } else {
    return false;
  }
};


export const AuthLogin = async (login, senha) => {
    var user = await fire.auth().signInWithEmailAndPassword(login, senha);
    return user.user;
}


export const Admlogout = () => {
    return this.auth.signOut()
}