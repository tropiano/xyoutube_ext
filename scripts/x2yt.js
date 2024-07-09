function find_links() {
    const link = document.querySelectorAll("a.css-175oi2r.r-1wbh5a2.r-dnmrzs.r-1ny4l3l.r-1loqt21");
    const url = chrome.runtime.getURL("data/x-youtube-map.json");
    //console.log(link);
    //console.log("test extension");

    fetch(url)
    .then((res) => { 
        return res.json();}
    )
    .then((data) => { 
        //console.log(data);
        if (link) {
            for (let i = 0; i < link.length; i++) {
                const user_name = link[i].textContent;  
                //console.log(user_name)
                const x_link = link[i].getAttribute("href").substring(1);
                
                // skip if tabindex is -1
                const tab_index = link[i].getAttribute("tabindex");
                if(tab_index == '-1'){
                    continue;
                }
         
                //console.log(x_link);
                const yt_user = data[x_link]; 
                //console.log(yt_user);
                if(!yt_user){
                    continue;
                }
                // check if the badge is already there and do not add it
                classUser = document.querySelectorAll("a.x2yt-"+x_link);
                if (classUser.length > 0){
                    //console.log(classUser.length);
                    //console.log("found element");
                    continue;
                }
                //console.log(classUser.length);
                const badge = document.createElement("a");
                badge.classList.add("x2yt-"+x_link);
                
                badge.classList.add("r-37j5jr");
                //badge.classList.add("ss-1jxf684", "r-bcqeeo", "r-1ttztb7", "r-qvutc0" ,"r-poiln3");
                //badge.textContent = data[x_link];
                badge.textContent = " 📺 ";
                badge.href = "https://www.youtube.com/@"+data[x_link];
                badge.target = "_blank"
                badge.rel = "noopener noreferrer"
                profileEl = link[i].parentNode;
                profileEl.insertAdjacentElement("afterend", badge);
                }
            }
        }
    );
}

setInterval(find_links, 5000);

//.then((data) => {console.log(data);})

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
