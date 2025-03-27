import { ShareIcon } from "../icons/ShareIcon"


interface CardProps {
    title: string,
    type: "youtube" | "twitter",
    link: string
}

export const Card = ({ title, type, link }: CardProps) => {
    return <>
        <div className="bg-white rounded-md p-4 border-gray-300 max-w-72 min-h-48 border shadow-lg">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2">
                        <a href={link} target="_blank">
                            <ShareIcon size="md" />
                        </a>
                    </div>
                    {title}
                </div>
                <div className="flex text-gray-500">
                    <div className="pr-2 ">
                        <ShareIcon size="md" />
                    </div>
                    <div>
                        <ShareIcon size="md" />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {type === "youtube" && <iframe
                    className="w-full"
                    src={link.replace("watch", "embed")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}
            </div>


        </div>
    </>
}   