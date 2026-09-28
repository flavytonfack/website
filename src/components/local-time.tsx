"use client";

import { useEffect, useState } from "react";

function formatCaliforniaTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("weekday")}, ${value("month")}/${value("day")}/${value("year")}   |   ${value("hour")}:${value("minute")} ${value("dayPeriod").toUpperCase()}`;
}

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatCaliforniaTime(new Date()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <p className="text-[16px] leading-6 text-muted">
      {time ?? "\u00a0"}
    </p>
  );
}
