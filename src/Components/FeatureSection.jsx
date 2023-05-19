import React from 'react';

const FeatureSection = ({ flip }) => {
  const containerClassName = flip ? 'flex-row-reverse' : 'flex-row';

  return (
    <>
    {/* Card 1 */}
    <section className={`max-w-[1/3] px-4 flex justify-between items-center text-white opacity-80 ${containerClassName}`}>
       {/* Image */}
      <div className='w-[50%] justify-start'>
        <img
          src="/landingimage.jpg"
          alt="Picture of the author"
          className="w-[600px] h-[600px] object-cover opacity-70 rounded-l-lg"
        />
      </div>
      {/* Text */}
      <div className='p-4 h-[400px] w-[50%] flex flex-col justify-end text-start'>
        <h1 className="heading xxl:text-5xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80 mb-[100px] items-end">
          Feature
        </h1>
        <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80 max-w-[70%] items-end">
          Experience luxury and performance like never before with Porche's iconic lineup of precision-engineered vehicles.
        </h1>
        <div className="flex justify-center items-center gap-2 opacity-100 sm:flex-row xxs:flex-col">
          <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[130px]">
            Try now
          </button>
          <button className="px-8 py-3 bg-gray-700 text-white rounded-md min-w-[130px]">
            Learn more
          </button>
        </div>
      </div>
    </section>
     {/* Card 2 */}
     <section className={`max-w-[1/3] px-4 flex justify-between items-center text-white opacity-80 ${containerClassName}`}>
     <div className='p-4 h-[400px] w-[50%]'>
         <h1 className="heading xxl:text-5xl sm:text-5xl xs:text-3xl xxs:text-xl text font-semibold opacity-80 mb-[100px]">
           Feature
         </h1>
         <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80 max-w-[70%]">
           Experience luxury and performance like never before with Porche's iconic lineup of precision-engineered vehicles.
         </h1>
         <div className="flex justify-center items-center gap-2 opacity-100 sm:flex-row xxs:flex-col">
           <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[130px]">
             Try now
           </button>
           <button className="px-8 py-3 bg-gray-700 text-white rounded-md min-w-[130px]">
             Learn more
           </button>
         </div>
       </div>
       <div className='w-[50%] flex justify-end'>
         <img
           src="/landingimage.jpg"
           alt="Picture of the author"
           className="w-[600px] h-[600px] object-cover opacity-70 rounded-l-lg"
         />
       </div>
    
     </section>
    </>
  );
};

export default FeatureSection;