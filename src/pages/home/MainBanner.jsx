import styles from "@/style";
import { HeadLine } from "../articles";
function MainBanner() {
  return (
    <section className={`${styles.flexCenter} bg-background h-[60vh] w-100vw`}>
      <HeadLine />
    </section>
  );
}

export default MainBanner;
