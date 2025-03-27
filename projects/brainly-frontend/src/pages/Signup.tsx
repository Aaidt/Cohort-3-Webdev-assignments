import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config"

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signup = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/brain/signup`, {
            username,
            password
        });
        alert("You have signed up successfully.")
    }

    return <div className="h-screen w-full bg-gray-200 flex rounded justify-center items-center">
        <div className="bg-white rounded border border-gray-400 m-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center items-center pt-4">
                <Button onClick={() => signup()} size="md" variant="primary" text="Signup" fullWidth={true} />
            </div>

        </div>


    </div>
}