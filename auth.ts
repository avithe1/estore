import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     if (account?.provider === "google") {
  //       console.log("sign in callback");
  //       // Check for specific conditions or errors from Google's response
  //       // For example, if you've added custom error handling in the profile callback
  //       if (user) {
  //         // Redirect to a custom error page or display a message
  //         console.log("successfull ");
  //         //return `/signin?error=${user.error}`;
  //       } else {
  //         console.log("failed ");
  //       }
  //       // Proceed with sign-in if no errors
  //       return true;
  //     }
  //     // Allow other providers to sign in
  //     return true;
  //   },
  // },
});
