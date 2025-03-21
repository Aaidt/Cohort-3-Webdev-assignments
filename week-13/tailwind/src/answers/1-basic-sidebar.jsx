export function SideBar(){
    return <div className="flex">
        <div className="bg-blue-200 h-screen w-64 hidden md:block">
            Sidebar
        </div>

        <div className="bg-red-200 h-screen w-screen">
            Content
        </div>
    </div>
}