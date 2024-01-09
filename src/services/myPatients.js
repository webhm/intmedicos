
import { mande, defaults } from 'mande';
const baseURL = 'https://api.hospitalmetropolitano.org/v2/medicos';
const mainSearch = mande(baseURL);


export function getMyPatients(start, length) {
  const patients = mande(  baseURL);
    let url = `mis-pacientes-residentes?start=${start}&length=${length}`;
  return patients.get(url);
}
export function searchMyPatients(start, length, search) {
    const patients = mande(  baseURL);
    let url = `mis-pacientes-residentes?start=${start}&length=${length}&searchField=${search}`;
    return patients.get(url);
}

