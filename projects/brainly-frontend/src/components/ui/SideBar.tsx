import { SideBarItems } from "./SideBarItems"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { Logo } from "../icons/Logo"


export const SideBar = () => {
    return <div className="h-full bg-slate-100 pl-4 border-r border-gray-400 w-72 fixed left-0 top-0 slate-500 border-2">
        <div className="text-2xl flex pt-4">
            <div className="pr-3 ">
                <Logo />
            </div>
            BRAINLY
        </div>
        <div className="pt-4 text-gray-500">
            <SideBarItems icons={<TwitterIcon />} text="Twitter" />
            <SideBarItems icons={<YoutubeIcon />} text="YouTube" />
        </div>
    </div>
}