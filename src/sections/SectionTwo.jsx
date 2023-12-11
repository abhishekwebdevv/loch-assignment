import cohorts from "../assets/cohorts_2_cropped.svg";
import eye from "../assets/eye.svg";

export function SectionTwo() {
  return (
    <section className="flex flex-col sm:flex-row gap-10">
      <div className="sm:w-1/2 flex flex-col order-2 sm:order-1">
        <img src={cohorts} alt="chart" className="h-full w-full" />
      </div>

      <div className="sm:w-1/2 flex flex-col items-end gap-4 order-1 sm:order-2">
        <img src={eye} alt="bell-icon" className="h-6 w-6" />
        <p className="text-white text-3xl font-normal sm:text-right text-center">
          Watch what the whales are doing
        </p>

        <p className="text-gray-300 font-normal sm:text-right text-center">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </section>
  );
}
