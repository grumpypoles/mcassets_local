import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
  title: "Admini"
}

export default function page() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h2 className="text-3xl font-semibold text-primary-500">
        Your don&apos;t have McAssets account. If you wish to create one, please contact our administrator.
      </h2>
      {/* <SignInButton /> */}
    </div>
  );
}
