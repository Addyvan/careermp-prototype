async function deleteUser(_, args, context, info) {

    return await context.prisma.mutation.deleteUser({
        where:{
            id: args.id
        }
    });

}

module.exports = deleteUser;