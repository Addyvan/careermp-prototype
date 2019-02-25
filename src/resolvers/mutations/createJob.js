function createJob(_, args, context, info) {
  console.log(args.owner);
  var createJobData = {
      name: args.job.name,
      owner: {
        connect: {
          gcID: args.job.owner.gcID
        }
      }
  };

  return context.prisma.mutation.createJob({
      data: createJobData,
      }, info);
}

module.exports = createJob;