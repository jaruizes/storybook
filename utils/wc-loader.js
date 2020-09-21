export const wcloader = (url) => {
  let script = document.createElement('script');
  script.setAttribute('type','module');
  script.setAttribute('src',url);

  document.head.appendChild(script);
};
