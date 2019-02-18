async function deleteJob(_, args, context, info) {

  return await context.prisma.mutation.deleteJob({
      where:{
          id: args.id
      }
  });

}

module.exports = deleteJob;