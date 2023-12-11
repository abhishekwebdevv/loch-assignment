import PropTypes from "prop-types";
import { Input } from "../";
import bell from "../../assets/bell_2.svg";
import barchart from "../../assets/barchart.svg";
import clock from "../../assets/clock.svg";

export function ReminderCard({ type, text, caption }) {
  const icon = {
    1: {
      src: bell,
      alt: "bell-icon",
    },
    2: {
      src: barchart,
      alt: "barchart-icon",
    },
    3: {
      src: clock,
      alt: "clock-icon",
    },
  };

  const currencySelectOptions = [
    {
      id: "1",
      label: "$500.00",
    },
    {
      id: "2",
      label: "$1000.00",
    },
    {
      id: "3",
      label: "$1500.00",
    },
    {
      id: "4",
      label: "$2000.00",
    },
    {
      id: "5",
      label: "$3000.00",
    },
  ];

  const daysSelectOptions = [
    {
      id: "1",
      label: "> 7 days",
    },
    {
      id: "2",
      label: "> 15 days",
    },
    {
      id: "3",
      label: "> 30 days",
    },
  ];

  const selectOption = type === 2 ? currencySelectOptions : daysSelectOptions;

  return (
    <div className="bg-white p-5 rounded-xl flex flex-col justify-between gap-5 h-full mr-5">
      <div className="flex items-center justify-between">
        <img
          src={icon[type].src}
          alt={icon[type].alt}
          height="28px"
          width="28px"
          className="h-7 w-7"
        />

        {type === 1 ? (
          <p className="font-semibold">Save</p>
        ) : (
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="appearance-none h-4 w-4 rounded border border-gray-500 checked:bg-contain checked:bg-check checked:border-none checked:bg-no-repeat"
          />
        )}
      </div>

      <div className={`flex flex-col ${type === 3 ? "gap-y-2" : "gap-y-5"}`}>
        <p className="text-sm font-medium text-left select-none">{text}</p>
        {type !== 1 && (
          <select
            name="select"
            id="select"
            className="bg-gray-300 max-w-fit rounded"
          >
            {selectOption.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        {caption && (
          <p className="text-sm font-medium text-left select-none">{caption}</p>
        )}
      </div>

      {type === 1 && <Input placeholder={false} small />}
    </div>
  );
}

ReminderCard.propTypes = {
  type: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

ReminderCard.defaultProps = {
  caption: "",
};
