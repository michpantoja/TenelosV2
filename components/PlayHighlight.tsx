"use client";

import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";

export default function PlayHighlight({
  isOpen,
  setter,
  embedId,
}: {
  isOpen: boolean;
  setter: any;
  embedId: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Modal content */}
        <div className="rounded-lg relative flex flex-col w-full max-w-4xl bg-[#FFFFFF]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2">
            <h5 className="text-lg font-bold text-darkerGray select-none">
              Video Highlight
            </h5>
            <BsX
              className="text-xl cursor-pointer select-none"
              onClick={() => setter(false)}
            />
          </div>
          {/* Body */}
          <div className="p-4 flex-auto">
            <iframe
              className="w-full h-96"
              src={"https://www.youtube.com/embed/" + embedId.trim().slice(-11)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Embedded youtube"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Background overlay */}
      <div className="fixed inset-0 z-40 bg-[#000000]/10"></div>
    </>
  );
}
