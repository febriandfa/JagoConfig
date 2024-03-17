import CardMateri from "@/Components/organisms/Card/CardMateri";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formattedDate, formattedNumber } from "@/utils/helper";
import { usePage } from "@inertiajs/react";

export default function MateriIndex({ auth }) {
    const { materis } = usePage().props;

    console.log(materis);

    return (
        <AuthenticatedLayout userLogin={auth.user} title="Materi">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4">
                {materis.map((materi, index) => {
                    return (
                        <CardMateri
                            key={index}
                            uploadDate={formattedDate(materi.created_at)}
                            seenTime={materi.seen_time}
                            materiId={materi.id}
                            materiNumber={formattedNumber(index + 1)}
                            materiName={materi.name}
                            materiDesc={materi.slug}
                            materiFile={materi.file}
                        />
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
}