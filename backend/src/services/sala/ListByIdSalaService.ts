import prismaClient from "../../prisma";

interface SalaRequest{
    id: string;
    name: string;
    urlvideo: string;
  }

class ListByIdSalaService{
    async execute({ id, name, urlvideo }: SalaRequest) {

    const sala = await prismaClient.sala.findUnique({
        where:{
            id: id
          },
          select:{
            id: true,
            name: true,
            urlvideo: true,
          }
    })

    return sala;

  }
}

export { ListByIdSalaService }