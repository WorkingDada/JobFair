'use client'
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export default function NextAuthProvider({children,session}:{children:ReactNode,session:any}) : React.ReactNode {
    return (
        <SessionProvider session={ session }>
            { children }
        </SessionProvider>
    )
} 