import React, { FC, useState } from "react";
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
    backgroundColor: selected ? "#1F9D55" : backgroundColor,
  };

  const selStyle = {
    borderColor: selected ? "#1F9D55" : "white",
  };
  const textStyle = {
    color: backgroundColor,
  };

  return (
    <div
      style={selStyle}
      onClick={onClickCourse}
      className="cursor-pointer rounded-md text-white hover:scale-105 flex flex-col border-[2px] shadow-sm w-[285px] h-[210px]"
    >
      <div className="relative w-[200px] h-[75px] left-[5px] top-[5px] align-center bg-fuchsia-400 rounded-[23px]" />

      <div className="flex pt-2 items-center">
        <h1 className="text-center w-full" style={textStyle}>
          {courseName}
        </h1>
        <button
          onClick={() => {
            setSelected(!selected);
            onClickCourse();
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CourseComponent;
