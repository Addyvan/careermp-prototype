function createUser(_, args, context, info) {

    var createUserData = {
        name: args.user.name
    };

    return context.prisma.mutation.createUser({
        data: createUserData,
        }, info);
}

module.exports = createUser;