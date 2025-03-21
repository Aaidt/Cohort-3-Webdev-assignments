export function SideBar(){
    return <div className="flex">
        <div className="transition-all duration-50 hover:bg-blue-200 bg-red-200 h-screen md:w-64 w-0 ">
            Sidebar
        </div>

        <div className="bg-green-200 h-screen w-screen">
            Content
        </div>
    </div>  
}