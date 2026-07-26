'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CareerContextType {
  selectedClass: number | null;
  setSelectedClass: (classLevel: number) => void;
  selectedStream: string | null;
  setSelectedStream: (stream: string) => void;
  userProgress: {
    completedModules: string[];
    bookmarkedCareers: string[];
    savedScholarships: string[];
  };
  addCompletedModule: (module: string) => void;
  bookmarkCareer: (careerId: string) => void;
  saveScholarship: (scholarshipId: string) => void;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState({
    completedModules: [],
    bookmarkedCareers: [],
    savedScholarships: [],
  });

  const addCompletedModule = (module: string) => {
    setUserProgress((prev) => ({
      ...prev,
      completedModules: [...new Set([...prev.completedModules, module])],
    }));
  };

  const bookmarkCareer = (careerId: string) => {
    setUserProgress((prev) => ({
      ...prev,
      bookmarkedCareers: prev.bookmarkedCareers.includes(careerId)
        ? prev.bookmarkedCareers.filter((id) => id !== careerId)
        : [...prev.bookmarkedCareers, careerId],
    }));
  };

  const saveScholarship = (scholarshipId: string) => {
    setUserProgress((prev) => ({
      ...prev,
      savedScholarships: prev.savedScholarships.includes(scholarshipId)
        ? prev.savedScholarships.filter((id) => id !== scholarshipId)
        : [...prev.savedScholarships, scholarshipId],
    }));
  };

  return (
    <CareerContext.Provider
      value={{
        selectedClass,
        setSelectedClass,
        selectedStream,
        setSelectedStream,
        userProgress,
        addCompletedModule,
        bookmarkCareer,
        saveScholarship,
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
