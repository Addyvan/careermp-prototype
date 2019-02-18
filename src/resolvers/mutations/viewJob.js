// NOT CREATED YET
async function followUser(_, args, context, info) {

    var updateUserData = {
        followers: {
            connect: {
                id: args.userToFollow.id
            }
        }
    };

    return await context.prisma.mutation.updateUser({
        where: {
            id: args.userToBeFollowed.id
        },
        data: updateUserData
    });

}

module.exports = followUser;