import { setCookie, parseCookies, destroyCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import connection from "@/config/connection";
import { toast } from "react-toastify";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const isAuthenticated = !!user;

    useEffect(() => {
        const { token } = parseCookies()

        if(token) {
            console.log(token)
            const data = connection.get('/isexpired').then(() => {
                return
            }).catch(() => {
                destroyCookie(undefined, 'token')
                return {
                    redirect: {
                      destination: '/signin',
                      permanent: false,
                      
                    }
                  }
            })
        }
    }, [])

    async function signIn({ username, password }) {
        try {
            const {data: {token, user} } = await connection.post('/signin', {
                username,
                password
            })
            setCookie(undefined, 'token', token, {
                maxAge: 60 * 60 * 1, // 1 hour
            })
            setUser(user)
            Router.push('/')

        }catch({response: {data: {message}}}) {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    

    return (
        <>
            <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

