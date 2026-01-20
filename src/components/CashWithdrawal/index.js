import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  deductBalance = amount =>
    this.setState(previousState => ({
      balance: previousState.balance - amount,
    }))

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="Container">
        <div className="cardContainer">
          <div className="nameAndProfile">
            <div className="circle">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>

          <div className="balanceContainer">
            <p className="yourBalance">Your Balance</p>
            <p className="balance">{balance} in rupees</p>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>

          <ul className="buttonContainer">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                onClickDenomination={this.deductBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
