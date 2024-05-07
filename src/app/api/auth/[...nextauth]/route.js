import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Iv23liEivIkJ8SDxQJXt',
            clientSecret: '5405009993f5653febba3b575d68429c0c576061'
        })
    ],

    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name.split(" ").join("").toLocaleLowerCase();
            session.user.uid = token.sub
            return session
        },
    },

    secret: "default_secret_key"
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
