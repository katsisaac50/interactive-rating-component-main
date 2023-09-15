import React, { createContext, useContext, useState } from 'react';

const RatingContext = createContext();

export function RatingProvider({ children }) {
  const [rating, setRating] = useState(null);

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
}

export function useRating() {
  const context = useContext(RatingContext);
  if (!context) {
    throw new Error('useRating must be used within a RatingProvider');
  }
  return context;
}
