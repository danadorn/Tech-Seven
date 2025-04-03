import img1 from '../../../src/assets/img1.png'
import img2 from '../../../src/assets/img2.png'
import logo1 from '../../../src/assets/logo1.png'
import img3 from '../../../src/assets/img3.png'
import logo2 from '../../../src/assets/logo2.png'
import img4 from '../../../src/assets/img4.png'
import logo3 from '../../../src/assets/logo3.png'


export default function Aboutus() {
    return(
       <>
       <div className="bg-[#f8f4ff] p-8">
            <div className="max-w-6xl mx-auto grid gap-6">
                {/* Section 1 */}
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-black text-white p-6 rounded-lg">
                    <div>
                        <h2 className="text-3xl font-bold mb-10 ">A Family That Keeps On Growing</h2>
                        <p className="mt-2 text-sm ">
                        We always aim to please the home market, supplying great computers smart phone tap late iWatch PC and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                        Shop management approach fosters a strong customer service focus in our staff.
                        We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <img 
                            src={img1}
                            alt="Office"
                            className="w-[60%] rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                </section>

                {/* Section 2 */}
                
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg">
                <div className='flex justify-center'>
                        <img 
                            src={img2}
                            alt="Office"
                            className="w-[50%] rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <div className='flex'>
                        <img 
                            src={logo1}
                            alt="Office"
                            className="w-[12%]"
                        />
                        <h2 className="text-4xl font-bold mb-10 ">Tech-7</h2>
                        </div>
                    
                        <p className="mt-2 text-sm ">
                        T-7.com is a proudly USA owned, Melbourne based supplier of I.T. goods and services, operating since 2025. Our client base encompasses individuals, small business, corporate and government organizations. We provide complete business IT solutions, centered on high quality hardware and exceptional customer service.
                        </p>
                    </div>
                   
                </div>

                </section>
                {/* Section 3 */}
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-black text-white p-6 rounded-lg">
                    <div>
                    <div className='flex'>
                        <img 
                            src={logo2}
                            alt="Office"
                            className="w-[10%]"
                        />
                        <h2 className="text-4xl font-bold mb-10 ">Now You're In Safe Hands</h2>
                        </div>
                        <p className="mt-2 text-sm ">
                        Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                        *Performance compared to i7-9700. Specs varies by model.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <img 
                            src={img3}
                            alt="Office"
                            className="w-[60%] rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                </section>

                {/* Section 4 */}
                <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg">
                <div className='flex justify-center'>
                        <img 
                            src={img4}
                            alt="Office"
                            className="w-[50%] rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <div className='flex'>
                        <img 
                            src={logo3}
                            alt="Office"
                            className="w-[10%]"
                        />
                        <h2 className="text-3xl font-bold mb-10 ">The Highest Quality of Products</h2>
                        </div>
                    
                        <p className="mt-2 text-sm ">
                        We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                        </p>
                    </div>
                   
                </div>
                </section>
            </div>

            {/* section 5 */}
            <section>
                <div className='text-4xl flex justify-center'>
                    <h2>Mentor</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg'>
                
                </div>
            </section>

            {/*  sectiont our team */}

                <div className='text-4xl flex justify-center'>
                    <h2>our team</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-gray-100 text-gray p-6 rounded-lg'>
                
                </div>

             {/*  section contact us */}
        <section>
        <div>
        <section>
        <h3 className='text-[30px] font-medium pl-[90px] max-sm:pl-[15px]'>Contact Us</h3>
      <h3 className='pl-[75px] mt-[20px] max-sm:pl-[15px]'>We love hearing from you, Our shop customers. <br />Please contact us and we will make sure to get back to you soon as we possible can.</h3>
      <div className='flex mt-[20px] pl-[75px] max-sm:pl-[15px] max-sm:flex-col'>
        <div className='w-[50vw]  mb-[45px] max-sm:w-[100vw]'>
            <h3 className='font-medium mb-[5px]'>Your Name</h3>
            <label htmlFor="name" className='border-1 pb-[30px]'><input type="text" placeholder='Your Name' className='w-[90%] pb-[30px]' /></label>
        </div>
        <div className=' w-[50vw] mb-[45px] max-sm:w-[100vw]'>
            <h3 className='font-medium mb-[5px]'>Your Email</h3>
            <label htmlFor="name" className='border-1 w-[45vw] pb-[30px]'><input type="text" placeholder='Your Email'  className='w-[90%] pb-[30px]'/></label>
        </div>
      </div>
      <div className=' w-[50vw] pl-[75px]  mb-[40px] max-sm:pl-[15px] max-sm:w-[100vw]'>
            <h3 className='font-medium mb-[5px]'>Your Phone Number</h3>
            <label htmlFor="name" className='border-1 pb-[30px]'><input type="text" placeholder='Your Phone number' className='w-[95%] pb-[30px]' /></label>
      </div>
      <div className=' w-[100vw] h-[210px] pl-[75px] max-sm:pl-[15px]'>
            <h3 className='font-medium mb-[5px]'>What on your mind?</h3>
            <label htmlFor="name" className='border-1 pb-[150px] '><input type="text" placeholder='Got us a note and we will get back you as quick as possible' className='w-[95%]  pb-[150px]' /></label>
      </div>
      <button className='bg-blue-600 mt-[10px] py-[10px] px-[70px] rounded-4xl ml-[75px] text-white font-medium '>Submit</button>
        </section>
      
    </div>

        </section>
        </div>

       
       </>
    )
}
