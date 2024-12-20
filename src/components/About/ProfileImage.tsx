export const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
        <img
           src="/src/images/pic.jfif"
          alt="Mouhamed Mahmoud"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};