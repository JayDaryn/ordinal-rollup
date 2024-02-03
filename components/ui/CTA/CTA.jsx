import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "@/public/images/bg-pattern.webp"
import LayoutEffect from "@/components/LayoutEffect"

const CTA = () => (
    <section>
        <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
            <div id="whitepaper" className="custom-screen py-28 relative">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="relative z-10">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                Unleash the Power of BTC with Ordinal Rollup!
                            </h2>
                            <p className="mt-5 text-gray-300">
                                Ordinal Rollup is the world's most secure and decentralized Smart Contract blockchain. Get the best of both worlds with a secure and scalable ecosystem.
                            </p>
                        </div>
                        <div className="mt-5 flex justify-center font-medium text-sm">
                            <NavLink
                                href="#"
                                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                            >
                                Whitepaper
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </LayoutEffect>
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    alt="Background pattern"
                />
            </div>
        </GradientWrapper>
    </section>
)

export default CTA