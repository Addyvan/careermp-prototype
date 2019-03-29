const fetch = require('node-fetch');
async function collaborativeRecommendations(_, args, context, info) {
  
  var recommended_jobs = await new Promise( ( resolve, reject ) => {
    fetch("http://localhost:8888/" + args.gcID)
    .then(res => res.text())
    .then(body => resolve(body));
  });

  recommended_jobs = JSON.parse(JSON.parse(recommended_jobs).recommendations);

  var job_ids = [];
  for (key in recommended_jobs) {
    job_ids.push(key);
  }

  var recommendations = await context.prisma.query.jobs(
    {
      where:{
        id_in: job_ids 
      },
      skip: args.skip,
      first: args.first,
    },
    info
  );
  
  if (recommendations) {
    if (recommendations.length < 1) {
      return context.prisma.query.jobs(
        {
          skip: args.skip,
          first: 3,
        },
        info
      );
    }
  }

  return recommendations;

}

module.exports = collaborativeRecommendations;