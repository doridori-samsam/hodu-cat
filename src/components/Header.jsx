import DownloadButton from "./DownloadButton";
import logo from "../assets/images/logo.svg";
import menu from "../constants/menu";
import styles from "../style";
function Header() {
  return (
    <header
      className={`${styles.flexCenter} w-full sticky top-0 h-[4.3rem] z-50 bg-background`}
    >
      <div
        className={`${styles.mainLayout} justify-between items-center h-full`}
      >
        <h1 className="h-fit">
          <img src={logo} alt="hodu-logo" className="w-[8rem] h-[2.5rem]" />
        </h1>
        <ul className="flex flex-row gap-8 items-center">
          {menu.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
          <DownloadButton />
        </ul>
      </div>
    </header>
  );
}

export default Header;
