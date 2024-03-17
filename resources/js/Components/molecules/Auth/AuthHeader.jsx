import Description from "@/Components/atoms/Text/Description";
import Title from "@/Components/atoms/Text/Title";
import { Link } from "@inertiajs/react";

export default function AuthHeader({ title, desc }) {
    return (
        <div className="flex items-start justify-between">
            <div>
                <Title size="text-[2rem]" title={title} />
                <div className="md:w-3/5 w-full">
                    <Description desc={desc} />
                </div>
            </div>
            <Link href={route("landing")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.64C14.5899 8.35 15.0699 8.35 15.3599 8.64C15.6499 8.93 15.6499 9.41 15.3599 9.7L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z"
                        fill="currentColor"
                    />
                    <path
                        d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.7C8.34986 9.41 8.34986 8.93 8.63986 8.64C8.92986 8.35 9.40986 8.35 9.69986 8.64L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z"
                        fill="currentColor"
                    />
                    <path
                        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                        fill="currentColor"
                    />
                </svg>
            </Link>
        </div>
    );
}