import '../css/style.css'

function RybkaForImport({ IamWidth, IamHeight }) {
  const rybaStyle = {
    width: IamWidth,
    height: IamHeight,
    background: '#313131',
  }
  return <div style={rybaStyle} />
}

export default RybkaForImport
