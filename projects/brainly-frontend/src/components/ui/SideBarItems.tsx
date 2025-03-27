

export const SideBarItems = ({text, icons}: {
    text: string,
    icons: React.ReactElement
}) => {
    return <div className="flex">
        {icons} {text}
    </div>
}