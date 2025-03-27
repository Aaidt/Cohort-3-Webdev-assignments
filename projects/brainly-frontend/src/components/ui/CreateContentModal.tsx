import { Button } from "./Button"
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input"
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config"
import axios from "axios";

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
    const addContent = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/brain/content`, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        alert("Content added")
        onClose();
    }


    return <div>
        {open && <div>
            <div onClick={onClose} className="bg-black fixed top-0 left-0 h-screen w-screen opacity-50 flex justify-center"></div>
            <div className="flex flex-col justify-center items-center">
                <span className="bg-white absolute top-0 left-0 translate-30 translate-x-130 p-4 rounded-md">
                    <div>
                        <span className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </span>
                    </div>
                    <div className="flex flex-col p-4">
                        <Input ref={titleRef} placeholder="Title" />
                        {/* <Input placeholder="Type" /> */}
                        <Input ref={linkRef} placeholder="Link" />
                    </div>
                    <h1 className="text-xl">
                        Type
                    </h1>
                    <div className="flex">
                        <Button text="Youtube" size="md" fullWidth={true}
                            variant={type === ContentType.Youtube ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Youtube)} />

                        <Button text="Twitter" size="md" fullWidth={true}
                            variant={type === ContentType.Twitter ? "primary" : "secondary"}
                            onClick={() => setType(ContentType.Twitter)} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" size="md" text="Submit" onClick={() => addContent()} fullWidth={false} />
                    </div>
                </span>
            </div>

        </div>}
    </div>

}
