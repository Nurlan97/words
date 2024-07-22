import styles from "./navItem.module.scss";
import { IconType } from "react-icons";

interface NavItemProps {
  title: string;
  icon: IconType;
  iconSize?: number;
}

const NavItem = ({ title, icon: Icon, iconSize = 30 }: NavItemProps) => {
  return (
    <div className={styles.navItem}>
      <div className={styles.iconWrapper}>
        <Icon size={iconSize} className={styles.icon}/>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default NavItem;
