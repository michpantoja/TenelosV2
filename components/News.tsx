"use client";

import React, { useState } from "react";
import { Tweet } from "./TwitterAPI/Tweet";

export default function News() {
  const tweetIds = [{ id: "1440682871967623680" }];
  return (
    <div className="flex flex-col border border-gray rounded-lg">
      <div className="flex flex-col px-4 pt-5 gap-2.5">
        <p className="font-semibold text-lg text-darkerGray">News</p>
      </div>
      <div>
        <div className="light px-4">
          <Tweet id="1749338609050959886" />
        </div>
        <div className="light px-4">
          <Tweet id="1680642452393213955" />
        </div>
      </div>
    </div>
  );
}
