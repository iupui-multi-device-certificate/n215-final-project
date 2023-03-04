import { formatMonth, formatDay } from "../../helpers.js";

const renderEvent = (event) => `
    <article class="event-item">
      <div class="date-block">
        <div class="day">${formatDay(event.eventDate)}</div>
        <div class="month upper">${formatMonth(event.eventDate)}</div>
      </div>      
      <div class="event-text">
        <h1 class="event-title">
          ${event.title}
        </h1>
        <div class="event-paragraph">
          ${event.summary}
      </div>
    </article>
`;

const renderEvents = (events) => ` 
    <div class="events-list">
      ${events.map((event) => renderEvent(event)).join("")}
    </div> 
`;
export const eventsView = (events) => `
  <section class="events">
    <h1 class="section-title">Upcoming Events:</h1>
    ${renderEvents(events)}
  </section
`;
