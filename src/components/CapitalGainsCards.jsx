import { useContext, useState, useEffect, useRef } from "react";
import { HoldingsContext } from "./HoldingsProvider";
import celebrate from "../../public/celebrate.png";

const CapitalGainsCards = () => {
  const { capitalGains, initialCapitalGains } = useContext(HoldingsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  const prevCapitalGainsRef = useRef();

  // Pre-harvesting variables
  const preNetstProfit = initialCapitalGains.stcg.profits;
  const preNetltProfit = initialCapitalGains.ltcg.profits;
  const preNetstLoss = initialCapitalGains.stcg.losses;
  const preNetltLoss = initialCapitalGains.ltcg.losses;
  const newPrest = preNetstProfit - preNetstLoss;
  const newPrelt = preNetltProfit - preNetltLoss;
  const preRealised = newPrest + newPrelt;
  const preTotalLosses = preNetstLoss + preNetltLoss;

  // Post-harvesting variables
  const postNetstProfit = capitalGains.stcg.profits;
  const postNetltProfit = capitalGains.ltcg.profits;
  const postNetstLoss = capitalGains.stcg.losses;
  const postNetltLoss = capitalGains.ltcg.losses; // Fixed typo
  const newPostst = postNetstProfit - postNetstLoss;
  const newPostlt = postNetltProfit - postNetltLoss;
  const postRealised = newPostst + newPostlt;
  const postTotalLosses = postNetstLoss + postNetltLoss;

  const savings = preRealised < postRealised ? postRealised - preRealised : 0;
  const lossesReduced = postTotalLosses < preTotalLosses;
  const lossReductionAmount = preTotalLosses - postTotalLosses;

  // Detect changes in capitalGains
  useEffect(() => {
    if (prevCapitalGainsRef.current) {
      const hasChanged =
        JSON.stringify(prevCapitalGainsRef.current) !==
        JSON.stringify(capitalGains);
      setShowMessage(hasChanged || savings > 0 || lossesReduced);
    } else {
      setShowMessage(savings > 0 || lossesReduced);
    }
    prevCapitalGainsRef.current = capitalGains;
  }, [capitalGains, savings, lossesReduced]);

  // Fetch capital gains data (for debugging)
  useEffect(() => {
    const fetchCapitalGains = async () => {
      try {
        const res = await fetch("/capitalGains.json");
        if (!res.ok) throw new Error("Failed to fetch capital gains");
        const data = await res.json();
        console.log("Fetched capitalGains:", data);
      } catch (err) {
        console.error("Error fetching capital gains:", err);
        setError("Failed to load capital gains data");
      } finally {
        setLoading(false);
      }
    };

    fetchCapitalGains();
  }, []);

  // Debug calculations
  console.log({
    preRealised,
    postRealised,
    savings,
    preTotalLosses,
    postTotalLosses,
    lossesReduced,
    lossReductionAmount,
    showMessage,
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
      {/* Pre-Harvesting Card */}
      <div className="bg-[#171A26] text-white p-6 rounded-lg flex-1 mb-6 md:mb-0">
        <h3 className="font-inter font-semibold text-base md:text-[18px] sm:md:text-[20px] leading-[26px] align-middle">
          Pre-Harvesting
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]"></th>
              <th className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Short-Term
              </th>
              <th className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Long-Term
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Profits
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${preNetstProfit.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${preNetltProfit.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Losses
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                -${preNetstLoss.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                -${preNetltLoss.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Net Gains
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${newPrest.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${newPrelt.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-base md:text-[20px] leading-[26px] font-inter font-bold text-white mt-4">
          Realised Capital Gains:
          <span className="text-xl md:text-[28px] leading-[36px] font-inter font-bold text-white mt-4">
            {" "}
            ${preRealised.toFixed(2)}
          </span>
        </p>
      </div>

      {/* After-Harvesting Card */}
      <div className="bg-gradient-to-r from-[#3C9AFF] to-[#0066FE] shadow text-white p-6 rounded-lg flex-1">
        <h3 className="font-inter font-semibold text-base md:text-[18px] sm:md:text-[20px] leading-[26px] align-middle">
          After-Harvesting
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2"></th>
              <th className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Short-Term
              </th>
              <th className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Long-Term
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Profits
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${postNetstProfit.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${postNetltProfit.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Losses
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                -${postNetstLoss.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                -${postNetltLoss.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                Net Gains
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${newPostst.toFixed(2)}
              </td>
              <td className="p-2 font-inter font-medium text-sm md:text-[16px] leading-[20px]">
                ${newPostlt.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-base md:text-[20px] leading-[26px] font-inter font-bold text-white mt-4">
          Realised Capital Gains:
          <span className="text-xl md:text-[28px] leading-[36px] font-inter font-bold text-white mt-4">
            {" "}
            ${postRealised.toFixed(2)}
          </span>
        </p>

        <div className=" h-[30px] ">
          {" "}
          {true && savings > 0 ? (
            <div className="flex items-center space-x-2 ">
              <img src={celebrate} alt="celebrate" className="h-5 w-5" />
              <p className="text-sm md:text-[16px] leading-[20px] font-inter font-medium text-white">
                {savings > 0
                  ? `You're going to save $${savings.toFixed(2)}!`
                  : `You've reduced losses by $${lossReductionAmount.toFixed(
                      2
                    )}!`}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        table {
          border-collapse: collapse;
        }
        th,
        td {
          text-align: left;
          font-size: 0.9rem;
        }
        th {
          font-weight: 600;
        }
        td {
          color: #ffffff;
        }
        .bg-gray-800 tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .bg-blue-600 tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default CapitalGainsCards;
