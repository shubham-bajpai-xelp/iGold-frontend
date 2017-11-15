module.exports = function(app) {
  const headerDetails = {};
  app.get("/*", function(req, res, next) {
    console.log(req.body)
    var designatedPath = req.path;
    headerDetails.protocol = req.protocol;
    headerDetails.servers = headerDetails.protocol + "://" + req.hostname;
    headerDetails.server = req.hostname;
    headerDetails.page = designatedPath.replace("/", "");
    headerDetails.services = "adminNew";
    headerDetails.port = ":8008/";
    headerDetails.nodomain = headerDetails.servers + headerDetails.port;
    headerDetails.service = "";
    headerDetails.serviceFile = "main.js";
    headerDetails.title = headerDetails.page;
    headerDetails.controllerFile = "";
    switch (designatedPath) {
      case "/bankview":
      headerDetails.controllerFile = "bankController.js";
        res.render("bankview.html", { headerDetails: headerDetails });
        break;
      case "/createAuction":
      case "/updateAuction":
        headerDetails.controllerFile = "auctionController.js";
        res.render("createAuction.html", { headerDetails: headerDetails });
        break;
      case "/jewelview":
      headerDetails.controllerFile = "jewellerController.js";
        res.render("jewelview.html", { headerDetails: headerDetails });
        break;
      case "/login":
        res.render("signin.html", { headerDetails: headerDetails });
        break;
      case '/bankonboarding_mobile':
        res.render('onbbank_mobile.html', { headerDetails: headerDetails });
      break; 
      case '/jewlonboarding_mobile':
        res.render('onbjewl_mobile.html', { headerDetails: headerDetails });
      break;  
      case "/":
        headerDetails.controllerFile = "loginController.js";
        res.render("signin.html", { headerDetails: headerDetails });
      break;
    }
  });
};
