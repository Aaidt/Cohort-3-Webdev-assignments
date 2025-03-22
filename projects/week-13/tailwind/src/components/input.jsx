export const Input = ({
    type,
    placeholder
}) => {
    return <span className={`rounded-2xl text-2xl px-2 py-2 text-white cursor-pointer bg-blue-500 `}>
        <input type={type} placeholder={placeholder} className={"bg-blue-500 outline-none"}></input>
    </span>
}