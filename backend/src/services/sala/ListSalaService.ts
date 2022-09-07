import prismaClient from "../../prisma";

class ListSalaService{
  async execute(){

    const sala = await prismaClient.sala.findMany({
      select:{
        id: true,
        numerounico: true,
        name: true,
        urlvideo: true,
        created_at: true,
      }
    })

    return sala;

  }
}

export { ListSalaService }