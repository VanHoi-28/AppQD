import "./style.css";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import viLocale from "@fullcalendar/core/locales/vi";
import moment from "moment";
import "moment-timezone";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!

const Celendar = () => {
  const handleDateClick = (arg) => {
    const title = prompt("Nhập tiêu đề sự kiện:");
    if (title) {
      const calendarApi = arg.view.calendar;
      calendarApi.addEvent({
        title,
        start: arg.date,
        allDay: true,
      });
    }
  };



  const events = [
    { title: "Sự kiện 1", date: "2024-04-28" },
    { title: "Sự kiện 2", date: "2024-04-27" },
    { title: "Sự kiện 3", date: "2024-04-10" },
    { title: "Sự kiện 4", date: "2024-04-24" },
    { title: "Sự kiện 5", date: "2024-04-20" },
    { title: "Sự kiện 6", date: "2024-04-05" },
  ];
  return (
    <div className="container">
      <div className="title3">
        <img className="img" src="./Calendar.svg" />
        <p>Lịch công việc</p>
        <span>Tất cả</span>
      </div>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          editable={true}
          events={events}
          dayMaxEvents={true}
          initialView={"dayGridMonth"}
          buttonText={{
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            list: "Lịch",
          }}
          headerToolbar={{
            left: "prev title next today",
            center: "",
            right: "timeGridDay,timeGridWeek,dayGridMonth myCustomButton",
          }}   
          titleFormat={{
            year: 'numeric',
            month: 'long'
          }}
         
          height={"545px"}
          dateClick={handleDateClick}
          selectable={true}
          customButtons={{
            myCustomButton: {
              icon: "bi bi-funnel-fill",
              click: function () {
                alert("hello");
              },
            },
          }}
          locale={viLocale} // Thiết lập ngôn ngữ tiếng Việt
        />
      </div>
    </div>
  );
};

export default Celendar;
