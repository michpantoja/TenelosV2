"use client";

import React, { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    // Update content height on isOpen change
    setContentHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div>
      <div
        className={`${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } flex gap-5 justify-between items-center bg-gray/30 px-4 sm:px-7 py-3 cursor-pointer text-darkerGray font-medium`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <BsChevronDown
        size={14}
          className={`text-xl duration-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="overflow-hidden duration-300 ease-in-out bg-gray/30 rounded-b-lg px-4 sm:px-7"
      >
        <div className="p-4 font-regular  text-darkerGray">{children}</div>
      </div>
    </div>
  );
}
