import NextAuth from 'next/auth'

declare module "next-auth"{
    interface session{
        user: {
            name: string,
            email: string,
            tel: string,
            createdAt: string,
            token: string
        }
    }
}