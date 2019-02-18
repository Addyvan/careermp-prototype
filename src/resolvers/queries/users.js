function users(_, args, context, info) {
    return context.prisma.query.users(
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

module.exports = users;