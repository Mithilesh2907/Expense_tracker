export function ProfileCard() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1d1d1d]">
      <img
        src="https://i.pravatar.cc/100?img=12"
        alt="User"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="text-white text-sm font-semibold">Janice Chandler</h3>
      </div>
    </div>
  );
}