import { RiMenuLine } from "react-icons/ri";
import { NavBarUserInfo } from "./";

export const Navbar = () => {
  return (
    <nav className="py-2 flex items-center justify-between border bg-cyan-600">
      <div className="flex w-48 items-center">
        <button className="mx-4 p-2 rounded-full text-white hover:text-cyan-600 hover:bg-white">
          <RiMenuLine />
        </button>
        <h4 className="text-white font-semibold">App de Negocios</h4>
      </div>
      <div className="section-users mx-4">
        <NavBarUserInfo />
      </div>
    </nav>
  )
}
