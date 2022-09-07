import React, { useState } from 'react'
import Head from 'next/head';
import { canSSRAuth } from '../../../utils/canSSRAuth'
import { Button, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import { Wrapper } from '../../../components/wrapper';
import { toast } from 'react-toastify'
import { setupAPIClient } from '../../../services/api'

export default function CreateSala({salas}){
  const [name, setName] = useState('')
  const [urlvideo, setUrlVideo] = useState('')

  async function handleRegister(event){
    event.preventDefault();

    if(name === ''){
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post('/sala', {
      name: name,
      urlvideo: urlvideo
    })

    toast.success('Sala cadastrada com sucesso!')

    setName('');
    setUrlVideo('');

    Router.push('/sala')

  }
  return (
    <>
       <Head>
                <title>Nova Sala</title>
       </Head>
       <Wrapper>
         <Container className='container text-center mt-5'>
                 <Form onSubmit={handleRegister}>
                   <div className='form-signin w-50 m-auto'>
                   <Form.Group className="mb-2" controlId="nome">
                           <Form.Label>Nome da Sala:</Form.Label>
                           <Form.Control type='text' placeholder='Digite nome da sala:' value={name} onChange={ (e) => setName(e.target.value)} />
                         </Form.Group>
                         <Form.Group className="mb-2" controlId="description">
                           <Form.Label>Link do Video:</Form.Label>
                           <Form.Control type='text' placeholder='Digite o Link do Video:' value={urlvideo} onChange={ (e) => setUrlVideo(e.target.value)} />
                    </Form.Group>
                   </div>
                   <button className="w-50 btn btn-lg btn-outline-success" type="submit">Cadastrar Sala</button>
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
  const apliClient = setupAPIClient(ctx)
  const response = await apliClient.get('/sala');
  //console.log(response.data);
  return {
    props: {
      salas: response.data
    }
  }
})

