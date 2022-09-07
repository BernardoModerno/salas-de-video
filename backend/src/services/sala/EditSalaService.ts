import prismaClient from "../../prisma";

interface SalaRequest{
  id: string;
  name: string;
  urlvideo: string;
}

class EditSalaService{
  async execute({ id, name, urlvideo }: SalaRequest){

    const category = await prismaClient.sala.update({
      where:{
        id: id
      },
      data:{
        name: name,
        urlvideo: urlvideo,
      }
    })

    return category;

  }
}

export { EditSalaService }