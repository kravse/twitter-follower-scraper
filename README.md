# Follower / Follow list scraper

## Instructions

1. Copy this:
```js
(() => {
  let list = [];
  let timeout;
  addEventListener("scroll", () => {
    timeout && clearTimeout(timeout);
    list = [
      ...new Set(
        [...document.querySelectorAll('main section [role="link"]')]
          .map((val) => val?.href || "")
          .concat(list)
      ),
    ].filter(
      (val) => !!val && !val.includes("?") && val.includes("https://twitter.com")
    );
    timeout = setTimeout(() => {
      console.log(list.join(",\n"));
    }, 2500);
  });
})();
```
2. Navigate to your following list (for example, mine are at [twitter.com/kravse/following](https://twitter.com/kravse/following))
3. Open your browser console (helpful guide [here](https://balsamiq.com/support/faqs/browserconsole/))
4. Paste the script in, and hit enter. 
5. Start scrolling, _YOU NEED TO SCROLL_ through your followers since twitter followers are lazy loaded. Don't go too fast, but not too slow. 
6. Once you've scrolled all your followers wait 2.5 seconds. 
7. The list should get printed out. 
8. Copy the list 🤷


No guarentees. I made this in 10 minutes and I didn't really test it. 

https://user-images.githubusercontent.com/3950963/202578702-79befde6-8b38-40d0-8c4a-d776a63abe08.mp4

