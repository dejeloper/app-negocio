import Image from "next/image"
import { NavbarMessage, NavbarNotifications, NavbarUserProfile } from "./../";

export const NavBarUserInfo = () => {
  const userName = "Jake"
  const userImg = `/user_${userName}.jpg`
  const userEmail = "jake@apneg.com"

  return (
    <>
      <div className="px-4 flex justify-between gap-4 place-items-center">
        <NavbarNotifications />
        <NavbarMessage />
        <NavbarUserProfile userName={userName} userImg={userImg} userEmail={userEmail} />
      </div>
    </>
  )
}
