import { Link } from "react-router-dom";
import LogoFlower from '../../assets/logo-flower.png';
import "./nav.css";

function Nav() {
  return (
    <>
      <nav className='bg-neutral-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <a href='https://flowbite.com' className='flex items-center'>
            <img
              src={LogoFlower}
              className='w-12 rounded-full mr-3'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap color2'>
              Bloomify
            </span>
          </a>
          <div className='flex items-center'>
            <a
              href='tel:5541251234'
              className='mr-6 text-sm color2 hover:underline'
            >
              (555) 412-1234
            </a>
            <a href='#' className='text-sm color2 hover:underline'>
              Login
            </a>
          </div>
        </div>
      </nav>

      <nav className="bg-neutral-700">
          <div className="max-w-screen-xl px-4 py-3">
              <div className="flex items-center justify-end">
                  <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                      <li>
                          <a href="#" className="text-emerald-400 font-semibold hover:text-white hover:underline" aria-current="page">Home</a>
                      </li>
                      <li>
                          <a href="#" className="text-emerald-400 font-semibold hover:text-white hover:underline">Company</a>
                      </li>
                      <li>
                          <a href="#" className="text-emerald-400 font-semibold hover:text-white hover:underline">Team</a>
                      </li>
                      <li>
                          <a href="#" className="text-emerald-400 font-semifold hover:text-white hover:underline">Features</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}

export default Nav;
