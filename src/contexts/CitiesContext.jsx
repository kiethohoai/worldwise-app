import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000";

export const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error while loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.log("There was an error while loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <CitiesContext.Provider
        value={{
          cities: cities,
          isLoading: isLoading,
          currentCity,
          getCity,
        }}
      >
        {children}
      </CitiesContext.Provider>
    </>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("CitiesContext was used outside the Cities Provider!");
  return context;
}
