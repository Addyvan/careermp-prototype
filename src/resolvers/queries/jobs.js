function jobs(_, args, context, info) {
  return context.prisma.query.jobs(
    {
      where:{
        id: args.id         
      },
      skip: args.skip,
      first: args.first,        
    },
    info
  );
}

module.exports = jobs;