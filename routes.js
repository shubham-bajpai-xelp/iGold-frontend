module.exports = function(app) {
    const headerDetails = {};
    app.get('/*', function(req, res,next) {
        var designatedPath = req.path;
        headerDetails.protocol=req.protocol;
        headerDetails.servers=headerDetails.protocol+'://'+req.hostname;
        headerDetails.server=req.hostname;
        headerDetails.page=designatedPath.replace('/','');
        headerDetails.services='adminNew';
        headerDetails.title=headerDetails.page;
        headerDetails.controllerFile = '';
        switch(designatedPath){
            case '/jeweller':
            case '/banker':
                res.render(headerDetails.service+headerDetails.page+'.html',{headerDetail:headerDetails});
            break;
            case '/login':
            res.render(headerDetails.service+headerDetails.page+'.html',{headerDetails:headerDetails});
            break;
        }
    });
  };