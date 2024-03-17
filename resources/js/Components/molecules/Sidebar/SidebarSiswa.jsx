import SidebarLink from "@/Components/atoms/Sidebar/SidebarLink";

export default function SidebarSiswa({ url }) {
    return (
        <>
            <ul className="md:max-h-[55%] h-full w-full flex flex-col justify-start md:gap-6 gap-2 overflow-y-auto md:pr-1 pr-0">
                <SidebarLink
                    link={route("dashboard.siswa")}
                    active={url == "/siswa/dashboard"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z"
                            fill="currentColor"
                        />
                        <path
                            d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
                            fill="currentColor"
                        />
                        <path
                            d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z"
                            fill="currentColor"
                        />
                        <path
                            d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
                            fill="currentColor"
                        />
                    </svg>
                    Dashboard
                </SidebarLink>
                <SidebarLink
                    link={route("materi.index")}
                    active={url.startsWith("/siswa/materi")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 22.08C11.7 22.08 11.4 22.01 11.15 21.87C9.28 20.85 5.99 19.77 3.93 19.5L3.64 19.46C2.33 19.3 1.25 18.07 1.25 16.74V4.66001C1.25 3.87001 1.56 3.15001 2.13 2.63001C2.7 2.11001 3.44 1.86001 4.22 1.93001C6.42 2.10001 9.74 3.20001 11.62 4.38001L11.86 4.52001C11.93 4.56001 12.08 4.56001 12.14 4.53001L12.3 4.43001C14.18 3.25001 17.5 2.13001 19.71 1.94001C19.73 1.94001 19.81 1.94001 19.83 1.94001C20.56 1.87001 21.31 2.13001 21.87 2.65001C22.44 3.17001 22.75 3.89001 22.75 4.68001V16.75C22.75 18.09 21.67 19.31 20.35 19.47L20.02 19.51C17.96 19.78 14.66 20.87 12.83 21.88C12.59 22.02 12.3 22.08 12 22.08ZM3.98 3.42001C3.66 3.42001 3.37 3.53001 3.14 3.74001C2.89 3.97001 2.75 4.30001 2.75 4.66001V16.74C2.75 17.33 3.26 17.9 3.83 17.98L4.13 18.02C6.38 18.32 9.83 19.45 11.83 20.54C11.92 20.58 12.05 20.59 12.1 20.57C14.1 19.46 17.57 18.32 19.83 18.02L20.17 17.98C20.74 17.91 21.25 17.33 21.25 16.74V4.67001C21.25 4.30001 21.11 3.98001 20.86 3.74001C20.6 3.51001 20.27 3.40001 19.9 3.42001C19.88 3.42001 19.8 3.42001 19.78 3.42001C17.87 3.59001 14.79 4.62001 13.11 5.67001L12.95 5.78001C12.4 6.12001 11.62 6.12001 11.09 5.79001L10.85 5.65001C9.14 4.60001 6.06 3.58001 4.1 3.42001C4.06 3.42001 4.02 3.42001 3.98 3.42001Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12 21.24C11.59 21.24 11.25 20.9 11.25 20.49V5.48999C11.25 5.07999 11.59 4.73999 12 4.73999C12.41 4.73999 12.75 5.07999 12.75 5.48999V20.49C12.75 20.91 12.41 21.24 12 21.24Z"
                            fill="currentColor"
                        />
                        <path
                            d="M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z"
                            fill="currentColor"
                        />
                        <path
                            d="M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z"
                            fill="currentColor"
                        />
                    </svg>
                    Materi
                </SidebarLink>
                <SidebarLink
                    link={route("kelompok.index")}
                    active={
                        url.startsWith("/siswa/kelompok") ||
                        url.startsWith("/siswa/tugas")
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M17.9998 7.91002C17.9698 7.91002 17.9498 7.91002 17.9198 7.91002H17.8698C15.9798 7.85002 14.5698 6.39001 14.5698 4.59001C14.5698 2.75001 16.0698 1.26001 17.8998 1.26001C19.7298 1.26001 21.2298 2.76001 21.2298 4.59001C21.2198 6.40001 19.8098 7.86001 18.0098 7.92001C18.0098 7.91001 18.0098 7.91002 17.9998 7.91002ZM17.8998 2.75002C16.8898 2.75002 16.0698 3.57002 16.0698 4.58002C16.0698 5.57002 16.8398 6.37002 17.8298 6.41002C17.8398 6.40002 17.9198 6.40002 18.0098 6.41002C18.9798 6.36002 19.7298 5.56002 19.7398 4.58002C19.7398 3.57002 18.9198 2.75002 17.8998 2.75002Z"
                            fill="currentColor"
                        />
                        <path
                            d="M18.01 15.28C17.62 15.28 17.23 15.25 16.84 15.18C16.43 15.11 16.16 14.72 16.23 14.31C16.3 13.9 16.69 13.63 17.1 13.7C18.33 13.91 19.63 13.68 20.5 13.1C20.97 12.79 21.22 12.4 21.22 12.01C21.22 11.62 20.96 11.24 20.5 10.93C19.63 10.35 18.31 10.12 17.07 10.34C16.66 10.42 16.27 10.14 16.2 9.73002C16.13 9.32002 16.4 8.93003 16.81 8.86003C18.44 8.57003 20.13 8.88002 21.33 9.68002C22.21 10.27 22.72 11.11 22.72 12.01C22.72 12.9 22.22 13.75 21.33 14.35C20.42 14.95 19.24 15.28 18.01 15.28Z"
                            fill="currentColor"
                        />
                        <path
                            d="M5.96998 7.91C5.95998 7.91 5.94998 7.91 5.94998 7.91C4.14998 7.85 2.73998 6.39 2.72998 4.59C2.72998 2.75 4.22998 1.25 6.05998 1.25C7.88998 1.25 9.38998 2.75 9.38998 4.58C9.38998 6.39 7.97998 7.85 6.17998 7.91L5.96998 7.16L6.03998 7.91C6.01998 7.91 5.98998 7.91 5.96998 7.91ZM6.06998 6.41C6.12998 6.41 6.17998 6.41 6.23998 6.42C7.12998 6.38 7.90998 5.58 7.90998 4.59C7.90998 3.58 7.08998 2.75999 6.07998 2.75999C5.06998 2.75999 4.24998 3.58 4.24998 4.59C4.24998 5.57 5.00998 6.36 5.97998 6.42C5.98998 6.41 6.02998 6.41 6.06998 6.41Z"
                            fill="currentColor"
                        />
                        <path
                            d="M5.96 15.28C4.73 15.28 3.55 14.95 2.64 14.35C1.76 13.76 1.25 12.91 1.25 12.01C1.25 11.12 1.76 10.27 2.64 9.68002C3.84 8.88002 5.53 8.57003 7.16 8.86003C7.57 8.93003 7.84 9.32002 7.77 9.73002C7.7 10.14 7.31 10.42 6.9 10.34C5.66 10.12 4.35 10.35 3.47 10.93C3 11.24 2.75 11.62 2.75 12.01C2.75 12.4 3.01 12.79 3.47 13.1C4.34 13.68 5.64 13.91 6.87 13.7C7.28 13.63 7.67 13.91 7.74 14.31C7.81 14.72 7.54 15.11 7.13 15.18C6.74 15.25 6.35 15.28 5.96 15.28Z"
                            fill="currentColor"
                        />
                        <path
                            d="M11.9998 15.38C11.9698 15.38 11.9498 15.38 11.9198 15.38H11.8698C9.97982 15.32 8.56982 13.86 8.56982 12.06C8.56982 10.22 10.0698 8.72998 11.8998 8.72998C13.7298 8.72998 15.2298 10.23 15.2298 12.06C15.2198 13.87 13.8098 15.33 12.0098 15.39C12.0098 15.38 12.0098 15.38 11.9998 15.38ZM11.8998 10.22C10.8898 10.22 10.0698 11.04 10.0698 12.05C10.0698 13.04 10.8398 13.84 11.8298 13.88C11.8398 13.87 11.9198 13.87 12.0098 13.88C12.9798 13.83 13.7298 13.03 13.7398 12.05C13.7398 11.05 12.9198 10.22 11.8998 10.22Z"
                            fill="currentColor"
                        />
                        <path
                            d="M11.9998 22.76C10.7998 22.76 9.59978 22.45 8.66978 21.82C7.78978 21.23 7.27979 20.39 7.27979 19.49C7.27979 18.6 7.77978 17.74 8.66978 17.15C10.5398 15.91 13.4698 15.91 15.3298 17.15C16.2098 17.74 16.7198 18.58 16.7198 19.48C16.7198 20.37 16.2198 21.23 15.3298 21.82C14.3998 22.44 13.1998 22.76 11.9998 22.76ZM9.49979 18.41C9.02979 18.72 8.77979 19.11 8.77979 19.5C8.77979 19.89 9.03979 20.27 9.49979 20.58C10.8498 21.49 13.1398 21.49 14.4898 20.58C14.9598 20.27 15.2098 19.88 15.2098 19.49C15.2098 19.1 14.9498 18.72 14.4898 18.41C13.1498 17.5 10.8598 17.51 9.49979 18.41Z"
                            fill="currentColor"
                        />
                    </svg>
                    Kelompok
                </SidebarLink>
                <SidebarLink
                    link={route("referensi.index")}
                    active={url.startsWith("/siswa/referensi")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
                            fill="currentColor"
                        />
                        <path
                            d="M9 11.11C8.83 11.11 8.66 11.08 8.5 11.01C8.04 10.81 7.75 10.36 7.75 9.87V2C7.75 1.59 8.09 1.25 8.5 1.25H15.5C15.91 1.25 16.25 1.59 16.25 2V9.85999C16.25 10.36 15.96 10.81 15.5 11C15.05 11.2 14.52 11.11 14.15 10.77L12 8.79999L9.84998 10.78C9.60998 11 9.31 11.11 9 11.11ZM12 7.21002C12.3 7.21002 12.61 7.31998 12.85 7.53998L14.75 9.28998V2.75H9.25V9.28998L11.15 7.53998C11.39 7.31998 11.7 7.21002 12 7.21002Z"
                            fill="currentColor"
                        />
                        <path
                            d="M17.5 14.75H13.25C12.84 14.75 12.5 14.41 12.5 14C12.5 13.59 12.84 13.25 13.25 13.25H17.5C17.91 13.25 18.25 13.59 18.25 14C18.25 14.41 17.91 14.75 17.5 14.75Z"
                            fill="currentColor"
                        />
                        <path
                            d="M17.5 18.75H9C8.59 18.75 8.25 18.41 8.25 18C8.25 17.59 8.59 17.25 9 17.25H17.5C17.91 17.25 18.25 17.59 18.25 18C18.25 18.41 17.91 18.75 17.5 18.75Z"
                            fill="currentColor"
                        />
                    </svg>
                    Referensi
                </SidebarLink>
            </ul>

            {/* Bottom Menu */}
            <ul className="h-1/4 w-full flex flex-col justify-end md:gap-6 gap-2 md:mt-0 mt-10">
                <SidebarLink>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M11.9998 22.08C11.6998 22.08 11.3998 22.01 11.1498 21.87C9.27978 20.85 5.99976 19.77 3.93976 19.5L3.64978 19.46C2.33978 19.3 1.25977 18.07 1.25977 16.74V4.65999C1.25977 3.86999 1.56977 3.15002 2.13977 2.63002C2.70977 2.11002 3.44974 1.86001 4.22974 1.93001C6.41974 2.11001 9.73975 3.21002 11.6198 4.38002L11.8597 4.52003C11.9297 4.55003 12.0798 4.56003 12.1398 4.52003L12.2997 4.42C12.9697 4 13.8097 3.58999 14.7297 3.21999C14.9597 3.12999 15.2197 3.16 15.4297 3.3C15.6397 3.44 15.7598 3.67 15.7598 3.92V6.59999L16.5898 6.05C16.8398 5.88 17.1697 5.88 17.4197 6.05L18.2498 6.59999V2.78004C18.2498 2.42004 18.5097 2.10999 18.8597 2.03999C19.1497 1.98999 19.4398 1.95001 19.6998 1.93001C19.7198 1.93001 19.7998 1.93001 19.8198 1.93001C20.5498 1.87001 21.2997 2.12003 21.8597 2.64003C22.4297 3.16003 22.7397 3.88 22.7397 4.67V16.74C22.7397 18.08 21.6598 19.3 20.3398 19.46L20.0098 19.5C17.9498 19.77 14.6498 20.86 12.8198 21.87C12.5998 22.01 12.2998 22.08 11.9998 22.08ZM3.97974 3.40999C3.65974 3.40999 3.36977 3.51999 3.13977 3.73C2.88977 3.96 2.74976 4.28999 2.74976 4.65999V16.74C2.74976 17.33 3.25977 17.9 3.82977 17.98L4.12976 18.02C6.37976 18.32 9.82977 19.45 11.8298 20.55C11.9198 20.59 12.0497 20.6 12.0997 20.58C14.1097 19.47 17.5698 18.33 19.8298 18.03L20.1697 17.99C20.7397 17.92 21.2498 17.34 21.2498 16.75V4.68001C21.2498 4.31001 21.1097 3.99001 20.8597 3.75001C20.6097 3.52001 20.2598 3.41001 19.8998 3.43001C19.8698 3.43001 19.7798 3.43001 19.7598 3.43001V8.00001C19.7598 8.28001 19.6097 8.52999 19.3597 8.65999C19.1097 8.78999 18.8198 8.78001 18.5898 8.62001L17.0098 7.57002L15.4297 8.62001C15.1997 8.77001 14.9097 8.78999 14.6597 8.65999C14.4197 8.52999 14.2598 8.28001 14.2598 8.00001V5.07002C13.8298 5.28002 13.4397 5.49002 13.0997 5.69002L12.9398 5.78999C12.3898 6.12999 11.6098 6.13 11.0798 5.8L10.8398 5.65004C9.14978 4.59004 6.06974 3.56999 4.10974 3.40999C4.05974 3.40999 4.01974 3.40999 3.97974 3.40999Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12 21.24C11.59 21.24 11.25 20.9 11.25 20.49V5.48999C11.25 5.07999 11.59 4.73999 12 4.73999C12.41 4.73999 12.75 5.07999 12.75 5.48999V20.49C12.75 20.91 12.41 21.24 12 21.24Z"
                            fill="currentColor"
                        />
                        <path
                            d="M19 8.74999C18.85 8.74999 18.71 8.70998 18.58 8.61998L17 7.57L15.42 8.61998C15.19 8.76998 14.9 8.78996 14.65 8.65996C14.41 8.52996 14.25 8.27999 14.25 7.99999V3.91997C14.25 3.60997 14.44 3.33996 14.72 3.21996C16.1 2.66996 17.61 2.23997 18.88 2.03997C19.1 1.99997 19.32 2.07001 19.49 2.21001C19.66 2.35001 19.75 2.56002 19.75 2.78002V7.99999C19.75 8.27999 19.6 8.52996 19.35 8.65996C19.24 8.71996 19.12 8.74999 19 8.74999ZM17 5.91997C17.14 5.91997 17.29 5.95998 17.42 6.04998L18.25 6.59996V3.68999C17.45 3.86999 16.58 4.12999 15.75 4.43999V6.59996L16.58 6.04998C16.71 5.95998 16.86 5.91997 17 5.91997Z"
                            fill="currentColor"
                        />
                    </svg>
                    Panduan
                </SidebarLink>
                <SidebarLink method="POST" link={route("logout")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15.24 22.27H15.11C10.67 22.27 8.53002 20.52 8.16002 16.6C8.12002 16.19 8.42002 15.82 8.84002 15.78C9.24002 15.74 9.62002 16.05 9.66002 16.46C9.95002 19.6 11.43 20.77 15.12 20.77H15.25C19.32 20.77 20.76 19.33 20.76 15.26V8.73998C20.76 4.66998 19.32 3.22998 15.25 3.22998H15.12C11.41 3.22998 9.93002 4.41998 9.66002 7.61998C9.61002 8.02998 9.26002 8.33998 8.84002 8.29998C8.42002 8.26998 8.12001 7.89998 8.15001 7.48998C8.49001 3.50998 10.64 1.72998 15.11 1.72998H15.24C20.15 1.72998 22.25 3.82998 22.25 8.73998V15.26C22.25 20.17 20.15 22.27 15.24 22.27Z"
                            fill="currentColor"
                        />
                        <path
                            d="M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z"
                            fill="currentColor"
                        />
                        <path
                            d="M5.84994 16.1C5.65994 16.1 5.46994 16.03 5.31994 15.88L1.96994 12.53C1.67994 12.24 1.67994 11.76 1.96994 11.47L5.31994 8.11997C5.60994 7.82997 6.08994 7.82997 6.37994 8.11997C6.66994 8.40997 6.66994 8.88997 6.37994 9.17997L3.55994 12L6.37994 14.82C6.66994 15.11 6.66994 15.59 6.37994 15.88C6.23994 16.03 6.03994 16.1 5.84994 16.1Z"
                            fill="currentColor"
                        />
                    </svg>
                    Keluar
                </SidebarLink>
            </ul>
        </>
    );
}