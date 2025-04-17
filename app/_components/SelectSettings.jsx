import { getSettings, getSwimCardLeft } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

async function SelectSettings() {
  const session = await auth();
  const settingsData = await getSettings(session.user.appUserId);
  const usedSwims = await getSwimCardLeft(session.user.appUserId);

  const totalSwims = settingsData[0].swim_card;

  return (
    <div>
      {settingsData.length === 0 ? (
        <h1 className="mb-5 text-3xl font-medium text-primary-500">
          You don&apos;t have any Swimming session recorded yet. Start
          collecting your statistics.
        </h1>
      ) : (
        <div>Swims left on card: {totalSwims - usedSwims}</div>
      )}
    </div>
  );
}

export default SelectSettings;
