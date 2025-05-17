const TaxHarvesting = () => (
  <div className="text-white p-6 rounded-lg mb-6">
    <div className="flex flex-row items-center space-x-2 sm:space-x-4">
      <h2 className="text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px] text-[#FFFFFF] font-bold">
        Tax Harvesting
      </h2>
      <div className="relative group">
        <p className="text-[12px] leading-[16px] sm:text-[14px] sm:leading-[20px] text-[#4A78FF] font-medium font-[inter] underline cursor-pointer">
          How it works?
        </p>
        <div className="absolute hidden group-hover:block top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded p-2 w-64 text-center shadow">
          <p className="font-normal text-[10px] leading-[14px] sm:text-[12px] sm:leading-4 underline-offset-0 decoration-[0.5px]">
            Lorem ipsum dolor sit amet consectetur. Euismod id posuere nibh
            semper mattis.
            <span className="text-blue-600 underline cursor-pointer ml-2">
              Know More
            </span>
          </p>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-white"></div>
        </div>
      </div>
    </div>
  </div>
);

export default TaxHarvesting;
