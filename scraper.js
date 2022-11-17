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
