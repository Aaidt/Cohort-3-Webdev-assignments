import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

export const Signup = () => {
    return <div className="h-screen w-full bg-gray-200 flex rounded justify-center items-center">
        <div className="bg-white rounded border border-gray-400 m-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center items-center pt-4">
                <Button size="md" variant="primary" text="Signup" fullWidth={true} />
            </div>

        </div>


    </div>
}