import lunr from "lunr";

const data = [
  {'name': 'Economics and Social Services 1', "path": "EC01"},
  {'name': 'Economics and Social Services 2', "path": "EC02"},
  {'name': 'Economics and Social Services 3', "path": "EC03"},
  {'name': 'Economics and Social Services 4', "path": "EC04"}
];

const classificationSearchValues = {
  "EC01": "EC01",
  "EC02": "EC02",
  "EC03": "EC03",
  "EC04": "EC04", 
};

const classificationIndex = lunr(function () {
  this.ref('path');
  this.field('name');

  for (var i = 0; i < data.length; i++) {
    this.add(data[i]);
  }

});

export {
  classificationIndex,
  classificationSearchValues
};