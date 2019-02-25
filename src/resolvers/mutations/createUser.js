function createUser(_, args, context, info) {

    var createUserData = {
      gcID: args.user.gcID,
      name: args.user.name,
      onBoarded: args.user.onBoarded,
      classification: args.user.classification,
      type: args.user.type
    };

    return context.prisma.mutation.createUser({
      data: createUserData,
      }, info);
}

module.exports = createUser;