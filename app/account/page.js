import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const fName = session.user.name.split(" ").at(0);

  return (
    <>
      <h1 className="text-2xl font-semibold text-primary-500 mb-7">
        Welcome, {fName} to your dashboard.
      </h1>
      <div className="grid grid-cols-1 gap-4 h-[100%]  ">
        <div className="col-span-2 ">
          {/* <ChartWSCatList /> */}
        </div>
      </div>
    </>
  );
}
