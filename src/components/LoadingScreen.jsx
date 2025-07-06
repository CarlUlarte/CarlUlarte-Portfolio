import { useEffect, useState } from "react";


export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fulltext = "Hello World...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fulltext.substring(0, index));
            index++;
            if (index > fulltext.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white text-gray-900 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold ">
                {text}<span className="animate-blink ml-1">|</span>
            </div>
            <div className="w-[350px] h-[4px] bg-gray-100 rounded relative overflow-hidden">
                <div className="w-[50%] h-full bg-[#324b7a] shadow-[0_0_15px_#324b7a] animate-loading-bar" ></div>

            </div>
        </div>
    );
};