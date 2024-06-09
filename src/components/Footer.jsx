import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-5 mt-24">
      <div className="mx-auto max-w-screen py-16">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/5 mb-8 lg:mb-0">
            <img src="logo.png" alt="Company Logo" className="w-32" />
            <p className="mt-4 text-base text-gray-700 gap-4 flex items-center">
              <img src="mail.png" className="w-6" alt="mail" /> help@frybix.com
            </p>
            <p className="mt-2 text-base text-gray-700 gap-4 flex items-center">
              <img src="phone.png" className="w-6" alt="phone" /> +1 234 456 678
              89
            </p>
          </div>

          <div className="lg:flex lg:w-4/5 lg:justify-between">
            <div className="lg:w-1/5 mb-8 lg:mb-0">
              <p className="font-medium text-4xl text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 text-base transition hover:opacity-75"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/5 mb-8 lg:mb-0">
              <p className="font-medium text-gray-900 text-4xl">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/5 mb-8 lg:mb-0">
              <p className="font-medium text-gray-900 text-4xl">product</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Take Tour
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Reveiws
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/5 mb-8 lg:mb-0">
              <p className="font-medium text-gray-900 text-4xl">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Accessibility
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/5">
              <p className="font-medium text-gray-900 text-4xl">Newsletter</p>
              <div className="mt-6 space-y-4 text-sm">
                <p className="text-gray-700 text-lg">Stay up to date</p>
                <form className="flex flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded-md p-1 text-lg"
                  />
                  <button
                    type="submit"
                    className="px-2 bg-black py-4 text-white rounded-md text-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          {/* <p className="w-full text-center">Copyright 2022 uifry.com all rights reserved</p> */}
          <img src="footer.png" alt="footer" className="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
