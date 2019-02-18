function job(_, args, context, info) {
  return context.prisma.query.job(
    {
      where:{
        id: args.id,
        name: args.name    
      },
      skip: args.skip,
      first: args.first,        
    },
    info
  );
}

module.exports = job;