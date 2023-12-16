import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import eventsData from "../testData/events.json";

const getEvents = () => {
  return eventsData.map((event) => {
    const formattedDate = new Date(event.date);
    formattedDate.setMonth(formattedDate.getMonth() + 1);

    return {
      ...event,
      date: formattedDate,
    };
  });
};

const getDatesToDisplay = (
  daysAmount: number,
  month: number,
  selectedMonthDate: Date
) => {
  const datesToDisplay = [];
  for (let i = 0; i < daysAmount; i++) {
    datesToDisplay.push(
      new Date(
        selectedMonthDate.getFullYear(),
        month,
        1 - selectedMonthDate.getDay() + 1 + i // starting from Monday of the week in which the first day of the month occurs
      )
    );
  }
  return datesToDisplay;
};

const areDatesEqual = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const SchedulePage = () => {
  const todayDate = new Date();
  const [month, setMonth] = useState(todayDate.getMonth());
  const [clickedDayDate, setClickedDayDate] = useState(todayDate);
  const events = useMemo(() => {
    return getEvents();
  }, []);

  const selectedMonthDate = new Date(todayDate.getFullYear(), month);
  const datesToDisplay = getDatesToDisplay(35, month, selectedMonthDate);
  const monthName = selectedMonthDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="grid grid-rows-[auto,1fr] lg:grid-cols-[1fr,18rem] w-full h-full gap-2 overflow-y-auto lg:overflow-hidden">
      <div className="flex gap-2 mx-auto text-2xl font-semibold">
        <button
          onClick={() => setMonth((prev) => prev - 1)}
          className="p-1.5 rounded-full dark:hover:bg-soft-black-hover-200">
          <FaAngleLeft />
        </button>
        <span className="w-48 text-center">{monthName}</span>
        <button
          onClick={() => setMonth((prev) => prev + 1)}
          className="p-1.5 rounded-full dark:hover:bg-soft-black-hover-200">
          <FaAngleRight />
        </button>
      </div>

      <div className="grid grid-cols-7 grid-rows-[auto,repeat(5,1fr)] row-start-2 sm:gap-1 select-none">
        {datesToDisplay.slice(0, 7).map((date, index) => (
          <div
            key={index}
            className="p-1 bg-soft-white-hover dark:bg-soft-black-hover-200">
            <span className="hidden lg:block">
              {date.toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </span>
            <span className="lg:hidden">
              {date.toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>
          </div>
        ))}

        {datesToDisplay.map((date, index) => (
          <div
            key={index}
            onClick={() => {
              setClickedDayDate(date);
            }}
            className={`space-y-1 p-1 cursor-pointer dark:bg-soft-black-hover-200 border-2 bg-soft-white-hover ${
              areDatesEqual(clickedDayDate, date)
                ? "border-soft-green"
                : "border-transparent hover:border-soft-green-hover"
            }`}>
            <p
              className={`flex items-center justify-center w-7 h-7 rounded-full ${
                areDatesEqual(todayDate, date)
                  ? "bg-soft-green-hover font-semibold border border-soft-green text-soft-white"
                  : ""
              }`}>
              {date.getDate()}
            </p>
            {events
              .filter((event) => areDatesEqual(event.date, date))
              .slice(0, 3)
              .map(({ name, startTime }, index) => (
                <p
                  key={index}
                  className="px-1 text-sm truncate rounded-full dark:bg-soft-black-hover-100">
                  {`${startTime} ${name}`}
                </p>
              ))}

            {events.filter((event) => areDatesEqual(event.date, date)).length -
              3 >
            0 ? (
              <p className="px-1 text-sm text-center truncate rounded-full dark:bg-soft-black-hover-100">
                {`${
                  events.filter((event) => areDatesEqual(event.date, date))
                    .length - 3
                } more...`}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="p-2 space-y-2 lg:overflow-y-auto lg:row-start-2 dark:bg-soft-black-hover-200 bg-soft-white-hover">
        <p className="text-lg border-b">
          {clickedDayDate.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>

        {events.filter((event) => areDatesEqual(event.date, clickedDayDate))
          .length ? (
          events
            .filter((event) => areDatesEqual(event.date, clickedDayDate))
            .map(({ name, startTime }, index) => (
              <p
                key={index}
                className="p-2 rounded-md dark:bg-soft-black-hover-100">
                {`${startTime} ${name}`}
              </p>
            ))
        ) : (
          <p className="p-2">No events planned, have a good day :)</p>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
