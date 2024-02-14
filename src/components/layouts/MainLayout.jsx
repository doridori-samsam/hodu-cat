import { Outlet } from "react-router-dom";
import styles from "@/style";

function MainLayout() {
  return (
    <main className={`${styles.mainLayout}`}>
      <Outlet />
    </main>
  );
}

export default MainLayout;
