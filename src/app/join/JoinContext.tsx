import { createContext, useState, useContext } from "react";

type JoinDataContextType = {
  joinData: any;
  setJoinData: React.Dispatch<React.SetStateAction<any>>;
};

const JoinDataContext = createContext<JoinDataContextType | undefined>(
  undefined,
);

export const JoinDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [joinData, setJoinData] = useState<any>({});
  console.log(joinData);
  return (
    <JoinDataContext.Provider value={{ joinData, setJoinData }}>
      {children}
    </JoinDataContext.Provider>
  );
};

export const useJoinData = () => {
  const context = useContext(JoinDataContext);
  if (context === undefined) {
    throw new Error("JoinDataProvider가 없습니다.");
  }
  return context;
};
