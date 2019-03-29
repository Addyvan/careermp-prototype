import lunr from "lunr";

/**
 * One type of search is currently supported:
 *  1. By name
 */
class JobSearch {
  constructor(data) {
    this.data = data;

    this.nameIndex = [];

    this.nameSearchValues = {};

    if (data.jobs) {
      this.createIndices(data.jobs);
      this.createSearchValues(data.jobs);
    }

  }

  createIndices(jobs) {
    var index = [];
    for (var i = 0; i < jobs.length; i++) {
      index.push({
        name: jobs[i].name,
        path: jobs[i].id
      });
    }

    console.log(index);

    this.nameIndex = lunr(function () {
      this.ref('path');
      this.field('name');
    
      for (var i = 0; i < index.length; i++) {
        this.add(index[i]);
      }
    
    });
  }

  createSearchValues(jobs) {
    for (var i = 0; i < jobs.length; i++) {
      this.nameSearchValues[jobs[i].id] = jobs[i].name;
    }
  }


}

export default JobSearch;