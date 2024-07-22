import NavItem from "../../UI/NavItem/NavItem";
import styles from "./navBar.module.scss";
// import logo from "../../assets/logo/logoBlack.png";
// import logo from "../../assets/logo/logoPurple.png";
import logo from "../../assets/logo/logoNotRound.png";
import { GoHomeFill } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";
import { ReactNode } from "react";

const navBarItems = [
  {
    title: "Create",
    icon: GoHomeFill,
  },
  {
    id: 2,
    title: "Saved",
    icon: FaBookmark,
  },
];

interface NavBarProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.navbarItems}>
          {navBarItems.map((item, index) => (
            <NavItem title={item.title} icon={item.icon} key={index}/>
          ))}
        </div>
      </div>
      {children}
    </>
  );
};

export default NavBar;
