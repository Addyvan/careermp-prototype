//onboarding
function createUser(_, args, context, info) {

  var updateUserData = {
    onBoarded: args.user.onBoarded,
    classification: args.user.classification,
    type: args.user.type
  };

  return context.prisma.mutation.updateUser(
    {
      where: {
        gcID: args.user.gcID
      },
      data: updateUserData,
    }, info);
}

module.exports = createUser;