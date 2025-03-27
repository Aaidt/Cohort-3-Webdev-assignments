import { Button } from "./Button"
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input"

export const CreateContentModal = ({ open, onClose }: {
    open: Boolean,
    onClose: () => void
}) => {
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
                        <Button variant="primary" size="md" text="Submit" onClick={() => { }} fullWidth={false} />
                    </div>
                </span>
            </div>
        </div>}
    </div>

}
