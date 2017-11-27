var common = new Common();
function Common() {
    var _this = this;
    this.msg = function (data) {
        new Noty({
            type: data.type,
            layout: 'topRight',
            "speed": 500,
            "timeout": 500,
            "closeButton": true,
            "closeOnSelfClick": true,
            "closeOnSelfOver": false,
            "modal": false,
            text:data.text
        }).show();
    };
	this.isNumberKey = function(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode == 0)) {
            return false;
        } else if (charCode == 13) {
            return false;
        }
        return true;
    };

}