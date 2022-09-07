import prismaClient from "../../prisma";

interface SalaRequest{
  name: string;
  urlvideo: string;
}

class CreateSalaService{
  async execute({ name, urlvideo }: SalaRequest){
    
    if(name === ''){
      throw new Error('Name invalid')
    }

    const sala = await prismaClient.sala.create({
      data:{
        name: name,
        urlvideo: urlvideo,
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

export { CreateSalaService }