import { Dispatch, SetStateAction, createContext } from "react";

interface isCompletedContextType {
  isCompleted: boolean;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
}

const IsCompletedContext = createContext<isCompletedContextType>({
  isCompleted: false,
  setIsCompleted: () => {},
});

export default IsCompletedContext;
