const apiAddress = 'https://skypro-music-api.skyeng.tech'

export default async function getAllTracksFromApi() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
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

export async function Login({ email, password }) {
  // получаем тут пропсы со страницы логина - то что вводят в инпуты
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const data = await response.json()
  if (response.status === 401) {
    throw new Error('Пользователь с таким паролем или емейл не найден')
  }
  if (response.status === 400) {
    throw new Error('Пользователь с таким именем/email уже зарегестрирован')
  }
  return data
}

fetch('https://skypro-music-api.skyeng.tech/user/login/', {
  method: 'POST',
  body: JSON.stringify({
    email: 'gleb@fokin.ru',
    password: 'gleb@fokin.ru',
  }),
  headers: {
    'content-type': 'application/json',
  },
}).then((response) => response.json())

export async function handleReg({ email, password, username }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )

  if (response === 500) {
    throw new Error('Сервер сломался')
  }
  const data = await response.json()
  return data
}

export function getFavoriteTracks(token) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    if (response.status === 401) throw new Error('Токен протух')
    return response.json()
  })
}

export function getToken({ email, password }) {
  return fetch(`https://skypro-music-api.skyeng.tech/user/token/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json())
}

export function refreshToken(token) {
  return fetch(`${apiAddress}/user/token/refresh/`, {
    method: 'POST',

    body: JSON.stringify({
      refresh: token,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => response.json())
}

export function addLike({ token, id }) {
  return fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: 'POST',

    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) throw new Error('Токен протух')
    return response.json()
  })
}

export function disLike({ token, id }) {
  return fetch(`${apiAddress}/catalog/track/${id}/favorite/`, {
    method: 'DELETE',

    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) throw new Error('Токен протух')
    return response.json()
  })
}
