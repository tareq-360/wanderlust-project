import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const database= new MongoClient(process.env.MONGODB_URI);
const db= database.db("wanderlust-user_signup_data");
export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.CLIENT_SECRET, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID , 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
    database: mongodbAdapter(db),
});