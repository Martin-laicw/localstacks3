import { useState } from 'react'
import BankAccount from './BankAccount.jsx'
import './App.css'

function App() {
  const [balance, setBalance] = useState(0);
  const [interestRate, setInterestRate] = useState(5); // Default interest rate 5%
  const [feeRate, setFeeRate] = useState(1); // Default fee rate 1%

  // Deposit function
  const deposit = (amount) => {
    if (amount > 0) {
      setBalance(balance + parseFloat(amount));
    }
  };

  // Withdraw function
  const withdraw = (amount) => {
    if (amount > 0) {
      setBalance(balance - parseFloat(amount));
    }
  };

  // Add interest function
  const addInterest = () => {
    const interest = (balance * interestRate) / 100;
    setBalance(balance + interest);
  };

  // Charge bank fees function
  const chargeFees = () => {
    const fee = (balance * feeRate) / 100;
    setBalance(balance - fee);
  };

  //Alert for Negative Balance
  if (balance < 0) {
    alert("Warning: Your balance is negative!");
  };


  return (
    <div className="container">
      <h1 className="text-center mt-5">Bank Account Interest Calculator</h1>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="card p-4">
            <h3>Current Balance: ${balance.toFixed(2)}</h3>
            <div className="mt-3">
              <BankAccount
                deposit={deposit}
                withdraw={withdraw}
                addInterest={addInterest}
                chargeFees={chargeFees}
                balance={balance}
                interestRate={interestRate}
                feeRate={feeRate}
                setInterestRate={setInterestRate}
                setFeeRate={setFeeRate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
