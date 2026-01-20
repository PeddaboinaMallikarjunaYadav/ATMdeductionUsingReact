import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onClickDenomination} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    onClickDenomination(value)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
