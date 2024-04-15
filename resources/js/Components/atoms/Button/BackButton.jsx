import { Link } from "@inertiajs/react";

export default function BackButton({ toDashboard, userRole }) {
    const handleBackOnClick = () => {
        window.history.go(-1);
    };

    const dashboardRoute =
        userRole == "guru" ? "dashboard.guru" : "dashboard.siswa";

    return (
        <Link
            as="button"
            onClick={toDashboard ? console.log("") : handleBackOnClick}
            href={toDashboard ? route(dashboardRoute) : null}
            className="flex items-center gap-1"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
                    fill="currentColor"
                />
            </svg>
            Kembali
        </Link>
    );
}
