import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const[amount,setAmount]=useState(0);
  const[from,setFrom]=useState('usd');
  const[to,setTo]=useState('inr');
  const[convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);
  console.log(currencyInfo);
  const options=Object.keys(currencyInfo);
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert=()=>setConvertedAmount(amount*currencyInfo[to]);

  return (
    <div className='flex flex-col content-center justify-center'>
    <h1 className='bg-black text-white self-center'>Currency converter</h1>
    <InputBox
      label='from'
      amount={amount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>{
          setFrom(currency);
        }
      }
      selectedCurrency={from}
      onAmountChange={(amount)=>{
        setAmount(amount);
        //setConvertedAmount(amount*currencyInfo[to]);
      }}
    />
    <button
      onClick={swap}
    >Swap</button>
    <InputBox
      label='to'
      amount={convertedAmount}
      currencyOptions={options}
      amountDisable
      onCurrencyChange={(currency)=>setTo(currency)}
      selectedCurrency={to}
    />
    <button
      onClick={convert}
    >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
    </div>
  )
}

export default App
