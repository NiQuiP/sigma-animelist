import Link from "next/link";
import InputSearch from "./inputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between md:flex-row flex-col p-4 md:items-center">
        <Link href='/' className="font-bold text-2xl">
          CUY ANIMELIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
