import React, { useEffect } from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Head from "next/head"
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Wrapper } from '../../components/wrapper';
import { setupAPIClient } from '../../services/api'

export default  function Sala() {

  const router = useRouter();
  const [termoBusca, setTermoBusca] = useState('');
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function loadVideos() {
        const apiClient = setupAPIClient();
  
        const response = await apiClient.get('/sala');

        /* console.log(data) */
        setVideoList(response.data)
    }
      
    loadVideos()
}, [])


  async function del (id) {
    if (window.confirm('Você realmente deseja excluir esse video?')) {
        const apiClient = setupAPIClient();
        await apiClient.delete(`sala/${id}`);

        setVideoList(videoList.filter(video => video.id !== id));
    }
  }


  return (
    <>
        <Head>
             <title>Salas Disponíveis</title>
        </Head>
          <Wrapper>
              <Link href='/sala/createSala'>
                <Button variant='outline-success mt-4' >
                    Nova Sala
                </Button>
              </Link>
            <InputGroup className='mt-3 mb-3'>
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl
                    onChange={(e) => {setTermoBusca(e.target.value)}}
                    placeholder='Buscar por nome da sala'
                />
            </InputGroup>
            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope='col'>NU</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Link</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                   {videoList.filter((video) => {
                    if (termoBusca == '') {
                        return video
                    } else if (video.name.toLowerCase().includes(termoBusca.toLowerCase())) {
                        return video
                    }
                   })
                   .map(video => (
                        <tr key={video.id}>
                            <td>{video.numerounico}</td>
                            <td>{video.name}</td>
                            <td href={video.urlvideo} ttdrget="_blank" rel="noopener noreferrer" passHref={false}>{video.urlvideo}</td>
                            <td>
                                <div>
                                       <Button
                                           variant='btn btn-sm btn-outline-primary me-2'
                                           onClick={() => router.push("sala/editSala/" + video.id)}
                                       >
                                           Editar
                                       </Button>
                                       <Button 
                                           variant='btn btn-sm btn-outline-danger me-2'
                                           onClick={() => del(video.id)}>
                                           Excluir
                                       </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </Wrapper>
        </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
  
    const response = await apiClient.get('/sala');
    console.log(response.data);
  
  
    return {
      props: {
        salas: response.data
      }
    }
  })

