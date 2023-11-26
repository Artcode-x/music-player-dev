export default async function getAllTracksFromApi() {
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

export async function Login({ email, password }) {
  // получаем тут пропсы со страницы логина - то что вводят в инпуты
  const response = await fetch('https://painassasin.online/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

fetch('https://painassasin.online/user/login/', {
  method: 'POST',
  body: JSON.stringify({
    email: 'gleb@fokin.ru',
    password: 'gleb@fokin.ru',
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    'content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

export async function handleReg({ email, password, username }) {
  const response = await fetch('https://painassasin.online/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  if (response === 500) {
    throw new Error('Сервер сломался')
  }
  const data = await response.json()
  return data
}

//   fetch('https://painassasin.online/user/signup/', {
//     method: 'POST',
//     body: JSON.stringify({
//       email: 'gleb@fokin.ru',
//       password: 'Aa12345!!',
//       username: 'gleb@fokin.ru',
//     }),
//     headers: {
//       // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
//       'content-type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
// }
