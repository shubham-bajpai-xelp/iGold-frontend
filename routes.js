module.exports = function(app) {
  const headerDetails = {};
  app.post("/*", function(req, res, next) {
    var designatedPath = req.path;
    headerDetails.protocol = req.protocol;
    let {auctionId,bankId,jewellerId,status} = req.query;
    headerDetails.servers = headerDetails.protocol + "://" + req.hostname;
    headerDetails.server = req.hostname;
    headerDetails.page = designatedPath.replace("/", "");
    headerDetails.services = "adminNew";
    headerDetails.port = ":3000/";
    headerDetails.nodomain = headerDetails.servers + headerDetails.port;
    headerDetails.service = "";
    headerDetails.serviceFile = "main.js";
    headerDetails.title = headerDetails.page;
    headerDetails.controllerFile = "";
    switch (designatedPath) {
      case "/updateAuction":
        headerDetails.controllerFile = "auctionController.js";
        res.render("createAuction.html", { headerDetails: headerDetails,'auctionId': auctionId});
      break;
    }
  });
  app.get("/*", function(req, res, next) {
    var designatedPath = req.path;
    headerDetails.protocol = req.protocol;
    let {auctionId,bankId,jewellerId,status} = req.query;
    headerDetails.servers = headerDetails.protocol + "://" + req.hostname;
    headerDetails.server = req.hostname;
    headerDetails.page = designatedPath.replace("/", "");
    headerDetails.services = "adminNew";
    headerDetails.port = ":3000/";
    headerDetails.nodomain = headerDetails.servers + headerDetails.port;
    headerDetails.service = "";
    headerDetails.serviceFile = "main.js";
    headerDetails.title = headerDetails.page;
    headerDetails.controllerFile = "";
    switch (designatedPath) {
      case "/banker-dashboard":
      headerDetails.controllerFile = "bankController.js";
        res.render("bankview.html", { headerDetails: headerDetails });
        break;
      case "/createAuction":
        headerDetails.controllerFile = "auctionController.js";
        res.render("createAuction.html", { headerDetails: headerDetails,auctionId:''});
        break;
      case "/jeweller-dashboard":
      case "/jeweller":
        headerDetails.controllerFile = "jewellerController.js";
        res.render("jewelview.html", { headerDetails: headerDetails });
        break;
        
      case "/login":
      case "/iGold":
        headerDetails.controllerFile = "loginController.js";
        res.render("signin.html", { headerDetails: headerDetails });
        break;
      case '/bankonboarding_mobile':
        res.render('onbbank_mobile.html', { headerDetails: headerDetails });
      break; 
      case '/jewlonboarding_mobile':
        res.render('onbjewl_mobile.html', { headerDetails: headerDetails });
      break;  
      case "/":
        res.redirect('/login');
/*        headerDetails.controllerFile = "loginController.js";
        res.render("signin.html", { headerDetails: headerDetails });*/
      break;
      default:
        next();
      break;
    }
  });
};
