import Title from "@/Components/atoms/Text/Title";
import { formattedDate } from "@/utils/helper";

export default function KegiatanItem({ name, date, time }) {
    return (
        <div className="w-full pl-2 border-l-4 border-l-orange-500 flex justify-between items-center">
            <span>
                <p className="text-gray-400">Tugas</p>
                <Title size="text-lg" title={name} />
            </span>
            <span>
                <p className="font-medium text-right">Berakhir</p>
                <p className="text-gray-600">
                    {`${formattedDate(date)} ${time}`}
                </p>
            </span>
        </div>
    );
}
