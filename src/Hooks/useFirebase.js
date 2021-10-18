import { useEffect, useState } from "react";
import initialzeAuthentization from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";


initialzeAuthentization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const handlename = e => {
        setName(e.target.value);
    }
    const handleemail = e => {
        setEmail(e.target.value);
    }
    const handlepassword = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(result.user);
                updateProfile(auth.currentUser, { displayName: name })
                    .then(result => {
                        setUser(result.user);
                    })
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }

    const signInUsingGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setError('');
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => { setLoading(false) });
    }

    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        })
        return () => unsubscribe;
    }, [])
    return {
        user,
        error,
        loading,
        handlename,
        handleemail,
        handlepassword,
        handleRegistration,
        handleLogin,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    }

};

export default useFirebase;