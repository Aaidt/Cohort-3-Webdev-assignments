import { Button } from "./Button"
import { CrossIcon } from "../icons/CrossIcon";

export const CreateContentModal = ({ open, onClose }) => {
    return <div>
        {open && <div className="bg-black fixed top-0 left-0 h-screen w-screen opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded-md">
                    <div>
                        <span className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </span>
                    </div>
                    <div className="flex flex-col p-4">
                        <Input placeholder="Title" onChange={() => { }} />
                        <Input placeholder="Type" onChange={() => { }} />
                        <Input placeholder="Link" onChange={() => { }} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="md" text="Submit" onClick={() => { }} />
                    </div>
                </span>
            </div>
        </div>}
    </div>

}
const Input = ({ onChange, placeholder }) => {
    return <div>
        <input
            className="py-2 border rounded-lg m-2 px-8" id="title"
            type="text"
            placeholder={placeholder}
            onChange={() => { }}>
        </input>
    </div>
}