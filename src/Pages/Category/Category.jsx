import { useParams } from 'react-router-dom'

export default function Category() {
  const params = useParams()
  return (
    <div>
      <h1>Category {params.id}</h1>
    </div>
  )
}
