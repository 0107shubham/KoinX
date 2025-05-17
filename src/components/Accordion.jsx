import { useState } from "react";
import faq from "../assets/faq.svg"; // Adjust the path as necessary

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#121D3A] border-[#4A78FF] border-2 rounded-lg shadow mb-3">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <img src={faq} alt="faq" className="h-5" />
          <h3 className="text-base sm:text-lg text-white font-semibold">
            Important Notes & Disclaimers
          </h3>
        </div>
        <svg
          className={`w-6 h-6 transform text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <ul className="list-disc pl-5 text-white font-inter font-medium text-sm leading-[20px] sm:text-base sm:leading-[22px] tracking-[0.1px]">
            <li className="mb-2 last:mb-0">
              Tax-loss harvesting is currently not allowed under Indian tax
              regulations. Please consult your tax advisor before making any
              decisions.
            </li>
            <li className="mb-2 last:mb-0">
              Tax harvesting does not apply to derivatives or futures. These are
              handled separately as business income under tax rules.
            </li>
            <li className="mb-2 last:mb-0">
              Price and market value data is fetched from Coingecko, not from
              individual exchanges. As a result, values may slightly differ from
              the ones on your exchange.
            </li>
            <li className="mb-2 last:mb-0">
              Some countries do not have a short-term / long-term bifurcation.
              For now, we are calculating everything as long-term.
            </li>
            <li className="mb-2 last:mb-0">
              Only realized losses are considered for harvesting. Unrealized
              losses in held assets are not counted.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
