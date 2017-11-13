var common = new Common();
function Common() {
    var _this = this;
    this.msg = function (data) {
        new Noty({
            type: data.type,
            layout: 'topRight',
            "speed": 500,
            "timeout": 5000,
            "closeButton": true,
            "closeOnSelfClick": true,
            "closeOnSelfOver": false,
            "modal": false,
            text:data.text
        }).show();
    };

}