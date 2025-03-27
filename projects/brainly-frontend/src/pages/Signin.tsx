import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRef } from "react" 
import axios from "axios";
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const signin = async () => {
        
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/signin`, {
            username,
            password
        });
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
        alert("You have signed in successfully.")
    }


    return <div className="h-screen w-full bg-gray-200 flex rounded justify-center items-center">
        <div className="bg-white rounded border border-gray-400 m-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center items-center pt-4">
                <Button onClick={() => signin()} size="md" variant="primary" text="Signin" fullWidth={true} />
            </div>

        </div>


    </div>
}