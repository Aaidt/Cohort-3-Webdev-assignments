import "./App.css"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon"
import { Card } from "./components/ui/Card"
import { CreateContentModal } from "./components/ui/CreateContentModal"
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="p-4">
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => setModalOpen(true)} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="Add content" size="md" />
        <Button onClick={() => { }} startIcon={<ShareIcon size={"md"} />} variant="secondary" text="Share brain" size="md" />
      </div>
      <div className="flex gap-5">
        <Card type="youtube" title="yt ideas" link="https://www.youtube.com/embed/ezuyuoP5OI8?si=bQCu8wfe-QWJiRvg" />
        <Card type="twitter" title="tweet ideas" link="https://x.com/danghentschel/status/1905082439204253775" />
      </div>
    </div>
  )
}

export default App;