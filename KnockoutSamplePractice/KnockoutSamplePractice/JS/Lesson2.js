function EmployeeModel() {
    this.empname = ko.observable();
    this.empArray = ko.observableArray(['Scott', 'James', 'Rich', 'Nick', 'Jordan']);
    this.addEmp = function () {
        if (this.empname() != "") {
            this.empArray.push(this.empname());
            this.empname("");
        }
    }.bind(this);
}
var emp = new EmployeeModel();
ko.applyBindings(emp);