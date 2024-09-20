import { ArrowUpIcon } from "@heroicons/react/24/solid";
interface StatisticsCardProps {
    title: string;
    value: string;
    percentage: string;
    trend: 'up' | 'down';
}
const StatisticsCard = ({ title, value, percentage, trend }: StatisticsCardProps) => {
  return (
    <section
        className="rounded-[24px] bg-[#faffff1a] p-4 flex justify-center items-center w-full xl:w-[24%] lg:w-[49%] md:w-full mx-1 mb-5" data-aos="fade-up" data-aos-duration="1000"
      >
        <div className="flex items-center gap-4 text-base text-white whitespace-nowrap leading-8">
          <p className="text-white font-medium stat-heading">{title}</p>
          <div className="flex items-center gap-1 text-[#a6ff97]">
            <span className=" stat-percentage-text">{percentage}</span>
            <ArrowUpIcon className="h-4 w-4 text-[#a6ff97]" />
          </div>
          <h1 className="text-white stat-value ml-5">{value}</h1>
        </div>
      </section>
  );
};
export default StatisticsCard;
