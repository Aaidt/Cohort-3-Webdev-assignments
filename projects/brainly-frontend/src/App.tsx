import "./App.css"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon"
import { Card } from "./components/ui/Card"

function App() {
  return (
    <div>
      <Button onClick={() => { }} startIcon={<PlusIcon size={"lg"} />} variant="primary" text="Add content" size="md" />
      <Button onClick={() => { }} startIcon={<ShareIcon size={"md"} />} variant="secondary" text="Share brain" size="md" />

      <div className="flex">
        <Card type="youtube" title="yt ideas" link="https://www.youtube.com/embed/ezuyuoP5OI8?si=bQCu8wfe-QWJiRvg" />
        <Card type="twitter" title="tweet ideas" link="https://x.com/danghentschel/status/1905082439204253775" />
      </div>
    </div>
  )
}

export default App;