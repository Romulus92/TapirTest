var func = {
  
}

var app = {
  'init': function () {
    
  },
  'scroll': function () {
  },
  'load': function () {
  },
  'resize': function () {
  },
};

app.init();
window.addEventListener("load", function () {
  app.load();
});
window.addEventListener("resize", function () {
  app.resize();
});
window.addEventListener("scroll", function () {
  app.scroll();
})