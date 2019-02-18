function createJob(_, args, context, info) {

  var createJobData = {
      name: args.job.name
  };

  return context.prisma.mutation.createJob({
      data: createJobData,
      }, info);
}

module.exports = createJob;