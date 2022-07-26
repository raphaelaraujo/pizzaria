import prismaClient from "../../prisma";

class ListCategoryService{

    async execute(){

        /*
        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        */

        const category = await prismaClient.$queryRaw`SELECT id, name FROM categories;`;

        return category;
    }
}

export { ListCategoryService }