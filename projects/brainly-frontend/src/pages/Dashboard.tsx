import { Button } from "../components/ui/Button"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/ShareIcon"
import { Card } from "../components/ui/Card"
import { CreateContentModal } from "../components/ui/CreateContentModal"
import { SideBar } from "../components/ui/SideBar"
import { useState } from "react";

export const Dashboard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="p-4 ml-72 min-h-screen">
                <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
                <div className="flex justify-end gap-4 p-5 -translate-10 translate-x-20">
                    <Button fullWidth={false} onClick={() => setModalOpen(true)} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="Add content" size="md" />
                    <Button fullWidth={false} onClick={() => { }} startIcon={<ShareIcon size={"md"} />} variant="secondary" text="Share brain" size="md" />
                </div>
                <div className="flex gap-5">
                    <Card type="youtube" title="YT ideas" link="https://www.youtube.com/embed/ezuyuoP5OI8?si=bQCu8wfe-QWJiRvg" />
                    <Card type="twitter" title="Tweet ideas" link="https://x.com/danghentschel/status/1905082439204253775" />
                </div>
            </div>
        </div>
    )
}

