import styles from "@/style";
function CommonLayout({ children }) {
  return (
    <section className={`${styles.flexCenter} bg-background h-[60vh] w-full`}>
      {children}
    </section>
  );
}

export default CommonLayout;
