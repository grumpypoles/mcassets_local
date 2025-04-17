import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo2.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="McActive logo"
      />
      <span className="px-3 py-2 text-xl font-semibold transition-colors text-primary-100 hover:bg-primary-700">
        McAssets
      </span>
    </Link>
  );
}

export default Logo;
