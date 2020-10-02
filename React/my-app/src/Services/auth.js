import firebase from './firebase'

export  const IsAuthenticated = () =>{
  var user = firebase.auth().currentUser;

  if (user) {
    return user;
  } else {
    return false;
  }
};


export async function AuthLogin(login, senha){
    let user = await (await firebase.auth().signInWithEmailAndPassword(login, senha));
    return user;
}


export const Admlogout = () => {
    return this.auth.signOut()
}