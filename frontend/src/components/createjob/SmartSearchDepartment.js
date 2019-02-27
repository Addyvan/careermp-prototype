import lunr from "lunr";

const data = [
  {'name': 'Treasury Board Secretariat', "path": "TBS"},
  {'name': 'Department of National Defence', "path": "DND"},
  {'name': 'Public Services and Procurement Canada', "path": "PSPC"},
  {'name': 'Office of the Chief Human Resources Officer', "path": "OCHRO"}
];

const departmentSearchValues = {
  "TBS": "Treasury Board Secretariat",
  "DND": "Department of National Defence",
  "PSPC": "Public Services and Procurement Canada",
  "OCHRO": "Office of the Chief Human Resources Officer"
};

const departmentIndex = lunr(function () {
  this.ref('path');
  this.field('name');

  for (var i = 0; i < data.length; i++) {
    this.add(data[i]);
  }

});

export {
  departmentIndex,
  departmentSearchValues
};