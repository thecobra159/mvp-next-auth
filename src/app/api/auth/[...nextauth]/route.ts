import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth/next'
import { Paths } from '@/Utils/Enums'

const googleClientId = process.env.GOOGLE_CLIENT_ID || ''
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || ''
const githubClientId = process.env.GITHUB_ID || ''
const githubClientSecret = process.env.GITHUB_SECRET || ''

// enable providers
const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
  pages: {
    signIn: Paths.LogIn,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
