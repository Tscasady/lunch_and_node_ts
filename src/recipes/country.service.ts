import axios, { AxiosResponse } from 'axios'

const conn = axios.create({
  baseURL: 'https://restcountries.com',
})

export const getCountry = async ():Promise<string> => {
  const response = await conn.get('/v3.1/all')
    .then(response => {
      return response.data
    })
    .catch(() => {
      return ['thailand', 'mexico']
    }); 

  return getRandomCountry(response)
} 

const getRandomCountry = (countryList: string[]) =>
  countryList[Math.floor(Math.random() * countryList.length)]


