import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CareerContextType {
  selectedClass: number | null;
  setSelectedClass: (classLevel: number) => void;
  selectedCareer: string | null;
  setSelectedCareer: (careerId: string) => void;
  bookmarkedCareers: string[];
  toggleBookmark: (careerId: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [bookmarkedCareers, setBookmarkedCareers] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleBookmark = (careerId: string) => {
    setBookmarkedCareers((prev) =>
      prev.includes(careerId) ? prev.filter((id) => id !== careerId) : [...prev, careerId]
    );
  };

  return (
    <CareerContext.Provider
      value={{
        selectedClass,
        setSelectedClass,
        selectedCareer,
        setSelectedCareer,
        bookmarkedCareers,
        toggleBookmark,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error('useCareer must be used within CareerProvider');
  }
  return context;
};
