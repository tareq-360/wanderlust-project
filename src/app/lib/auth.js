import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const database= new MongoClient(process.env.MONGODB_URI);
const db= database.db("wanderlust-user_signup_data");
export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
    database: mongodbAdapter(db),
});