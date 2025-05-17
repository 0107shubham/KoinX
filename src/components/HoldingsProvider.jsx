import { createContext, useState, useEffect } from "react";

export const HoldingsContext = createContext();

const HoldingsProvider = ({ children }) => {
  const [selectedHoldings, setSelectedHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState({
    stcg: { profits: 0, losses: 0 },
    ltcg: { profits: 0, losses: 0 },
  });
  const [initialCapitalGains, setInitialCapitalGains] = useState({
    stcg: { profits: 0, losses: 0 },
    ltcg: { profits: 0, losses: 0 },
  });
  const [holdingsData, setHoldingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch holdings and capital gains data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch holdings data
        const holdingsResponse = await fetch("/holdings.json");
        if (!holdingsResponse.ok) {
          throw new Error("Failed to fetch holdings data");
        }
        const holdingsResult = await holdingsResponse.json();
        setHoldingsData(holdingsResult);

        // Fetch capital gains data
        const gainsResponse = await fetch("/capitalGains.json");
        if (!gainsResponse.ok) {
          throw new Error("Failed to fetch capital gains");
        }
        const gainsData = await gainsResponse.json();
        const initialGains = gainsData.capitalGains || {
          stcg: { profits: 0, losses: 0 },
          ltcg: { profits: 0, losses: 0 },
        };
        setCapitalGains(initialGains);
        setInitialCapitalGains(initialGains); // Store initial gains
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update capitalGains based on selectedHoldings
  const updateCapitalGains = (selected) => {
    // Start with initialCapitalGains
    let newGains = {
      stcg: {
        profits: initialCapitalGains.stcg.profits,
        losses: initialCapitalGains.stcg.losses,
      },
      ltcg: {
        profits: initialCapitalGains.ltcg.profits,
        losses: initialCapitalGains.ltcg.losses,
      },
    };

    // Add gains/losses for selected holdings
    selected.forEach((coin) => {
      const holding = holdingsData.find((h) => h.coin === coin);
      if (holding) {
        // Add STCG profits/losses
        if (holding.stcg.gain > 0) {
          newGains.stcg.profits += holding.stcg.gain;
        } else {
          newGains.stcg.losses += -holding.stcg.gain;
        }
        // Add LTCG profits/losses
        if (holding.ltcg.gain > 0) {
          newGains.ltcg.profits += holding.ltcg.gain;
        } else {
          newGains.ltcg.losses += -holding.ltcg.gain;
        }
      }
    });

    setCapitalGains(newGains);
  };

  return (
    <HoldingsContext.Provider
      value={{
        selectedHoldings,
        setSelectedHoldings,
        capitalGains,
        updateCapitalGains,
        holdingsData,
        isLoading,
        error,
        initialCapitalGains,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  );
};

export default HoldingsProvider;
