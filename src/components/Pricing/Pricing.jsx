//import React from 'react';
//import Price from './Price';

const Pricing=()=>{
  return (
    <div className="flex flex-col mx-auto pt-20 2xl:container ">
      <div className="flex items-center justify-center ">
        <button className="flex items-center justify-center p-2 text-sm font-semibold text-gray-700 border border-orange-100 rounded-3xl hover:shadow-orange-50 hover:shadow-xl gap-x-2">
          Rated 4.5 <span className="material-symbols-outlined text-yellow-900">star</span> on G2 Crowd <span className="material-symbols-outlined text-yellow-900">arrow_outward</span>
        </button>
      </div>
      
      <div className="flex items-center justify-center">
        <p className="font-sans text-3xl md:text-5xl font-bold leading-[50px] md:leading-[70px] text-center">Find your perfect plan</p>
      </div>
      <div className="flex items-center justify-center mb-15">
        <p className="text-center w-[90%] md:w-[58%] text-gray-500">
          Sign up for free to get started with all products. Credits can be spent on any product, including creator analytics, creator contacts, and reporting.
        </p>
      </div>
      
  
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="font-sans text-3xl md:text-4xl font-bold text-center">More Power with Credits</p>
        <p className="text-center text-gray-500 mt-4">Credits can be spent on any product, including lead lists, technology looksups, and APIs.</p>
      </div>
      
      <div className="flex flex-col md:flex-row mt-10">
        <table className="w-full md:w-2/3 ml-0 md:ml-44 table-auto">
          <tbody>
            {[
              { label: "For Creator analytics", value: "1 Credit / valid for 30 days" },
              { label: "For Creator contact or cost", value: "1 Credit" },
              { label: "For Message or first interaction", value: "1 Credit / creator" },
              { label: "For Media planner", value: "1 Credit / for directly adding creators" },
              { label: "For Creator comparison", value: "1 Credit / per creator valid up to 30 days" },
              { label: "For Reports", value: "1 Credit / creator for one report" },
              { label: "For Competitor intelligence", value: "1 Credit / for 5 posts tracked" },
            ].map((item, index) => (
              <tr key={index} className="text-base text-gray-700"> 
                <td className="py-2 px-2">{item.label}</td>
                <td className="py-2 px-2">
                  <span className="text-indigo-600 font-semibold">1 Credit</span> <span className="text-gray-700 font-normal">{item.value.substring(9)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-0 w-full md:w-2/3 mt-4 md:mt-0"> 
          <img src="https://ik.imagekit.io/zcdsz07ad/BigLinkz/pricing.png?updatedAt=1726986414992" alt="Pricing Image" className="w-full h-auto" />
        </div>
      </div>

      <div className="mx-auto bg-orange-50 2xl:container h-[50%] mt-20">
        <div className="flex justify-center items-center p-[30px] rounded-xl flex-col gap-y-6">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold w-[90%] md:w-[80%] mt-5 text-center pt-4">Ready to Take Your Creator Marketing To the Next Level?</h2>
          </div>
          <div>
            <p className="text-gray-600 text-center">
              Launch your creator marketing campaigns using the largest creator database, 
              deep audience analytics and competitor analysis.
            </p>
          </div>
          <div>
            <button className="flex gap-2 p-3 font-semibold text-white bg-orange-500 rounded-xl">
              Request For Demo<span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;