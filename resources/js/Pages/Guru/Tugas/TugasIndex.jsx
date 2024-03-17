import PrimaryButton from "@/Components/atoms/Button/PrimaryButton";
import Status from "@/Components/atoms/Status/Status";
import TableBody from "@/Components/atoms/Table/TableBody";
import TableContainer from "@/Components/atoms/Table/TableContainer";
import TableData from "@/Components/atoms/Table/TableData";
import TableHead from "@/Components/atoms/Table/TableHead";
import TableRow from "@/Components/atoms/Table/TableRow";
import ActionButton from "@/Components/molecules/Button/ActionButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";

export default function TugasIndex({ auth }) {
    const { tugases } = usePage().props;

    console.log(tugases);

    const tableTitle = [
        "Nomor",
        "Nama Tugas",
        "Kelompok",
        "Status Tugas",
        "Action",
    ];

    return (
        <AuthenticatedLayout title="Tugas Kelompok" userLogin={auth.user}>
            <div className="p-6 rounded-xl bg-gray-50 space-y-6">
                <Link href="">
                    <PrimaryButton className="ml-auto">
                        Tambah Tugas Kelompok
                    </PrimaryButton>
                </Link>

                <TableContainer>
                    <TableHead datas={tableTitle} />
                    <TableBody>
                        {tugases.map((tugas, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData children={index + 1} />
                                    <TableData
                                        children={tugas.name}
                                        align="text-left"
                                    />
                                    <TableData
                                        children={tugas.kelompoks.name}
                                        align="text-left"
                                    />
                                    <TableData
                                        children={
                                            <Status
                                                active={tugas.is_active == "Y"}
                                                activeStatus="Aktif"
                                                nonactiveStatus="Nonaktif"
                                            />
                                        }
                                    />
                                    <TableData children={<ActionButton />} />
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </TableContainer>
            </div>
        </AuthenticatedLayout>
    );
}