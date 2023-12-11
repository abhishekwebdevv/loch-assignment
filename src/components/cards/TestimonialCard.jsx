import PropTypes from "prop-types";

export function TestimonialCard({ title, subtitle, content }) {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col gap-5 h-full mr-5">
      <div className="flex items-center gap-x-2">
        <p className="text-gray-900 font-semibold select-none">{title}</p>
        <p className="text-gray-400 font-medium text-xs select-none">
          {subtitle}
        </p>
      </div>

      <p className="font-medium select-none">{content}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
