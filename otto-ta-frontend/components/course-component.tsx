import React, { FC, useState } from "react";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
interface CourseComponentProps {
  courseName: string;
  courseNum: string;
  onClickCourse: () => void;
}
const CourseComponent: FC<CourseComponentProps> = ({
  courseName,
  courseNum,
  onClickCourse,
}) => {
  const [selected, setSelected] = useState(false);
  const getCourseColor = () => {
    const colors = [
      "#F2732F",
      "#62D123",
      "#2394D1",
      "#ED4EBD",
      "#4E4EED",
      "#944EED",
    ];
    const lastTwoDigits = parseInt(courseNum) % 100;
    if (lastTwoDigits >= 0 && lastTwoDigits < 20) {
      return colors[0];
    } else if (lastTwoDigits >= 20 && lastTwoDigits < 40) {
      return colors[1];
    } else if (lastTwoDigits >= 40 && lastTwoDigits < 60) {
      return colors[2];
    } else if (lastTwoDigits >= 60 && lastTwoDigits < 80) {
      return colors[3];
    } else if (lastTwoDigits >= 80 && lastTwoDigits < 100) {
      return colors[4];
    } else {
      return colors[5];
    }
  };

  const backgroundColor = getCourseColor();

  const style = {
    backgroundColor: selected ? "#4f1fa6" : backgroundColor,
  };

  const selStyle = {
    borderColor: selected ? "#4f1fa6" : "white",
  };
  const textStyle = {
    color: backgroundColor,
  };

  return (
    <div className={lexend.className}>
      <div
        className="cursor-pointer hover:scale-105 flex flex-col justify-between items-center border-[2px] shadow-sm w-[285px] h-[210px] bg-white rounded-[25px] shadow"
        style={selStyle}
        onClick={onClickCourse}
      >
        <div>
          <div
            className={`w-[270px] h-[104px] left-[5px] top-[5px] rounded-[23px] mt-1 ${selected ? "bg-fuchsia-600" : "bg-fuchsia-400"}`}
          />

          <div
            className="w-[252px] left-[16.50px] top-[118px] text-center text-fuchsia-400 text-lg font-bold font-lexend leading-none pt-2"
            style={textStyle}
          >
            {courseName}
          </div>
          {/* <div className="w-[252px] left-[17px] top-[144px] absolute text-center text-zinc-600 text-xs font-medium font-lexend">Data Structures and Algorithms</div> */}
        </div>
        <div className="w-[127px] h-7 left-[79px] top-[168px] mb-5">
          <button
            className="w-[127px] h-7   bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-400 hover:text-white transition duration-300"
            onClick={() => {
              setSelected(!selected);
              onClickCourse();
            }}
          >
            <span className="text-center text-white text-sm font-medium font-lexend">
              Select
            </span>
          </button>
        </div>
      </div>
    </div>

    // <div
    //   style={selStyle}
    //   onClick={onClickCourse}
    //   className="cursor-pointer rounded-md text-white hover:scale-105 flex flex-col border-[2px] shadow-sm w-[285px] h-[210px]"
    // >
    //   <div className="relative w-[200px] h-[75px] left-[5px] top-[5px] align-center bg-fuchsia-400 rounded-[23px]" />

    //   <div className="flex pt-2 items-center">
    //     <h1 className="text-center w-full" style={textStyle}>
    //       {courseName}
    //     </h1>
    //     <button className="w-[127px] h-7 left-0 top-0 absolute bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-400 hover:text-white transition duration-300"
    //       onClick={() => {
    //         setSelected(!selected);
    //         onClickCourse();
    //       }}
    //     >
    //       <span className="text-center text-white text-sm font-medium font-lexend">Select</span>
    //     </button>
    //   </div>
    // </div>
  );
};

export default CourseComponent;
