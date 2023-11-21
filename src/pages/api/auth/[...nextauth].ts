import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const options: NextAuthOptions = {
    session:{
        strategy: "jwt",
    },
    secret: process.env.SECRET,
    providers:[
        CredentialsProvider({
            id:"user",
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                //test credentials
                // const res = await fetch("/endpoint",{
                //     method:"POST",
                //     headers:{
                //         "Content-Type":"application/json"
                //     },
                //     body:JSON.stringify(credentials)
                // });
                // const user = await res.json();
                // if (res.ok  && user){
                //     return user;
                // }
                //if user name = admin and password = admin
                if (credentials?.email === "admin" && credentials.password === "admin"){
                    return {
                        id:1,
                        name:"Admin",
                        email:"admin@gmail.com"
                    }
                }
            return null;
            }
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        })

    ],
    pages:{
        signIn:"/login"
    }
}

export default NextAuth(options);   