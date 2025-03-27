

export const SideBarItems = ({ text, icons }: {
    text: string,
    icons: React.ReactElement
}) => {
    return <div className="flex">
        <div className="p-3 text-gray-500">
            {icons}
        </div>
        <div className="p-3 text-gray-500">
            {text}
        </div>

    </div>
}