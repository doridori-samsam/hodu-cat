import { CommonButton } from "@/components/buttons";
import styles from "@/style";
import text from "@/constants/text";
import BigCat from "@/assets/images/main_cat.svg";

function HeadLine() {
  return (
    <div
      className={`${styles.contentsLayout} justify-between flex-shrink h-full`}
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
        <CommonButton>Download</CommonButton>
      </div>
      <img src={BigCat} className="w-[30rem] mt-[3rem]" />
    </div>
  );
}

export default HeadLine;
