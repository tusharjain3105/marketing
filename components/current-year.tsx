"use client";

import { useLayoutEffect, useState } from "react";

const CurrentYear = () => {
  const [year, setYear] = useState<number>();

  useLayoutEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year;
};

export default CurrentYear;
