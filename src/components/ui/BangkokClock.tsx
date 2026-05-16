"use client";

import { useState, useEffect } from "react";

const BKK_FORMAT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Bangkok",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export function BangkokClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(BKK_FORMAT.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs text-text-black-sub tabular-nums">
      {time} <span className="opacity-60">UTC+7</span>
    </span>
  );
}
