import React, { createContext, useReducer } from 'react';

const initialState = {
  playerStats: [],
  gameModes: [],
  maps: [],
  trends: [],
};

const AnalyticsContext = createContext(initialState);

const analyticsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYER_STATS':
      return { ...state, playerStats: action.payload };
    case 'SET_GAME_MODES':
      return { ...state, gameModes: action.payload };
    case 'SET_MAPS':
      return { ...state, maps: action.payload };
    case 'SET_TRENDS':
      return { ...state, trends: action.payload };
    default:
      return state;
  }
};

const AnalyticsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(analyticsReducer, initialState);

  return (
    <AnalyticsContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext, AnalyticsProvider };
