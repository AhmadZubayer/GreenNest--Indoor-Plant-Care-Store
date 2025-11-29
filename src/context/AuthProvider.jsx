import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../authentication/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // useEffect(() => { }, [])
    // useEffect( () =>{
    //     // step -1: observer set 
    //     // step-2: set in a variable
    //     // step-3: return and call the variable so that you can clear the ref
    // }, [])

    useEffect(() => {
        // set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user  in auth state change', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        // clear the observer on unmount
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;



/**
 * 1. create a context and export 
 * 2. create a provider -- so that you can reuse the context in different places
 * 3. ensure you use the children prop
 * 4. make sure use the auth provider in the router 
 * 5. make the create user with email and password shared via provider
 * 6. set createUser in the authInfo object to share via context
 * 
*/