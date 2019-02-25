function user(_, args, context, info) {
    return context.prisma.query.user(
      {
        where:{
          id: args.id,
          gcID: args.gcID 
        },
        skip: args.skip,
        first: args.first,        
      },
      info
    );
}

module.exports = user;