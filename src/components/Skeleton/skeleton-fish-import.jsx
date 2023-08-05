import * as S from './Skeleton-styled'

function RybkaForImport({ IamWidth, IamHeight }) {
  return <S.RybaStyle $w={IamWidth} $h={IamHeight} />
}

export default RybkaForImport

//
//
// на 4 строке передаем ключи внутрь стилей с переменными $IamHeight,
// $IamWidth внутри которых конкретные зн-ия в px которые мы получаем в компонентах

// Ключи $IamHeight / $IamWidth можно назвать произвольно

// а название переменной менять нельзя чтобы долетали значения с размерами
