import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import SignOutButton from "./SignOutButton";
import NavDropDown from "./NavDropDown";

export default async function NavLogin() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl text-primary-100">
      <ul className="flex items-center gap-8 space-x-5">
        {session ? (
          <>
            <li>
              <Link
                href="/hiassets"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                Assets
              </Link>
            </li>
            <li className="flex items-center">
              <NavDropDown />
            </li>
            <li></li>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>
                <SignOutButton />
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="px-3 py-2 transition-colors hover:bg-primary-700"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
