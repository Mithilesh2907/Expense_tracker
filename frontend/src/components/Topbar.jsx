import { ProfileCard } from "./ProfileCard";

export function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-[#1d1d1d] rounded-2xl">
      <h1 className="text-2xl font-bold text-white">Expense Tracker</h1>
      <div className="flex items-center gap-4">
        <ProfileCard />
      </div>
    </div>
  );
}