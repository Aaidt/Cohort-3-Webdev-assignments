

export const SideBarItems = ({ text, icons }: {
    text: string,
    icons: React.ReactElement
}) => {
    return <div className="flex hover:bg-gray-300 rounded-lg transition-all">
        <div className="p-3 text-gray-500">
            {icons}
        </div>
        <div className="p-3 text-gray-500">
            {text}
        </div>

    </div>
}