import React from "react";
import { useState } from "react";
import { onlineCourses } from "./data";

const App = () => {
  const [courses, setCourses] = useState(onlineCourses);
  const [selectedCourse, setSelectedCourse] = useState([]);

  const selectCourse = (num) => {
    let newArr = [...selectedCourse];
    const newCourse = courses.find((item, index) => index === num);
    let buyItem=selectedCourse.some((course) => course.title === newCourse.title);
    if (!buyItem) {
      newArr.push(newCourse);
      setSelectedCourse(newArr);
    }
  };
  const sumPriceAll = () => {
    let sum = 0;
    selectCourse.map((item) => {
      sum += item.price;
    });
    return sum;
  };

  const delItem = (num) => {
    let newSelectedCourse = [...selectCourse];
    newSelectedCourse.splice(num, 1);
    setSelectedCourse(newSelectedCourse);
  };

  return (
    <>
      <div className="p-2 flex gap-10 flex-col bg-purple-700 text-white">
        <h1 className="text-center text-4xl">STARTUM ONLINE COURSES</h1>
        <div className="grid grid-cols-[1fr,3fr] gap-4 max-md:grid-cols-1 ">
          <div className="bg-blue-700 text-white p-4">
            {selectedCourse
              ? selectedCourse.map((item, index) => (
                  <div key={index}>
                    <h4>
                      {index + 1}.{item.title}
                    </h4>
                    <p>${item.price}</p>
                    <button
                      onClick={() => delItem(index)}
                      className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                ))
              : ""}
          </div>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {courses.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col gap-4 p-4 rounded-lg bg-slate-800 text-white items-center relative min-h-[30vh]"
              >
                <h4 className="text-8xl">{<item.img />}</h4>
                <h3 className="text-3xl">
                  <b>Course:</b> {item.title}
                </h3>
                <p className="absolute top-2 left-2 bg-red-700 text-white p-2 rounded-md">
                  {item.level}
                </p>
                <p className="absolute top-2 right-2 bg-blue-700 text-white p-2 rounded-md">
                  {item.length}
                </p>
                <p>
                  <b>Price:</b> $ {item.price}
                </p>
                <button
                  onClick={() => selectCourse(index)}
                  className="p-2 rounded-md bg-green-700 text-white cursor-pointer w-full"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
