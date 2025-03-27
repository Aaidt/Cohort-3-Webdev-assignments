import { Button } from "./Button"
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input"
import { useRef, useState } from "react";

export const CreateContentModal = ({ open, onClose }: {
    open: Boolean,
    onClose: () => void
}) => {
    enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter"
    }

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube)
    const addContent = () => {
        
    }


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
                        <Input ref={titleRef} placeholder="Title" />
                        <Input placeholder="Type" />
                        <Input ref={linkRef} placeholder="Link" />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="md" text="Submit" onClick={() => addContent()} fullWidth={false} />
                    </div>
                </span>
            </div>
        </div>}
    </div>

}
