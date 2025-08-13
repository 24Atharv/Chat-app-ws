import { Logo } from "../Icons/logo"

export const NavBar = () => {
    return <div className="flex flex-col  justify-center">
        <div className="flex gap-1 items-center">
            <Logo />
            <span className="font-bold text-2xl">
                Real time chat app
            </span>
        </div>
        <span className="text-sm text-gray-400">
            temporary room that expires after both user exit
        </span>
    </div>
}
