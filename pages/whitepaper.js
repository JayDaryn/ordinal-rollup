import Head from "next/head";
import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

export default function faq() {
    return (
        <>
      <Head>
        <title>Whitepaper</title>
      </Head>
    <SectionWrapper>
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Ordinal Rollup
                </h2>
                <p className="mt-3">
                    Whitepaper - Draft
                </p>
            </div>
            <div className='mt-12'>
                <h1 className="text-center font-bold">Abstract</h1>
                <p className="text-center py-5 pb-20">Ordinal Rollup aims to be the bridge that allows developers to build decentralized applications (dApps) and deploy smart contracts on the Bitcoin blockchain. Using a combination of Layer 2 scaling techniques inspired by Polygon and Ordinals inscriptions, Ordinal Rollup seeks to bring versatility to Bitcoin without compromising its foundational security.When you create a wallet or deploy smart contract, you get a BTC address.</p>

                <h2 className="font-bold">1. Introduction:</h2>
                <p className="pb-8">Bitcoin, being the pioneering blockchain, has remained largely as a secure peer-to-peer digital currency. Ordinal Rollup endeavors to expand its potential by providing a framework that lets developers introduce dApps and smart contracts.</p>

                <h2 className="font-bold">2. Key Features:</h2>
                <p className="pb-8">
                - dApp and Smart Contract Support: Ordinal Rollup is designed to fully support dApp development and the deployment of smart contracts, bringing enhanced functionality to Bitcoin.<br/>
                - Scalability: Increased transaction throughput, making it suitable for dApps that require high frequency and volume.<br/>
                - Security: Uses Ordinals inscriptions for periodic checkpointing onto the Bitcoin mainnet.<br/>
                - Interoperability: Seamless interaction with BRC-20 tokens and existing Bitcoin protocols.
                </p>

                <h2 className="font-bold">3. Architecture:</h2>
                <p className="pb-8">
                - Ordinal Rollup Virtual Machine (BVM): Inspired by Ethereum's EVM, BVM will allow the execution of smart contracts on Ordinal Rollup.<br/>
                - Validators: Nodes responsible for confirming transactions and contract executions on Ordinal Rollup chains.<br/>
                - Ordinals Sync Module: Ensures that the state of Ordinal Rollup chains is periodically recorded onto the Bitcoin mainnet via Ordinals inscriptions.
                </p>

                <h2 className="font-bold">4. Smart Contract Mechanism:</h2>
                <p className="pb-8">
                - Deployment: Developers can deploy contracts on Ordinal Rollup, which are then executed by the BVM.<br/>
                - Interactions: Contracts can interact with Bitcoin and BRC-20 tokens, enabling complex dApp functionalities on top of Bitcoin's security.
                </p>

                <h2 className="font-bold">5. dApp Development Environment:</h2>
                <p className="pb-8">
                - Ordinal Rollup SDK: A set of development tools to facilitate the creation of dApps on Ordinal Rollup.<br/>
                - Token Integration: dApps can integrate with BRC-20 or introduce their own tokens on Ordinal Rollup.
                </p>

                <h2 className="font-bold">6. Security:</h2>
                <p className="pb-8">
                - Double Validation: Ensuring contract executions are valid on Ordinal Rollup and then confirming their state on the Bitcoin mainnet through Ordinals.<br/>
                - Fraud Proofs: Mechanisms to challenge any incorrect state transitions or contract outcomes.
                </p>

                <h2 className="font-bold">7. Future Work & Conclusion:</h2>
                <p className="pb-8">
                Ordinal Rollup's vision is to evolve with the needs of the developer community and the wider cryptocurrency ecosystem. We foresee a future where Bitcoin isn't just a digital gold but also a hub for innovative decentralized applications, and Ordinal Rollup will be the cornerstone of that vision.
                </p>
            </div>
        </div>
    </SectionWrapper>
    </>
)}