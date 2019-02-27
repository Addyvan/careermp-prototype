function createJob(_, args, context, info) {
  var createJobData = {
      name: args.job.name,
      owner: {
        connect: {
          gcID: args.job.owner.gcID
        }
      },
      department: args.job.department,
      classification: args.job.classification,
      location: args.job.location
  };

  return context.prisma.mutation.createJob({
      data: createJobData,
      }, info);
}

module.exports = createJob;