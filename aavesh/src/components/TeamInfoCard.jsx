const roleStyles = {
  "content team": "border-blue-500 bg-blue-900",
  "volunteer team": "border-green-500 bg-green-900",
  "design team": "border-pink-500 bg-pink-900",
  "PR team": "border-yellow-500 bg-yellow-900",
  "video-editing team": "border-purple-500 bg-purple-900",
};

const TeamInfoCard = ({ name, rollNo, role }) => {
  const key = role.toLowerCase().trim();
  const borderClass = roleStyles[key] || "border-gray-500 bg-gray-900";

  return (
    <div className="relative mt-5 w-full max-w-xs transition-transform duration-300 ease-in-out hover:scale-110">
      
      {/* Role Label */}
      <div className={`absolute -top-5 -right-0 ${borderClass} text-white px-4 z-10`}>
        <h3 className="text-sm tracking-wider lowercase">{role}</h3>
      </div>

      {/* Card */}
      <div
        className={`flex flex-col h-[84px] border-2 ${borderClass} rounded-tl-3xl rounded-br-3xl p-3
        bg-[linear-gradient(to_right,#080808,#111,#1a1a1a,#222,#1a1a1a,#111,#080808)]`}
      >
        <div className="pl-4">
          <h1 className="text-xl text-white">{name}</h1>
          <h4 className="text-xl pr-2">{rollNo}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamInfoCard;
