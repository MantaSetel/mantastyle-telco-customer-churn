"use client";
import { Button } from "flowbite-react";

const PrimaryButton = ({ onClick, loading }) => {
  return (
    <Button
      isProcessing={loading}
      onClick={onClick}
      gradientDuoTone="pinkToOrange"
      className="mx-auto px-12 py-2 font-bold text-[20px] h-full"
    >
      Predict
    </Button>
  );
};

export default PrimaryButton;
