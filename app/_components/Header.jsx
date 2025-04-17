import Logo from "@/app/_components/Logo";
import NavLogin from "@/app/_components/NavLogin";

function Header() {
  return (
    <header className="px-8 py-5 border-b border-primary-900">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Logo />
        <div className="flex items-center space-x-4">
          <NavLogin />
        </div>
      </div>
    </header>
  );
}

export default Header;
