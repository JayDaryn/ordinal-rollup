import SectionWrapper from "@/components/SectionWrapper"
import { useEffect, useCallback, useState } from 'react'
import { 
    OrdConnectKit,
    useSend,
    useSign,
    useBalance,
    useSignMessage,
    useOrdConnect,
    Network
} from "@ordzaar/ord-connect";
import Image from "next/image"
import HeroImg from "@/public/images/logo.png"

const tableItems = [
    {
        name: "Solo learn app",
        date: "Oct 9, 2023",
        status: "Confirmed",
        price: "100",
        plan: "0.1"
    },
    {
        name: "Window wrapper",
        date: "Oct 12, 2023",
        status: "Confirmed",
        price: "200",
        plan: "0.2"
    },
    {
        name: "Unity loroin",
        date: "Oct 22, 2023",
        status: "Canceled",
        price: "330",
        plan: "0.33"
    },
    {
        name: "Background remover",
        date: "Jan 5, 2023",
        status: "Confirmed",
        price: "600",
        plan: "0.6"
    },
    {
        name: "Colon tiger",
        date: "Jan 6, 2023",
        status: "Confirmed",
        price: "900",
        plan: "0.9"
    },
]

const VisualFeatures = () => {
    const [isMounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    const { send, error: sendError, loading: isSending } = useSend();
    const {
      getBalance,
      error: balanceError,
      loading: isLoadingBalance,
    } = useBalance();
    const { sign, error: signPsbtError } = useSign();
    const { signMsg, error: signMessageError } = useSignMessage();
    const [result, setResult] = useState("");
    const [balance, setBalance] = useState(undefined);
    const [amountBTC, setAmountBTC] = useState(0);
    const [amountORC, setAmountORC] = useState(0);
    const [gas, setGas] = useState(120);
  
    const { address, wallet } = useOrdConnect();
  
    const handleCheckBalance = useCallback(async () => {
      const walletBalance = await getBalance();
      setBalance(walletBalance);
    }, [getBalance]);

    const handleSetAmount = (value) => {
        setAmountBTC(value);
        setAmountORC(value*1000)
      }
  
    const handleSend = useCallback(async () => {
        return
      const txId = await send(
        "tb1qgypdud5xr0x0wugf5yv62z03ytkwxusjwsr9kq",
        1000,
        10,
      );
      if (txId) {
        setResult(txId);
      }
    }, [send]);
  
  
    const handleSignMessage = useCallback(async () => {
      if (!address.ordinals) {
        throw new Error("No payment address");
      }
  
      const signed = await signMsg(
        address.ordinals,
        "Authenticate this message to access all the functionalities of Ordzaar. By using Ordzaar implies your consent to our user agreement.\n\nDomain: ordzaar.com\n\nBlockchain: Bitcoin \n\nAccount:\ntb1q82avu57rf0xe4wgrkudwa0ewrh7mfrsejkum3h\n\nNonce: 4NfCJ3FEDQ",
      );
      console.log(signed);
    }, [address.ordinals, signMsg]);
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                <div className=" mx-auto text-center">
                    
                    <div className="">

                    {isMounted && (<div>
                        <div>
                        {address?.ordinals ? (<>
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl text-left">
                                    Account Summary:
                                </h2>
                        <div className="lg:flex lg:flex-row lg:space-x-2 w-full flex-1 my-5">
                        <article
                                class="flex items-center gap-4 w-full rounded-lg border border-gray-100 bg-white p-6 mb-2"
                                >
                                <span class="rounded-full bg-blue-100 p-3 text-blue-600">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                    </svg>
                                </span>

                                <div>
                                    <p class="text-2xl font-medium text-gray-900 text-left">0 $BTC</p>

                                    <p class="text-sm text-gray-500 text-left">Total Invested</p>
                                </div>
                                </article>

                                <article
                                class="flex items-center gap-4 w-full rounded-lg border border-gray-100 bg-white p-6 justify-between mb-2"
                                >
                                <span class="rounded-full bg-blue-100 p-3 text-blue-600 sm:order-last">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                    </svg>
                                </span>

                                <div>
                                    <p class="text-2xl font-medium text-gray-900 text-left">0 $ORC</p>

                                    <p class="text-sm text-gray-500 text-left">Total Claim (BRC-20)</p>
                                </div>
                            </article>
                            </div>
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl mt-10 text-left">
                                Join Pre-Sale:
                            </h2>
                            <div>
                                {balanceError ? <p>Wallet Balance Error: {balanceError}</p> : null}
                                {result ? <p>Transaction ID: {result}</p> : null}
                                
                                {signMessageError ? (
                                <p>Sign Message Error: {signMessageError}</p>
                                ) : null}
                                
                                {isSending ? <p>Sending</p> : null}
                                {sendError ? <p>Send Error: {sendError}</p> : null}
                            </div>
                            <article class="lg:flex lg:items-center gap-4 w-full rounded-lg border border-gray-100 bg-white p-6 my-5  justify-between">
                                <div className="lg:flex lg:flex-row">
                                <div>
                                <label
                                    for="amount"
                                    class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 text-left"
                                >
                                    <span class="text-xs font-medium text-gray-700"> You Pay ($BTC) </span>

                                    <input
                                        type="number"
                                        id="amount"
                                        value={amountBTC}
                                        onChange={(e)=>handleSetAmount(e.target.value)}
                                        placeholder="0.13"
                                        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-700"
                                    />
                                </label>

                                </div>
                                                                
                                <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                                <button
                                    class={gas === 80 ? 
                                        "inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative" :
                                        "inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                                    }
                                    onClick={()=>setGas(80)}
                                >
                                    Slow <br/> 80 Sats
                                </button>
                                <button
                                    class={gas === 120 ? 
                                        "inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative" :
                                        "inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                                    }
                                    onClick={()=>setGas(120)}
                                >
                                    Normal <br/> 120 Sats
                                    
                                </button>
                                <button
                                    class={gas === 200 ? 
                                        "inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative" :
                                        "inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                                    }
                                    onClick={()=>setGas(200)}
                                >
                                    Fast <br/> 200 Sats
                                </button>

                                
                                </div>
                                </div>
                                <div className="lg:flex lg:flex-row space-x-5">
                                <div>
                                    <p class="text-sm text-gray-500 lg:text-left">You Get</p>
                                    <p class="text-2xl font-medium text-gray-900 lg:text-left">{amountORC} $ORC</p> 
                                </div>
                                <button
                                    className="px-5 py-2.5 text-white bg-indigo-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2"
                                    onClick={handleSend}
                                    disabled={isSending}
                                >
                                    {isSending ? 'Loading...' : 'Confirm'}
                                </button>
                                </div>
                            </article>
                            
                            {/* <p>Connected Address: {address.ordinals ?? ""}</p>
                            {typeof balance === "number" || isLoadingBalance ? (
                            <p>
                                Wallet Balance: {isLoadingBalance ? "Loading" : `${balance} sats`}
                            </p>
                                ) : null}
                            <div>
                                <button className=" text-black p-2 bg-white rounded-full m-3" type="button" onClick={handleCheckBalance}>
                                Check balance
                                </button>
                                <button className=" text-black p-2 bg-white rounded-full m-3" type="button" onClick={handleSend}>
                                Send money
                                </button>
                                <button className=" text-black p-2 bg-white rounded-full m-3" type="button" onClick={handleSignMessage}>
                                Sign message
                                </button>
                            </div> */}
            
                            
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl mt-10 text-left">
                                    History:
                                </h2>
                            <div className="my-5 shadow-sm border rounded-lg overflow-x-auto">
                                <table className="w-full table-auto text-sm text-left">
                                    <thead className="bg-gray-100 text-gray-600 font-medium ">
                                        <tr>
                                            <th className="py-3 px-6">Date</th>
                                            <th className="py-3 pr-6">Status</th>
                                            <th className="py-3 pr-6">Amount ($BTC)</th>
                                            <th className="py-3 pr-6">Amount ($ORC)</th>
                                            <th className="py-3 pr-6">TX Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 divide-y bg-white">
                                        {
                                            tableItems.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                                    <td className="pr-6 py-4 whitespace-nowrap">
                                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Confirmed" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td className="pr-6 py-4 whitespace-nowrap">{item.plan}</td>
                                                    <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                                    <td className="pr-6 whitespace-nowrap">
                                                        <a href="#" className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                        ) : (
                            <>
                            <Image
                            src={HeroImg}
                            className="mx-auto max-w-lg w-1/3 mb-4"
                            alt="logo"
                        />
                                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                    Join our Pre-Sale &amp; Earn Airdrops!
                                </h2>
                                <p className="mt-3 mb-10">
                                    Our pre-sale in now LIVE. Join early for up to 10% yields.
                                </p>
                                <OrdConnectKit/>
                            </>
                        )}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </SectionWrapper>
    )
}

export default VisualFeatures