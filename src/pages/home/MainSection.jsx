import DownloadButton from "../../components/DownloadButton";
import text from "../../constants/text";
import styles from "../../style";
import bigCat from "../../assets/images/main_cat.svg";
function MainSection() {
  function clickBtn() {
    console.log("download button clicked!!!!!");
  }
  return (
    <section className={`${styles.flexCenter} bg-background h-[60vh] w-full`}>
      <div
        className={`${styles.mainLayout} justify-between flex-shrink h-full`}
      >
        <div className="text-box flex flex-col justify-center gap-[2rem]">
          <h1 className="font-spoqaBold text-[2rem] leading-10 whitespace-pre-line">
            {text.mainTitle}
          </h1>
          <p className="font-spoqa text-[1rem] whitespace-pre-line">
            {text.mainContent1}
            <br />
            {text.mainContent2}
          </p>
          <DownloadButton clickFunc={clickBtn} />
        </div>
        <img src={bigCat} className="w-[15rem] h-full order-1" />
      </div>
    </section>
  );
}

export default MainSection;
