
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "./prisma";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@example.com", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials: any) {
                // Do zod validation, OTP validation here

                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            email: existingUser.email
                        };
                    }
                    return null;
                }

              

                return null;
            },
        })
    ],
    pages: {
        signIn: '/auth/signin',  // custom signin page
       
    },
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub;
            return session;
        }
    }
};
