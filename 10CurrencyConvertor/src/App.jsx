import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'


function App() {
 const [amount,setAmount] = useState(true)
 const [from , setFrom] = useState("inr")
 const [to , setTo] = useState("usd")
 const [convertedAmount , setConvertedAmount] = useState(true) 

//  custome hooks calling
 const currencyInfo = useCurrencyInfo(from)

 const options =  Object.keys(currencyInfo)

 //swaping values
 const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
 }

   const convert = () =>{
      setConvertedAmount(amount * currencyInfo[to])
   }
   let BackgroundImage = 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=400'

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className='glow text-shadow '>
                Currency Converter
            </div>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            {/* Component Calling  */}
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                onAmountChange={(amount)=> setAmount(amount)}
                                selectCurrency= {from}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                          
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-80 bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <button
                                type="button"
                                className=" border-2 border-hidden w-20 h-12  rounded-lg bg-blue-600 text-white px-2 py-0.5 ml-1"
                                onClick={swap}
                            >
                                swap
                            </button>
                    </form>
                </div>
            </div>
        </div>
      );
}

export default App
