import React from 'react';
import './nav.css';

function Nav() {
  return (
    <>
      <nav class="bg-color1">
          <div class="flex flex-wrap justify-between items-center max-w-screen-xl p-4">
              <a href="https://flowbite.com" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap color2">Flowbite</span>
              </a>
              <div class="flex items-center">
                  <a href="tel:5541251234" class="mr-6 text-sm color2 hover:underline">(555) 412-1234</a>
                  <a href="#" class="text-sm color2 hover:underline">Login</a>
              </div>
          </div>
      </nav>
    
      <nav class="bg-color2">
          <div class="max-w-screen-xl px-4 py-3">
              <div class="flex items-center justify-end">
                  <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                      <li>
                          <a href="#" class="text-gray-900 color4" aria-current="page">Home</a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-900 color4">Company</a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-900 color4">Team</a>
                      </li>
                      <li>
                          <a href="#" class="text-gray-900 color4">Features</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  )
}

export default Nav


