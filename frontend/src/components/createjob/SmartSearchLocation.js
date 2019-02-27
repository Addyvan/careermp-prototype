import lunr from "lunr";

const data = [
  {'name': 'National Capital Region', "path": "NCR"},
  {'name': 'Ontario', "path": "ONTARIO"},
  {'name': 'Quebec', "path": "QUEBEC"},
  {'name': 'Other', "path": "OTHER"}
];

const locationSearchValues = {
  "NCR": "National Capital Region",
  "ONTARIO": "Ontario",
  "QUEBEC": "Quebec",
  "OTHER": "Other"
};

const locationIndex = lunr(function () {
  this.ref('path');
  this.field('name');

  for (var i = 0; i < data.length; i++) {
    this.add(data[i]);
  }

});

export {
  locationIndex,
  locationSearchValues
};