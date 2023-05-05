import { MouseEventHandler, ReactNode } from "react";
import styles from "./fancyButton.module.css";

interface FancyButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FancyButton = ({ children, onClick }: FancyButtonProps) => {
  return (
    <button className={styles.fancyButton} onClick={onClick}>
      {children}
    </button>
  );
};
