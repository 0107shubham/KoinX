// // import { useContext, useState, useRef, useEffect } from "react";
// // import { HoldingsContext } from "./HoldingsProvider";
// // import holdingsData from "./holdingsData";

// // const formatNumber = (num) => {
// //   if (Math.abs(num) >= 1000000) {
// //     return `${(num / 1000000).toFixed(2)}M`;
// //   } else if (Math.abs(num) >= 1000) {
// //     return `${(num / 1000).toFixed(2)}K`;
// //   }
// //   return num.toFixed(2);
// // };

// // const HoldingsTable = () => {
// //   const { selectedHoldings, setSelectedHoldings, updateCapitalGains } =
// //     useContext(HoldingsContext);
// //   const [showAll, setShowAll] = useState(false);
// //   const displayedData = showAll ? holdingsData : holdingsData.slice(0, 4);
// //   const selectAllRef = useRef(null);

// //   // Update "Select All" checkbox state
// //   useEffect(() => {
// //     if (selectAllRef.current) {
// //       const allSelected =
// //         selectedHoldings.length === holdingsData.length &&
// //         holdingsData.length > 0;
// //       const noneSelected = selectedHoldings.length === 0;
// //       selectAllRef.current.checked = allSelected;
// //       selectAllRef.current.indeterminate = !allSelected && !noneSelected;
// //     }
// //   }, [selectedHoldings, holdingsData.length]);

// //   const handleSelectAll = (e) => {
// //     if (e.target.checked) {
// //       const allCoins = holdingsData.map((h) => h.coin);
// //       setSelectedHoldings(allCoins);
// //       updateCapitalGains(allCoins);
// //     } else {
// //       setSelectedHoldings([]);
// //       updateCapitalGains([]);
// //     }
// //   };

// //   const handleSelect = (coin) => {
// //     const updated = selectedHoldings.includes(coin)
// //       ? selectedHoldings.filter((c) => c !== coin)
// //       : [...selectedHoldings, coin];
// //     setSelectedHoldings(updated);
// //     updateCapitalGains(updated);
// //   };

