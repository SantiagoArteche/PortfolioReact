import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AgePresentational } from "./AgePresentational";

export const Age = ({ language }) => {
  let [age, setAge] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      if (age < 25) {
        age++;
        setAge(age);
      } else {
        clearInterval(interval);
      }
    }, 200);
  }, [age]);

  return <AgePresentational Box={Box} language={language} age={age} />;
};
