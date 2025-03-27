import { Button } from "../components/ui/Button"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/ShareIcon"
import { Card } from "../components/ui/Card"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { SideBar } from "../components/ui/SideBar"
import { useState, useEffect } from "react";
import { useContent } from "../hooks/useContent"
import axios from "axios";
import { BACKEND_URL } from "../config"

export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {contents, refresh} = useContent();
    useEffect(() => {
        refresh()
    }, [modalOpen])

    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="p-4 ml-72 min-h-screen">
                <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
                <div className="flex justify-end gap-4 p-5 -translate-10 translate-x-20">
                    <Button fullWidth={false} onClick={() => setModalOpen(true)} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="Add content" size="md" />
                    <Button fullWidth={false} onClick={async() => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                            share: true
                        }, {
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        });
                        const shareUrl = `http://localhost:5173/share/${response.data.hash}`
                        alert(shareUrl)
                    }} 
                        startIcon={<ShareIcon size={"md"} />} 
                        variant="secondary" text="Share brain" size="md" />
                </div>
                <div className="flex gap-5 flex-wrap">
                    {/* {JSON.stringify(contents)} */}
                    {contents.map(({ title, type, link }) => <Card
                        type={type}
                        title={title}
                        link={link}
                    />)}

                </div>
            </div>
        </div>
    )
}

