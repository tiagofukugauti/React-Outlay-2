import { get, post } from './httpService';

export async function apiGetDespesas() {
  const allDespesas = await get('/despesas');
  //console.log(allDespesas);
  return allDespesas;
}

export async function apiGetDespesasMes(mes) {
  const allDespesasMes = await get(`/despesas?mes=${mes}&_sort=dia`, {});
  return allDespesasMes;
}

export async function apiGetUserEndpoint() {
  const user = await get('sessao/usuario');
  //console.log(user);
  return user;
}

export async function apiPostUser(email, senha) {
  const userAuth = await post('sessao/criar', {
    email,
    senha,
  });
  return userAuth;
}

export async function apiPostUserOut() {
  const userOut = await post('sessao/finalizar');
  return userOut;
}
