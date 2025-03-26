import React from "react";
import "./App.css"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"

function App() {
  return (
    <div>
      <Button onClick={() => {}} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="share" size="md" />
      <Button onClick={() => {}} variant="secondary" text="add content" size="md" />
    </div>
  )
}

export default App;