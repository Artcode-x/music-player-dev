export default async function GetAllTracksFromApi() {
  const response = await fetch(
    'https://painassasin.online/catalog/track/all/',
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Ошибка Сервера! Проверка в api.jsx')
  }
  const data = await response.json()
  return data
}

// альтернатива
// export default async function GetAllTracksFromApi() {
// return fetch('https://painassasin.online/catalog/track/all/', {
//   method: 'GET'
// }).then((vsetracki) => {
//   return vsetracki.json()
// })

// if (response.status !== 200) {
//   throw new Error('Ты не пройдешь!')
// }
