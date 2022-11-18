/*
 * I've opted to heavily comment this file because people are expected to paste it into their browser. 
 * Usually you should NOT paste things into your browser console. 
 * It is my hope that the comments help less JavaScript-familiar people understand what they're doing. 
 * Again... do NOT paste things you do not understand into your browser console. 
 */

(() => {
  // create an empty list (your followers will be stored here)
  let list = [];
  // initialize an undefined variable (this will hold a timeout used for printing out your followers at the end) 
  let timeout;
  // add a listener to pay attention to the scroll action in your browser. 
  addEventListener("scroll", () => {
    // every time scroll happens, cancel the previous timeout. 
    timeout && clearTimeout(timeout);
    // populate the list...
    list = [
      // with a new Set (Set is an easy way to remove duplicates from a list) containing...
      ...new Set(
        // a list of all the links that are children of main section in the twitter page. 
        [...document.querySelectorAll('main section [role="link"]')]
          // convert the html object to just the value contained in the href... or make it "" if there is no href for whatever reason... 
          .map((val) => val?.href || "")
          // add the contents of the previous list to this new list (duplicates will get removed because of Set). 
          .concat(list)
      ),
    // filter the contents of the newly update list so that...
    ].filter(
      // it only contains values that are truthy (not "" or undefined, etc), don't contain url queries (aka ?hello=world), and do contain the twitter url. 
      (val) => !!val && !val.includes("?") && val.includes("https://twitter.com")
    );
    // start a timeout that waits for 2.5 seconds. If no scroll cancels this timeout...
    timeout = setTimeout(() => {
      // it'll print out the entire list of follows joined by a new line character and a comma. 
      console.log(list.join(",\n"));
    }, 2500);
  });
})();
