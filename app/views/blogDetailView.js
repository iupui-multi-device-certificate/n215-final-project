import { formatMonth, formatDay } from "../helpers.js";

export const blogDetailView = (blog) => `
    <article class="blog-post-detail content-width">
        <div class="blog-banner">    
          <img src="${blog.relativeImagePath}" alt="" />
          <div class="date-block-large">
            <div class="day">${formatDay(blog.datePublished)}</div>
            <div class="month upper">${formatMonth(blog.datePublished)}</div>
          </div> 
        </div>
    </article>
`;
