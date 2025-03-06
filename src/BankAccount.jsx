import React, { useState } from "react";

function BankAccount({
  deposit,
  withdraw,
  addInterest,
  chargeFees,
  balance,
  interestRate,
  feeRate,
  setInterestRate,
  setFeeRate,
}) {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  return (
    <div>
      <div className="form-group">
        <label htmlFor="depositAmount">Deposit Amount</label>
        <input
          type="number"
          id="depositAmount"
          className="form-control"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            deposit(depositAmount);
            setDepositAmount("");
          }}
        >
          Deposit
        </button>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="withdrawAmount">Withdraw Amount</label>
        <input
          type="number"
          id="withdrawAmount"
          className="form-control"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button
          className="btn btn-danger mt-2"
          onClick={() => {
            withdraw(withdrawAmount);
            setWithdrawAmount("");
          }}
        >
          Withdraw
        </button>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="interestRate">Interest Rate (%)</label>
        <input
          type="number"
          id="interestRate"
          className="form-control"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={addInterest}>
          Add Interest
        </button>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="feeRate">Fee Rate (%)</label>
        <input
          type="number"
          id="feeRate"
          className="form-control"
          value={feeRate}
          onChange={(e) => setFeeRate(e.target.value)}
        />
        <button className="btn btn-warning mt-2" onClick={chargeFees}>
          Charge Bank Fees
        </button>
      </div>
    </div>
  );
}

export default BankAccount;
