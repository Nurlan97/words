import NavItem from "../../UI/NavItem/NavItem";
import styles from "./navBar.module.scss";
// import logo from "../../assets/logo/logoBlack.png";
// import logo from "../../assets/logo/logoPurple.png";
import logo from "../../assets/logo/logoNotRound.png";
import { GoHomeFill } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";
import { ReactNode, useState } from "react";

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
  // change burger classes
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  {
    console.log(styles);
  }
  return (
    <>
      <nav className={styles.wrapper}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.navbarItems}>
          {navBarItems.map((item, index) => (
            <NavItem title={item.title} icon={item.icon} key={index} />
          ))}
        </div>
      </nav>
      <div className={styles.children}>{children}</div>

      {/* --------------- Mobile version ---------- */}
      <nav className={styles.burger_menu} onClick={updateMenu}>
        <div
          className={`${burger_class
            .split(" ")
            .map((cls) => styles[cls])
            .join(" ")}`}
        ></div>
        <div
          className={`${burger_class
            .split(" ")
            .map((cls) => styles[cls])
            .join(" ")}`}
        ></div>
        <div
          className={`${burger_class
            .split(" ")
            .map((cls) => styles[cls])
            .join(" ")}`}
        ></div>
      </nav>
      <div
        className={`${menu_class
          .split(" ")
          .map((cls) => styles[cls])
          .join(" ")}`}
        // className={styles.visible}
      >
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.navbarItems}>
          {navBarItems.map((item, index) => (
            <NavItem title={item.title} icon={item.icon} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
