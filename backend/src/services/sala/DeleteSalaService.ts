import prismaClient from "../../prisma";

interface SalaRequest{
  id: string;
}

class DeleteSalaService{
  async execute({ id }: SalaRequest){

    const salaId = await prismaClient.sala.delete({
      where:{
        id
      }
    })

    return salaId;
    
  }
}

export { DeleteSalaService }