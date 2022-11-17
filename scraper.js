(() => {let list = []; let timeout; addEventListener('scroll', (event) => {
  timeout && clearTimeout(timeout)
  list = [
    ...new Set(
      [
        ...document.querySelectorAll(
          '[aria-labelledby="accessible-list-0"] [role="link"]'
        ),
      ].map((val) => val.href).concat(list)
    ),
  ].filter(val => !val.includes('?') && val.includes('https://twitter.com/'));
  timeout = setTimeout(() => {
    console.log(list.join(',\n'));
  }, 2500)
})})()
