import { useQuery } from "react-query";

const fetchGameData = async () => {
  const res = await fetch("https://dummyapi.io/data/game");
  return res.json();
};

const useGameData = () => {
  return useQuery("gameData", fetchGameData, {
    staleTime: 300000, // Cache for 5 minutes
  });
};

export default useGameData;
