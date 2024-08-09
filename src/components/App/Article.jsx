import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Determine the appropriate emoji based on the reading time
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);
  const readingIndicator = minutes < 30 
    ? "☕️".repeat(coffeeCups) 
    : "🍱".repeat(bentoBoxes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {readingIndicator} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
