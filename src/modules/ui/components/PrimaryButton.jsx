"use client";
import { Button } from "flowbite-react";

const PrimaryButton = () => {
  return (
    <Button
      gradientDuoTone="purpleToBlue"
      className="ml-[450px] my-10 w-[20vh] h-[7vh] font-bold text-4xl"
    >
      Predict
    </Button>
  );
};

export default PrimaryButton;
