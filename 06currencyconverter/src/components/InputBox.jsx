function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency='usd',
  amountDisable=false,
  currencyDisable=false
}){
  return(
    <div className="flex bg-gray-300 justify-evenly">
      <div className="flex flex-col">
        <label>{label}</label>
        <input 
        type='number'
        disabled={amountDisable}
        value={amount}
        onChange={(e)=>onAmountChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label>Currency Type</label>
        <select 
          value={selectedCurrency}
          onChange={(e)=>onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr)=>
            (
              <option key={curr} value={curr}>{curr}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox;