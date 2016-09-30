function ShowMeVm() {
    this.ShowMebln = ko.observable(true);

    this.HideMeFn = function () {
        this.ShowMebln(false);
    }

    this.ShowMeFn = function () {
        this.ShowMebln(true);
    }
}
var vm = new ShowMeVm();
ko.applyBindings(vm);