function FinalString() {
    this.firstString = ko.observable();
    this.secondString = ko.observable();

    this.finalString = ko.computed(function () {
        return this.firstString() + " " + this.secondString();
    }, this);
}
ko.applyBindings(new FinalString());