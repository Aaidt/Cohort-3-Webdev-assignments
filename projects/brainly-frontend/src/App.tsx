import React from "react";
import "./App.css"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon"

function App() {
  return (
    <div>
      <Button onClick={() => {}} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="Add content" size="md" />
      <Button onClick={() => {}} startIcon={<ShareIcon size={"md"} />} variant="secondary" text="Share brain" size="md" />
    </div>
  )
}

export default App;