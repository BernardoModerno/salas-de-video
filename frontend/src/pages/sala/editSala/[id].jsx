import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { setupAPIClient } from '../../../services/api'
import { canSSRAuth } from '../../../utils/canSSRAuth'
import { Button, Container, Form, Input } from 'react-bootstrap';
import Link from 'next/link';
import { Wrapper } from '../../../components/wrapper';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import Router from 'next/router';

export default function EditCategory({salas}){
    const router = useRouter();
    const [name, setName] = useState('')
    const [urlvideo, setUrlVideo] = useState('')

    useEffect(() => {
      async function loadVideos() {
          const apiClient = setupAPIClient();
    
          const response = await apiClient.get(`sala/${router.query.id}`);
          setName(response.data.name)
          setUrlVideo(response.data.urlvideo)
  
      }
        
      loadVideos()
  }, [])
  
    async function handleEdit(event){
      event.preventDefault();
  
      const apiClient = setupAPIClient();

      await apiClient.put(`sala/${router.query.id}`, {
        name,
        urlvideo,
    });
  
      toast.success('Sala editada com sucesso!')
  
      setName('');
      setUrlVideo('')
      Router.push('/sala')
  
    }
    return (
      <>
         <Head>
                  <title>Editar Sala</title>
         </Head>
         <Wrapper>
           <Container className='container text-center mt-5'>
                   <Form onSubmit={handleEdit}>
                     <div className='form-signin w-50 m-auto'>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Nome da Sala:</Form.Label>
                         <Form.Control type='text' defaultValue={name} value={name} onChange={ (e) => setName(e.target.value)} />
                       </Form.Group>
                       <Form.Group className="mb-3" controlId="nome">
                         <Form.Label>Link do Video:</Form.Label>
                         <Form.Control type='text' defaultValue={urlvideo} value={urlvideo} onChange={ (e) => setUrlVideo(e.target.value)} />
                       </Form.Group>
                     </div>
                     <button className="w-50 btn btn-lg btn-outline-success" type="submit">Editar Sala</button>
                   </Form>
                   <Link href='/sala'>
                     <Button className='w-50 btn btn-lg btn-danger mt-2' >
                       Retornar
                     </Button>
                   </Link>
           </Container>
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