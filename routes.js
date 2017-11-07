module.exports = function (app) {
    const headerDetails = {};
    app.get('/*', function (req, res, next) {
        var designatedPath = req.path;
        headerDetails.protocol = req.protocol;
        headerDetails.servers = headerDetails.protocol + '://' + req.hostname;
        headerDetails.server = req.hostname;
        headerDetails.page = designatedPath.replace('/', '');
        headerDetails.services = 'adminNew';
        headerDetails.port = ':8008/';
        headerDetails.nodomain = headerDetails.servers + headerDetails.port;
        headerDetails.service = '';
        headerDetails.serviceFile = 'main.js';
        headerDetails.title = headerDetails.page;
        headerDetails.controllerFile = '';
        switch (designatedPath) {
            case '/bankview':
                res.render('bankview.html', { headerDetails: headerDetails });
                break;
            case '/createAuction':
                headerDetails.controllerFile = 'auctionController.js';
                res.render('createAuction.html', { headerDetails: headerDetails });
                break;
            case '/jewelview':
                res.render('jewelview.html', { headerDetails: headerDetails });
                break;
            case '/':
                res.render('signin.html', { headerDetails: headerDetails });
                break;
        }
    });
};