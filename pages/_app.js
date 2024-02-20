import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Network, OrdConnectProvider, OrdConnectKit } from "@ordzaar/ord-connect";

export default function App({ Component, pageProps }) {
  const [isMounted, setMounted] = useState(false)
  useEffect(()=>{
    setMounted(true)
  },[])

  return (
    <OrdConnectProvider initialNetwork={Network.MAINNET}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </OrdConnectProvider>
  )
}
