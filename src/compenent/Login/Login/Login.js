import React, { useContext, useState } from 'react';

// import LoginBg from '../../../images/loginBg.png';

import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';


import firebaseConfig from '../firebaseConfig/firebaseConfig';
import { UserContext } from '../../../App';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();
    const [person, setPerson] = useState({
        name: '',
        email: ''
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const setUserToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
            // Handle error
          });
    }

    const googleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                const { displayName, email } = user

                const userPerson = {
                    name: displayName,
                    email: email
                }
                setPerson(userPerson)
                setLoggedInUser(userPerson)
                history.replace(from);

                setUserToken();

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode, email, credential)
            });
    }

    return (
        <div>
            <div>
                <div  style={{ textAlign: "center", marginTop: '9em' }}>
                    <button className="btn btn-primary" onClick={googleSingIn}>Google sign in</button>
                    <h1>{person.name}</h1>
                </div>
                {/* <div className="col-md-6 d-none d-md-block align-self-end">
                    <img style={{height: '559px'}}  className="img-fluid" src={LoginBg} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Login;