import React from "react";
import { BentoCard } from "./BentoCard";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-white/75 text-text-secondary hover:bg-white"
      : "text-text-tertiary";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function CalendarBento() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  const bookingLink = `https://cal.com/chintan/30min?month=${currentYear}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day, i) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-[300px]" linkTo={bookingLink}>
      <div className="group flex h-full flex-col">
        <div className="relative z-10 max-w-[45%]">
          <h2 className="mb-2 text-base font-medium">Book a free call</h2>
          <p className="text-text-secondary">
            Let&apos;s talk about your project — no agenda needed.
          </p>
        </div>
        <div className="absolute -right-8 top-4 rotate-6 scale-110 transition-all duration-500 ease-out group-hover:rotate-3 group-hover:scale-[1.12]">
          <div className="w-[320px] rounded-[20px] border border-border-primary bg-bg-primary p-2 shadow-lg transition-colors duration-500 group-hover:border-indigo-400">
            <div
              className="rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] p-3"
              style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
            >
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">
                    {currentMonth}, {currentYear}
                  </span>
                </p>
                <span className="h-1 w-1 rounded-full bg-text-tertiary">
                  &nbsp;
                </span>
                <p className="text-xs text-text-tertiary">30 min call</p>
              </div>
              <div className="mt-3 grid grid-cols-7 gap-1.5">
                {renderCalendarDays()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
