(function() {
  const lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("ko")) {
    window.location.href = "./ko/";
  } else {
    window.location.href = "./en/";
  }
})();
