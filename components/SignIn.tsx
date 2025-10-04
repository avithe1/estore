import { signIn, signOut } from "@/auth";
import { auth } from "@/auth";
import Link from "next/link";

export default async function SignIn() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="w-full flex justify-center items-center">
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            className="border hover:bg-hovercolor rounded px-4 py-1 cursor-pointer"
            type="submit"
          >
            Signin with Google
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-center flex-col gap-10 mt-10">
        <div className="text-2xl font-semibold">{session.user?.name} 👋</div>
        <div>
          {process.env.ADMIN_USERS?.split(",").includes(
            session.user?.email as string
          ) ? (
            <Link href="/admin">Admin page &gt;</Link>
          ) : null}
        </div>
        <div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="border hover:bg-hovercolor rounded px-4 py-1 cursor-pointer"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    );
  }
}
