import { useState } from 'react';
import { Header } from '../components/Header';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { apiPostUser } from '../services/apiService';
import React from 'react';

export const LoginScreen = React.memo(function ({ entrar }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  function signIn(evt) {
    evt.preventDefault();
    //console.log('signIn');
    apiPostUser(email, password).then(
      user => {
        entrar(user);
      },
      e => setError('E-mail não encontrado ou senha incorreta')
    );
  }
  return (
    <>
      <Header>GESTÃO DE DESPESAS PESSOAIS</Header>
      <Container maxWidth="sm">
        <Box marginTop="30px">
          <Box marginBottom="20px">
            <p>Digite e-mail e senha para entrar no sistema</p>
          </Box>
          <form onSubmit={signIn}>
            <TextField
              id="email-id"
              margin="normal"
              label="E-mail"
              fullWidth
              variant="outlined"
              //value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
            <TextField
              id="senha-id"
              type="password"
              margin="normal"
              label="Senha"
              fullWidth
              variant="outlined"
              //value={password}
              onChange={evt => setPassword(evt.target.value)}
            />
            {error && (
              <div className="bg-red-200 text-red-900  text-center rounded-lg font-semibold p-2 m-4">
                {error}
              </div>
            )}
            <Box textAlign="right" marginTop="20px">
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </>
  );
});
