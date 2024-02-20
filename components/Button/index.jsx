"use client";
import React from "react";
import clsx from "clsx";

export default function Button({
  title,
  onClick,
  variant,
  type = "button",
  className,
  disabled,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "bg-transparent py-6 px-12 font-semibold text-base leading-4 uppercase tracking-[2.5px]",
        {
          " border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-mirage":
            !disabled && variant === "primary",
          " border border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-[#fff]":
            !disabled && variant === "secondary",
          " border border-[#979797] text-[#979797] cursor-not-allowed":
            disabled && variant === "primary",
          " border border-[#979797] text-[#979797] cursor-not-allowed":
            disabled && variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
}
