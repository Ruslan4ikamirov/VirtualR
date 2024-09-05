import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2" key={index}>
                    <div className="border border-neutral-700 p-10 rounded-xl">
                        <p className="text-4xl mb-8">
                        {option.title}
                        {option.title === 'Pro' && <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2"> (Most popupar)</span>}
                        </p>
                        <p className="mb-8 ">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center w-fuul h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 transition-colors delay-300 duration-500 ease-in border border-orange-900 rounded-lg">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing;