// //   return (
// //     <div className="bg-[#171A26] rounded-lg shadow px-4 py-6 mb-6">
// //       <h3 className="text-xl font-semibold p-4 text-white">Holdings</h3>
// //       <div className="overflow-x-auto custom-scrollbar">
// //         <table className="w-full min-w-[800px] text-white">
// //           <thead>
// //             <tr className="bg-black">
// //               <th className="p-4 text-left">
// //                 <label className="relative flex items-center cursor-pointer">
// //                   <input
// //                     type="checkbox"
// //                     ref={selectAllRef}
// //                     onChange={handleSelectAll}
// //                     className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-500 checked:border-blue-600"
// //                   />
// //                   <svg
// //                     className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block peer-indeterminate:hidden pointer-events-none"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M5 13l4 4L19 7"
// //                     />
// //                   </svg>
// //                   <svg
// //                     className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-indeterminate:block pointer-events-none"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="3"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M3 12h18"
// //                     />
// //                   </svg>
// //                 </label>
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Asset
// //               </th>
// //               <th className="p-4 text-left flex flex-col items-end">
// //                 <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                   Holdings
// //                 </span>
// //                 <span className="font-medium text-[10px] md:text-[12px] leading-3 md:leading-4 text-right align-middle text-[#A9AFC5] whitespace-nowrap">
// //                   Current Market Value
// //                 </span>
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Avg Buy Price
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Current Price
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Short-Term Gain
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Long-Term Gain
// //               </th>
// //               <th className="p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                 Amount to Sell
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {displayedData.map((holding) => (
// //               <tr
// //                 key={holding.coin}
// //                 className={`border-t border-[#3A3F54] ${
// //                   selectedHoldings.includes(holding.coin)
// //                     ? "bg-[#121D3A]"
// //                     : "hover:bg-gray-800"
// //                 }`}
// //               >
// //                 <td className="p-4">
// //                   <label className="relative flex items-center cursor-pointer">
// //                     <input
// //                       type="checkbox"
// //                       checked={selectedHoldings.includes(holding.coin)}
// //                       onChange={() => handleSelect(holding.coin)}
// //                       className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-600 checked:border-blue-600"
// //                     />
// //                     <svg
// //                       className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block pointer-events-none"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       strokeWidth="3"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         d="M5 13l4 4L19 7"
// //                       />
// //                     </svg>
// //                   </label>
// //                 </td>
// //                 <td className="p-4 flex flex-col">
// //                   <div className="flex items-center gap-1">
// //                     <img
// //                       src={holding.logo}
// //                       alt={holding.coin}
// //                       className="w-[26px] h-[21px] mr-2"
// //                     />
// //                     <div className="flex flex-col items-start">
// //                       <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-[#FFFFFF] whitespace-nowrap">
// //                         {holding.coinName} ({holding.coin})
// //                       </span>
// //                       <span className="font-medium text-xs md:text-[14px] leading-3 md:leading-[20px] tracking-[0.1px] text-[#FFFFFF] whitespace-nowrap">
// //                         {holding.coin}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </td>

// //                 <td className="p-4 text-end">
// //                   <div className="relative group flex flex-col items-end">
// //                     <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-[#FFFFFF] whitespace-nowrap">
// //                       {holding.totalHolding.toFixed(3)} {holding.coin}
// //                     </span>
// //                     <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
// //                       ${holding.averageBuyPrice.toFixed(2)}/ {holding.coin}
// //                     </span>

// //                     {/* Tooltip shown on hover */}
// //                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
// //                       {holding.totalHolding}
// //                       {/* Tooltip tail */}
// //                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
// //                     </div>
// //                   </div>
// //                 </td>

// //                 <td className="p-4 text-center">
// //                   <div className="relative group ">
// //                     <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                       ${formatNumber(holding.averageBuyPrice)}
// //                     </span>
// //                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
// //                       ${holding.averageBuyPrice.toFixed(2)}
// //                       {/* Tooltip tail */}
// //                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="p-4 text-center">
// //                   <div className="relative group">
// //                     <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
// //                       ${formatNumber(holding.currentPrice)}
// //                     </span>

// //                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
// //                       {holding.currentPrice.toFixed(2)}
// //                       {/* Tooltip tail */}
// //                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="p-4 text-center flex justify-center ">
// //                   <div className="relative group w-fit flex flex-col  items-end">
// //                     <span
// //                       className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
// //                         holding.stcg.gain >= 0
// //                           ? "text-[#3FF1B8]"
// //                           : "text-[#FF5A6E]"
// //                       }`}
// //                     >
// //                       ${formatNumber(holding.stcg.gain)}
// //                     </span>
// //                     <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
// //                       {holding.stcg.balance.toFixed(3)} {holding.coin}
// //                     </span>

// //                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
// //                       ${holding.stcg.gain.toFixed(2)}
// //                       {/* Tooltip tail */}
// //                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="pl-4 text-center w-full ">
// //                   <div className="relative group flex flex-col items-end  w-fit mx-auto">
// //                     <span
// //                       className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
// //                         holding.ltcg.gain >= 0
// //                           ? "text-[#3FF1B8]"
// //                           : "text-[#FF5A6E]"
// //                       }`}
// //                     >
// //                       ${formatNumber(holding.ltcg.gain)}
// //                     </span>
// //                     <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
// //                       {holding.ltcg.balance.toFixed(3)} {holding.coin}
// //                     </span>
// //                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
// //                       ${holding.ltcg.gain.toFixed(2)}
// //                       {/* Tooltip tail */}
// //                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
// //                     </div>
// //                   </div>
// //                 </td>
// //                 <td className="p-4 text-end">
// //                   <div className="relative group">
// //                     <span className="text-sm md:text-[16px] leading-4 md:leading-[24px] font-medium text-[#FFFFFF] whitespace-nowrap">
// //                       {selectedHoldings.includes(holding.coin)
// //                         ? `${holding.totalHolding.toFixed(3)} ${holding.coin}`
// //                         : "-"}
// //                     </span>
// //                     {selectedHoldings.includes(holding.coin) && (
// //                       <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded p-2">
// //                         {holding.totalHolding}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //       <button
// //         className="m-4 text-blue-600 underline text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap"
// //         onClick={() => setShowAll(!showAll)}
// //       >
// //         {showAll ? "Show Less" : "View All"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default HoldingsTable;

// import { useContext, useState, useRef, useEffect } from "react";
// import { HoldingsContext } from "./HoldingsProvider";
// import holdingsData from "./holdingsData";

// const formatNumber = (num) => {
//   if (Math.abs(num) >= 1000000) {
//     return `${(num / 1000000).toFixed(2)}M`;
//   } else if (Math.abs(num) >= 1000) {
//     return `${(num / 1000).toFixed(2)}K`;
//   }
//   return num.toFixed(2);
// };

// const HoldingsTable = () => {
//   const { selectedHoldings, setSelectedHoldings, updateCapitalGains } =
//     useContext(HoldingsContext);
//   const [showAll, setShowAll] = useState(false);
//   const [sortConfig, setSortConfig] = useState({
//     key: null,
//     direction: "asc",
//   });
//   const selectAllRef = useRef(null);

//   // Sort data based on sortConfig
//   const sortedData = [...holdingsData].sort((a, b) => {
//     if (!sortConfig.key) return 0;

//     const valueA = sortConfig.key === "stcg" ? a.stcg.gain : a.ltcg.gain;
//     const valueB = sortConfig.key === "stcg" ? b.stcg.gain : b.ltcg.gain;

//     if (sortConfig.direction === "asc") {
//       return valueA - valueB;
//     }
//     return valueB - valueA;
//   });

//   const displayedData = showAll ? sortedData : sortedData.slice(0, 4);

//   // Update "Select All" checkbox state
//   useEffect(() => {
//     if (selectAllRef.current) {
//       const allSelected =
//         selectedHoldings.length === holdingsData.length &&
//         holdingsData.length > 0;
//       const noneSelected = selectedHoldings.length === 0;
//       selectAllRef.current.checked = allSelected;
//       selectAllRef.current.indeterminate = !allSelected && !noneSelected;
//     }
//   }, [selectedHoldings, holdingsData.length]);

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const allCoins = holdingsData.map((h) => h.coin);
//       setSelectedHoldings(allCoins);
//       updateCapitalGains(allCoins);
//     } else {
//       setSelectedHoldings([]);
//       updateCapitalGains([]);
//     }
//   };

//   const handleSelect = (coin) => {
//     const updated = selectedHoldings.includes(coin)
//       ? selectedHoldings.filter((c) => c !== coin)
//       : [...selectedHoldings, coin];
//     setSelectedHoldings(updated);
//     updateCapitalGains(updated);
//   };

//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   return (
//     <div className="bg-[#171A26] rounded-lg shadow px-4 py-6 mb-6">
//       <h3 className="text-xl font-semibold p-4 text-white">Holdings</h3>
//       <div className="overflow-x-auto">
//         <table className="w-fit text-white table-fixed">
//           <thead>
//             <tr className="bg-black">
//               <th className="w-[50px] p-4 text-left">
//                 <label className="relative flex items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     ref={selectAllRef}
//                     onChange={handleSelectAll}
//                     className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-500 checked:border-blue-600"
//                   />
//                   <svg
//                     className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block peer-indeterminate:hidden pointer-events-none"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <svg
//                     className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-indeterminate:block pointer-events-none"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 12h18"
//                     />
//                   </svg>
//                 </label>
//               </th>
//               <th className="w-[300px] p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                 Asset
//               </th>
//               <th className="w-[205px] p-4 text-left flex flex-col items-end">
//                 <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                   Holdings
//                 </span>
//                 <span className="font-medium  text-[10px] md:text-[12px] leading-3 md:leading-4 text-right align-middle text-[#A9AFC5] whitespace-nowrap">
//                   Current Market Value
//                 </span>
//               </th>
//               <th className="w-[140px]  text-end  p-4  text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                 Avg Buy Price
//               </th>
//               <th className="w-[140px] p-4  text-end text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                 Current Price
//               </th>
//               <th
//                 className="w-[180px] p-2 text-end  text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap cursor-pointer"
//                 onClick={() => handleSort("stcg")}
//               >
//                 <div className="flex justify-end items-center gap-1">
//                   {sortConfig.key === "stcg" && (
//                     <span className=" h-5">
//                       <svg
//                         className={`w-4 h-4 transform ${
//                           sortConfig.direction === "desc" ? "rotate-180" : ""
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 5l-7 7h14l-7-7z" />
//                       </svg>
//                     </span>
//                   )}
//                   Short-Term Gain
//                 </div>
//               </th>
//               <th
//                 className="w-[180px] p-4 text-end text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap cursor-pointer"
//                 onClick={() => handleSort("ltcg")}
//               >
//                 <div className="flex justify-end items-center gap-2">
//                   {sortConfig.key === "ltcg" && (
//                     <span className=" h-5">
//                       <svg
//                         className={`w-4 h-4 transform ${
//                           sortConfig.direction === "desc" ? "rotate-180" : ""
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 5l-7 7h14l-7-7z" />
//                       </svg>
//                     </span>
//                   )}
//                   Long-Term Gain
//                 </div>
//               </th>
//               <th className="w-[160px] p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                 Amount to Sell
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedData.map((holding) => (
//               <tr
//                 key={holding.coin}
//                 className={`border-t border-[#3A3F54] ${
//                   selectedHoldings.includes(holding.coin)
//                     ? "bg-[#121D3A]"
//                     : "hover:bg-gray-800"
//                 }`}
//               >
//                 <td className="p-4">
//                   <label className="relative flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={selectedHoldings.includes(holding.coin)}
//                       onChange={() => handleSelect(holding.coin)}
//                       className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-600 checked:border-blue-600"
//                     />
//                     <svg
//                       className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block pointer-events-none"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="3"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </label>
//                 </td>
//                 <td className="p-4 flex flex-col ">
//                   <div className="flex flex-col items-start relative group">
//                     <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-white whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
//                       {`${holding.coinName} (${holding.coin})`.length > 20
//                         ? `${holding.coinName} (${holding.coin})`.slice(0, 20) +
//                           "..."
//                         : `${holding.coinName} (${holding.coin})`}
//                     </span>

//                     {/* Tooltip */}
//                     {`${holding.coinName} (${holding.coin})`.length > 20 && (
//                       <div className="absolute bottom-full mb-2 left-0 z-10 hidden group-hover:flex flex-col items-start">
//                         <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded shadow-md max-w-xs whitespace-nowrap">
//                           {`${holding.coinName} (${holding.coin})`}
//                         </div>
//                         {/* Triangle */}
//                         <div className="w-2 h-2 bg-white rotate-45 ml-3 -mt-1 shadow-md"></div>
//                       </div>
//                     )}

//                     <span className="font-medium text-xs md:text-[14px] leading-3 md:leading-[20px] tracking-[0.1px] text-white whitespace-nowrap">
//                       {holding.coin}
//                     </span>
//                   </div>
//                 </td>
//                 <td className="p-4 text-end ">
//                   <div className="relative group flex flex-col items-end">
//                     <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-[#FFFFFF] whitespace-nowrap">
//                       {holding.totalHolding.toFixed(3)} {holding.coin}
//                     </span>
//                     <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
//                       ${holding.averageBuyPrice.toFixed(2)}/ {holding.coin}
//                     </span>
//                     <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
//                       {holding.totalHolding}
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4 text-end">
//                   <div className="relative group">
//                     <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                       ${formatNumber(holding.averageBuyPrice)}
//                     </span>

//                     <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
//                       <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
//                         ${holding.averageBuyPrice.toFixed(2)}
//                       </div>
//                       {/* Triangle Tip */}
//                       <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4 text-end">
//                   <div className="relative group">
//                     <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
//                       ${formatNumber(holding.currentPrice)}
//                     </span>

//                     <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
//                       <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
//                         {holding.currentPrice.toFixed(2)}
//                       </div>
//                       {/* Triangle Tip */}
//                       <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
//                     </div>
//                   </div>
//                 </td>
//                 <div className="relative group flex flex-col items-end">
//                   {/* Main Gain Value */}
//                   <span
//                     className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
//                       holding.stcg.gain >= 0
//                         ? "text-[#3FF1B8]"
//                         : "text-[#FF5A6E]"
//                     }`}
//                   >
//                     ${formatNumber(holding.stcg.gain)}
//                   </span>

//                   {/* Tooltip - visible only if gain is more than 5 characters (optional) */}
//                   <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
//                     <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
//                       ${holding.stcg.gain.toFixed(6)}
//                     </div>
//                     {/* Triangle Tip */}
//                     <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
//                   </div>

//                   {/* Balance */}
//                   <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
//                     {holding.stcg.balance.toFixed(3)} {holding.coin}
//                   </span>
//                 </div>

//                 <td className="p-4 text-end ">
//                   <div className="relative group flex flex-col items-end  ">
//                     <span
//                       className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
//                         holding.ltcg.gain >= 0
//                           ? "text-[#3FF1B8]"
//                           : "text-[#FF5A6E]"
//                       }`}
//                     >
//                       ${formatNumber(holding.ltcg.gain)}
//                     </span>
//                     <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
//                       {holding.ltcg.balance.toFixed(3)} {holding.coin}
//                     </span>

//                     <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
//                       <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
//                         ${holding.ltcg.gain.toFixed(2)}
//                       </div>
//                       {/* Triangle Tip */}
//                       <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-4 text-end">
//                   <div className="relative group">
//                     <span className="text-sm md:text-[16px] leading-4 md:leading-[24px] font-medium text-[#FFFFFF] whitespace-nowrap">
//                       {selectedHoldings.includes(holding.coin)
//                         ? `${holding.totalHolding.toFixed(3)} ${holding.coin}`
//                         : "-"}
//                     </span>
//                     {selectedHoldings.includes(holding.coin) && (
//                       <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
//                         <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
//                           {holding.totalHolding}
//                         </div>
//                         {/* Triangle Tip */}
//                         <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
//                       </div>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <button
//         className="m-4 text-blue-600 underline text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap"
//         onClick={() => setShowAll(!showAll)}
//       >
//         {showAll ? "Show Less" : "View All"}
//       </button>
//     </div>
//   );
// };

// export default HoldingsTable;

import { useContext, useState, useRef, useEffect } from "react";
import { HoldingsContext } from "./HoldingsProvider";

const formatNumber = (num) => {
  if (Math.abs(num) >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else if (Math.abs(num) >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toFixed(2);
};

const HoldingsTable = () => {
  const { selectedHoldings, setSelectedHoldings, updateCapitalGains } =
    useContext(HoldingsContext);
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectAllRef = useRef(null);

  // Fetch data from serverless function
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/holdings.json");
        if (!response.ok) {
          throw new Error("Failed to fetch holdings data");
        }

        console.log("Response:", response);

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sort data based on sortConfig
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = sortConfig.key === "stcg" ? a.stcg.gain : a.ltcg.gain;
    const valueB = sortConfig.key === "stcg" ? b.stcg.gain : b.ltcg.gain;

    if (sortConfig.direction === "asc") {
      return valueA - valueB;
    }
    return valueB - valueA;
  });

  const displayedData = showAll ? sortedData : sortedData.slice(0, 4);

  // Update "Select All" checkbox state
  useEffect(() => {
    if (selectAllRef.current) {
      const allSelected =
        selectedHoldings.length === data.length && data.length > 0;
      const noneSelected = selectedHoldings.length === 0;
      selectAllRef.current.checked = allSelected;
      selectAllRef.current.indeterminate = !allSelected && !noneSelected;
    }
  }, [selectedHoldings, data.length]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allCoins = data.map((h) => h.coin);
      console.log("====================================");
      console.log("allCoins:", allCoins);
      console.log("====================================");
      setSelectedHoldings(allCoins);
      updateCapitalGains(allCoins);
    } else {
      setSelectedHoldings([]);
      updateCapitalGains([]);
    }
  };

  const handleSelect = (coin) => {
    const updated = selectedHoldings.includes(coin)
      ? selectedHoldings.filter((c) => c !== coin)
      : [...selectedHoldings, coin];

    console.log("====================================");
    console.log("updated:", updated);
    console.log("====================================");
    setSelectedHoldings(updated);
    updateCapitalGains(updated);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Loader component
  const Loader = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
    </div>
  );

  // Error component
  const ErrorMessage = ({ message }) => (
    <div className="text-red-500 text-center p-4">
      <p>Error: {message}</p>
      <button
        className="mt-2 text-blue-600 underline"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );

  if (error) {
    return <ErrorMessage message={error} />;
  }

  console.log("====================================");
  console.log("displayedData:", displayedData);
  console.log("====================================");

  return (
    <div className="bg-[#171A26] rounded-lg shadow px-4 py-6 mb-6">
      <h3 className="text-xl font-semibold p-4 text-white">Holdings</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] table-fixed text-white">
              <thead>
                <tr className="bg-black">
                  <th className="w-[50px] p-4 text-left">
                    <label className="relative flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        ref={selectAllRef}
                        onChange={handleSelectAll}
                        className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-500 checked:border-blue-600"
                      />
                      <svg
                        className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block peer-indeterminate:hidden pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <svg
                        className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-indeterminate:block pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12h18"
                        />
                      </svg>
                    </label>
                  </th>
                  <th className="w-[300px] p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                    Asset
                  </th>
                  <th className="w-[205px] p-4 text-left">
                    <div className="flex flex-col items-end">
                      <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                        Holdings
                      </span>
                      <span className="font-medium text-[10px] md:text-[12px] leading-3 md:leading-4 text-right align-middle text-[#A9AFC5] whitespace-nowrap">
                        Current Market Value
                      </span>
                    </div>
                  </th>

                  <th className="w-[140px] text-end p-4 text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                    Avg Buy Price
                  </th>
                  <th className="w-[140px] p-4 text-end text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                    Current Price
                  </th>
                  <th
                    className="w-[180px] p-2 text-end text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("stcg")}
                  >
                    <div className="flex justify-end items-center gap-1">
                      {sortConfig.key === "stcg" && (
                        <span className="h-5">
                          <svg
                            className={`w-4 h-4 transform ${
                              sortConfig.direction === "desc"
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 5l-7 7h14l-7-7z" />
                          </svg>
                        </span>
                      )}
                      Short-Term Gain
                    </div>
                  </th>
                  <th
                    className="w-[180px] p-4 text-end text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("ltcg")}
                  >
                    <div className="flex justify-end items-center gap-2">
                      {sortConfig.key === "ltcg" && (
                        <span className="h-5">
                          <svg
                            className={`w-4 h-4 transform ${
                              sortConfig.direction === "desc"
                                ? "rotate-180"
                                : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 5l-7 7h14l-7-7z" />
                          </svg>
                        </span>
                      )}
                      Long-Term Gain
                    </div>
                  </th>
                  <th className="w-[160px] p-4 text-left text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                    Amount to Sell
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((holding) => (
                  <tr
                    key={holding.coin}
                    className={`border-t border-[#3A3F54] ${
                      selectedHoldings.includes(holding.coin)
                        ? "bg-[#121D3A]"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <td className="p-4">
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedHoldings.includes(holding.coin)}
                          onChange={() => handleSelect(holding.coin)}
                          className="peer appearance-none h-4 w-4 rounded border border-[#3A3F54] bg-[#171A26] checked:bg-blue-600 checked:border-blue-600"
                        />
                        <svg
                          className="absolute w-3 h-3 text-white left-[3px] top-[2px] hidden peer-checked:block pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </label>
                    </td>
                    <td className="p-4 text-left ">
                      <div className="flex flex-col items-start relative group">
                        <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-white whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
                          {`${holding.coinName} (${holding.coin})`.length > 20
                            ? `${holding.coinName} (${holding.coin})`.slice(
                                0,
                                20
                              ) + "..."
                            : `${holding.coinName} (${holding.coin})`}
                        </span>
                        {`${holding.coinName} (${holding.coin})`.length >
                          20 && (
                          <div className="absolute bottom-full mb-2 left-0 z-10 hidden group-hover:flex flex-col items-start">
                            <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded shadow-md max-w-xs whitespace-nowrap">
                              {`${holding.coinName} (${holding.coin})`}
                            </div>
                            <div className="w-2 h-2 bg-white rotate-45 ml-3 -mt-1 shadow-md"></div>
                          </div>
                        )}
                        <span className="font-medium text-xs md:text-[14px] leading-3 md:leading-[20px] tracking-[0.1px] text-white whitespace-nowrap">
                          {holding.coin}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group flex flex-col items-end">
                        <span className="font-medium text-sm md:text-[16px] leading-4 md:leading-[22px] tracking-[0.1px] text-[#FFFFFF] whitespace-nowrap">
                          {holding.totalHolding.toFixed(3)} {holding.coin}
                        </span>
                        <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
                          ${holding.averageBuyPrice.toFixed(2)}/ {holding.coin}
                        </span>
                        <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-fit text-center shadow-lg z-10">
                          {holding.totalHolding}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group">
                        <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                          ${formatNumber(holding.averageBuyPrice)}
                        </span>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
                          <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
                            ${holding.averageBuyPrice.toFixed(2)}
                          </div>
                          <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group">
                        <span className="text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap">
                          ${formatNumber(holding.currentPrice)}
                        </span>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
                          <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
                            {holding.currentPrice.toFixed(2)}
                          </div>
                          <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group flex flex-col items-end">
                        <span
                          className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
                            holding.stcg.gain >= 0
                              ? "text-[#3FF1B8]"
                              : "text-[#FF5A6E]"
                          }`}
                        >
                          ${formatNumber(holding.stcg.gain)}
                        </span>
                        <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
                          {holding.stcg.balance.toFixed(3)} {holding.coin}
                        </span>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
                          <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
                            ${holding.stcg.gain.toFixed(6)}
                          </div>
                          <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group flex flex-col items-end">
                        <span
                          className={`text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap ${
                            holding.ltcg.gain >= 0
                              ? "text-[#3FF1B8]"
                              : "text-[#FF5A6E]"
                          }`}
                        >
                          ${formatNumber(holding.ltcg.gain)}
                        </span>
                        <span className="text-[10px] md:text-[12px] leading-3 md:leading-[16px] font-medium text-[#A9AFC5] whitespace-nowrap">
                          {holding.ltcg.balance.toFixed(3)} {holding.coin}
                        </span>
                        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
                          <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
                            ${holding.ltcg.gain.toFixed(2)}
                          </div>
                          <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-end">
                      <div className="relative group">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-[24px] font-medium text-[#FFFFFF] whitespace-nowrap">
                          {selectedHoldings.includes(holding.coin)
                            ? `${holding.totalHolding.toFixed(3)} ${
                                holding.coin
                              }`
                            : "-"}
                        </span>
                        {selectedHoldings.includes(holding.coin) && (
                          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end z-10">
                            <div className="bg-white text-black text-xs font-medium px-3 py-1 rounded shadow-md whitespace-nowrap">
                              {holding.totalHolding}
                            </div>
                            <div className="w-2 h-2 bg-white rotate-45 mt-[-4px] shadow-md self-center"></div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="m-4 text-blue-600 underline text-sm md:text-base leading-4 md:leading-6 whitespace-nowrap"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </>
      )}
    </div>
  );
};

export default HoldingsTable;
