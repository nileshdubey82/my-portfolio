import React from 'react';

export default function ContactUs() {
  return (
    <section className='bg-[#F5F2F9] p-5 my-10'>
      <div className="max-w-md mx-auto mt-10 bg-[#F5F2F9]">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="mb-6 text-center">Please fill out the form below to get in touch with us.</p>
        <form className="space-y-6">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>
          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div>
              <label htmlFor="phone" className="block font-semibold">Contact Number</label>
              <input type="tel" id="phone" name="phone" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          {/* Inquiry Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Inquiry</h3>
            <div>
              <label htmlFor="purpose" className="block font-semibold">Purpose</label>
              <textarea id="purpose" name="purpose" rows="4" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit" className="bg-[#5f0bb8] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5f0bb860] focus:outline-none focus:bg-[#5f0bb860]">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
