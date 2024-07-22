import styles from "./button.module.scss";

interface ButtonProps {
  btnName: string;
  background: string;
}

const Button = ({ btnName, background }: ButtonProps) => {
  return (
    <button className={styles.button} style={{ background: background }}>
      {btnName}
    </button>
  );
};

export default Button;
