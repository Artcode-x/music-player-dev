import * as S from './Skeleton-styled'

function RybkaForImport({ IamWidth, IamHeight }) {
  // Передаем ключи внутрь компонента с переменными $IamHeight, $IamWidth внутри которых конкретные значения в px которые мы получаем в компонентах
  return <S.RybaStyle $w={IamWidth} $h={IamHeight} />
}

export default RybkaForImport

// Ключи $IamHeight / $IamWidth можно назвать произвольно, а название переменной менять нельзя чтобы долетали значения с размерами.
