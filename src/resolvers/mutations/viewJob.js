// NOT CREATED YET
async function viewJob(_, args, context, info) {
    console.log(args);
    var updateUserData = {
        viewed: {
            connect: {
                id: args.job.id
            }
        }
    };

    return await context.prisma.mutation.updateUser({
        where: {
            gcID: args.user.gcID
        },
        data: updateUserData
    });

}

module.exports = viewJob;