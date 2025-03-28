import { useRef, useState } from "react";
import { Button } from "./button";
export const Otp = ({ number }) => {

    const ref = useRef(Array(number).fill(0));
    const [disabled, setDisabled] = useState(true)

    return <div className="flex justify-center">

        {Array(number).fill(1).map((x, index) =>
            <SubOtpBox ref={e => ref.current[index] = e} key={index} onDone={() => {
                if (index + 1 >= number) {
                    return
                }
                ref.current[index + 1].focus();
            }} goBack={() => {
                if (index == 0) {
                    return
                }
                ref.current[index - 1].focus();
            }} />
        )}

        <Button disabled={disabled}>Sign-up</Button>
    </div>

}

function SubOtpBox({
    ref, onDone, goBack
}) {
    const [inputBoxVal, setInputBoxVal] = useState("")
    return <div>
        <input value={inputBoxVal} ref={ref} onKeyUp={(e) => {
            if (e.key == "Backspace") {
                goBack();
            }
        }}
            onChange={(e) => {
                const val = e.target.value;
                if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9") {
                    setInputBoxVal(val);
                    onDone()
                }
            }} type="text" className="text-white px-4 outline-none w-[40px] h-[50px] bg-blue-500 m-1 rounded-xl"></input>
    </div>

}