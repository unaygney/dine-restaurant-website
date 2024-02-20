"use client";
import clsx from "clsx";
export default function Input({ name, placeholder, type }) {
  return (
    <input
      className={clsx(
        "w-full h-[45px] px-4 pb-[14px] border-b border-b-cod-gray outline-none text-xl leading-7 text-cod-gray   "
      )}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
}
