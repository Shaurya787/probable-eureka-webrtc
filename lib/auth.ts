import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongodb"
import GitHub from "@auth/core/providers/github"

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/providers/oauth
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  
})


export const { handlers, auth } = NextAuth({ providers: [GitHub] })