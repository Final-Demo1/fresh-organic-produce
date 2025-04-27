import React from 'react'; 
import cus1 from '../../assets/images/cus1.png'
import man from '../../assets/images/man.png'
import woman from '../../assets/images/woman.png'


const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-4 h-auto m-10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-950">What Clients Are Saying</h2>
        <p className="text-green-950 text-2xl mb-12">Real reviews from our amazing buyers</p>

        <div className="grid gap-8 md:grid-cols-3 text-white">
          <div className="bg-green-800 p-6 rounded-lg shadow-lg text-left">
            <div className="flex items-center mb-4">
              <img src={cus1} alt="" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-semibold">Adwoa Dadzie</p>
                <p className="text-sm ">Happy Customer</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className=" italic">“Absolutely amazing! When I say their Fruits and Veggies are long lasting, they really are even without fridge storage. Highly recommended.”</p>
          </div>

          <div className="bg-green-800 p-6 rounded-lg border border-green-950 shadow-md text-left">
            <div className="flex items-center mb-4">
              <img src={man} alt="" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-semibold">Ethan Simpson</p>
                <p className="text-sm">Client</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-white">★</span>
            </div>
            <p className="italic">“Very satisfied with the experience. Quick delivery and solid support!”</p>
          </div>

          <div className="bg-green-800 p-6 rounded-lg shadow-lg text-left">
            <div className="flex items-center mb-4">
              <img src={woman} alt="" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-semibold">Emily Tamakloe</p>
                <p className="text-sm">Frequent Buyer</p>
              </div>
            </div>
            <div className="flex text-yellow-500 mb-3">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="italic">“The freshness of their produce as well as taste is always truly organic. They always deliver top-notch quality.”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
