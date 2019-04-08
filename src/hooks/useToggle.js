import { useState, useCallback } from "react";

export default function useToggle(initialState = false) {
  const [isToggle, setToggle] = useState(initialState);
  const handleToggle = useCallback(() => setToggle(!isToggle));
  const handleToggleOpen = useCallback(() => setToggle(true));
  const handleToggleClose = useCallback(() => setToggle(false));
  const action = {
    handleToggle,
    handleToggleOpen,
    handleToggleClose,
    setToggle
  };
  return [isToggle, action];
}
