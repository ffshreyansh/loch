'use client'
import React, { useState } from 'react';

const page = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleTransfer = () => {
    if (isValidEmail(email)) {
      // Email is valid, redirect to the link
      window.location.href = "https://app.loch.one/welcome";
    } else {
      // Email is not valid, show an error message
      setErrorMessage("Please enter a valid email.");
    }
  };
  return (
    <div>
      <div class="flex flex-col lg:flex-row h-screen">
        <div class="w-full lg:w-1/2 h-fit lg:h-screen relative d1">
          <div class="bg-black absolute inset-0 z-0"></div>

          <div class="bgR py-3 lg:py-8 pl-3 lg:pl-11 relative z-10 h-full">
            <div className='flex flex-col h-full justify-between'>
              <div className='flex items-center justify-between w-full gap-4 '>
                <div className='w-1/2 flex flex-col gap-2 '>
                  <img src="/bell.svg" className='w-6 h-6' alt="bell icon" />
                  <p className='text-sm md:text-lg lg:text-3xl font-bold tt1 text-white strokeT'>Get notified when a highly correlated whale makes a move</p>
                  <p className='smT md:text-xs lg:text-sm text-gray-400'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
                </div>
                <div class="w-1/2 flex items-center gap-3 overflow-x-scroll rounded-s-xl scrl px-4 lg:px-10 relative">

                  <div class="c1 rounded-xl w-56 h-32 lg:h-40 p-4 flex flex-col gap-2 cursor-pointer">
                    <span class="flex items-start justify-between">
                      <img src="/bell2.svg" alt="bell2" className='w-4 lg:w-auto' />
                      <span class="smT lg:sv">Save</span>
                    </span>
                    <p class="text-xs md:text-sm leading-4 lg:text-md font-medium w-40 lg:leading-4 select-none">We’ll be sending notifications to you here</p>
                    <input type="text" placeholder="hello@gmail.com" class="border-2 bg-white w-full px-3 h-7 lg:h-10 rounded-md text-xs lg:text-sm text-black" disabled />
                  </div>
                  <div class="c2 rounded-xl w-56 h-32 lg:h-40 p-4 flex flex-col justify-between">
                    <span class="flex items-start justify-between">
                      <img src="/an.svg" alt="bell2" className='w-4 lg:w-auto' />
                      <input type="checkbox" />
                    </span>
                    <span className='flex flex-col gap-2'>
                    <p class="text-xs md:text-sm leading-4 lg:text-md font-medium w-40 lg:leading-4 select-none">Notify me when any wallets move more than</p>
                    <select className="border-2 bg-white w-full px-3 h-7 lg:h-10 rounded-md text-xs lg:text-sm ">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                    </span>

                  </div>
                  <div class="c3 rounded-xl w-56 h-32 lg:h-40 p-4 flex flex-col justify-between">
                    <span class="flex items-start justify-between">
                      <img src="/an.svg" alt="bell2" className='w-4 lg:w-auto' />
                      <input type="checkbox" />
                    </span>
                    <span className='flex '>
                    <p class="text-xs md:text-sm leading-4 lg:text-md font-medium w-40 lg:leading-4 select-none">Notify me when any wallet dormant for 
                    <span>
                    <select className="border-2 bg-white rounded-md text-xs lg:text-sm ">
                      <option value="option1">{`>30 days`}</option>
                      <option value="option2">{`<30 days`}</option>
                    </select>
                    </span> 
                     becomes active
                     </p>
                    
                    </span>

                  </div>
                </div>

              </div>
              <div className='flex items-center justify-between gap-4 lg:gap-10 mt-2 lg:mt-10'>
                <img src="/c.png" alt="image" className='w-1/2 lg:w-1/3' />
                <div className='flex flex-col gap-2 pr-3 lg:pr-10'>
                  <img src="/eye.svg" className='w-6 h-6 ml-auto' alt="bell icon" />
                  <p className='text-sm leading-4 md:text-3xl lg:text-3xl font-medium text-white text-right'>Watch what the <br /> whales are doing</p>
                  <p className='smT md:text-sm md:w-2/3 md:ml-auto lg:text-sm text-gray-400 text-right lg:w-64 lg:ml-auto' >All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
                </div>

              </div>
              <div className='flex flex-col items-center justify-between gap-5'>
                <div className='pr-3 lg:pr-10 w-full text-right mt-0 lg:mt-3'>
                  <p className='text-right text-white text-sm lg:text-xl font-medium border-b pb-2 w-full '>Testimonials</p>
                </div>
                <div className='flex items-end  w-full gap-1'>
                  <img src="/logo.svg" alt="logo" />
                  <div class="w-full overflow-x-scroll px-10 scrl rounded-s-xl">
                    <div class="flex space-x-4">

                      {/* Testimonials 1 */}


                      <div class="max-w-xs h-24 lg:h-32 flex-shrink-0">
                        <div className='flex flex-col items-start gap-2 bg-white h-24 lg:h-32 rounded-xl p-4'>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-sm lg:text-md'>Jack F</span>
                            <span className='text-xs text-gray-400'>Ex Blackrock PM</span>
                          </div>
                          <span className='text-xs md:text-sm lg:text-sm font-medium break-words'>
                            “Love how Loch integrates portfolio analytics and whale watching into one unified app.”
                          </span>
                        </div>
                      </div>
                      <div class="max-w-xs h-24 lg:h-32 flex-shrink-0">
                        <div className='flex flex-col items-start gap-2 bg-white h-24 lg:h-32 rounded-xl p-4'>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-sm lg:text-md'>Yash P</span>
                            <span className='text-xs text-gray-400'>Research, 3poch Crypto Hedge Fund</span>
                          </div>
                          <span className='text-xs md:text-sm lg:text-sm font-medium break-words'>
                          “I use Loch everyday now. I don't think I could analyze trends markets without it. I'm addicted!”
                          </span>
                        </div>
                      </div>
                      <div class="max-w-lg h-24 lg:h-32 flex-shrink-0">
                        <div className='flex flex-col items-start gap-2 bg-white h-24 lg:h-32 rounded-xl p-4'>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-sm lg:text-md'>Shiv S</span>
                            <span className='text-xs text-gray-400'>Co-Founder Magik Labs</span>
                          </div>
                          <span className='text-xs lg:text-sm font-medium break-words'>
                          “Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 h-screen bg-white flex items-center justify-center d2 z-20">
          <div class="w-2/3 lg:w-1/2 space-y-3 h-fit">
            <p className='leading-5 lg:mb-3 text-lg md:text-xl lg:text-4xl text-left font-medium text-gray-400'>Sign up for <br /> exclusive access</p>
            <input
              type="text"
              placeholder="Your email address"
              class="w-full h-9 lg:h-12 rounded-md px-4 border-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button class="text-white bg-black w-full h-9 lg:h-12 rounded-md" onClick={handleTransfer}>
              Get Started
            </button>
            {errorMessage && <p className='text-md font-semibold text-center text-red-500 mt-2'>{errorMessage}</p>}
            <p className='text-xs lg:text-md font-semibold text-center mt-8'>You’ll receive an email with an invite link to join.</p>
          </div>
        </div>
      </div>
    </div >

  )
}

export default page