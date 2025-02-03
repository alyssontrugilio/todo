type TitleTableProps = {
  title: string;
  count: number;
};

export default function TitleTable({ title, count }: TitleTableProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[#4EA8DE] text-sm font-semibold">{title}</p>
      <div className=" flex items-center bg-[#333333] p-4 rounded-full h-0">
        <p className="text-sm  font-bold">{count.toString()}</p>
      </div>
    </div>
  );
}
