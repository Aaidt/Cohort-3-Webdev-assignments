

export const Input = ({ onChange, placeholder }: {
    onChange?: () => void,
    placeholder: string
}) => {
    return <div>
        <input
            className="py-2 border rounded-lg m-2 px-8" id="title"
            type="text"
            placeholder={placeholder}
            onChange={() => { }}>
        </input>
    </div>
}