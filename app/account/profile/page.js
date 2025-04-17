import SelectRole from "@/app/_components/SelectRole";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getAppUser } from "@/app/_lib/data-service";

export const metadata = {
  title: "User Profile",
};

export default async function Page() {
  const session = await auth();
  const appUser = await getAppUser(session.user.email);

  // CHANGE
  const countryFlag = "pt.jpg";
  const nationality = "portugal";
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        Update your user profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm appUser={appUser}>
        <SelectRole access={appUser.access_type} name={'access_type'} className="w-full px-5 py-3 text-gray-400 bg-gray-600 rounded-sm shadow-sm" />
      </UpdateProfileForm>
    </div>
  );
}
