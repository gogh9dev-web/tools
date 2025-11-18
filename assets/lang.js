(function() {
  const lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("ko")) {
    window.location.href = "/tools/ko/";
  } else {
    window.location.href = "/tools/en/";
  }
})();
