const link = document.querySelectorAll("a");

if (link) {
    for (let i = 0; i < link.length; i++) {
        const user_name = link[i].textContent;  
        console.log(user_name)
        const x_link = link[i].getAttribute("href")
        console.log(x_link)
    }
}

// `document.querySelector` may return null if the selector doesn't match anything.
/*
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}

*/
