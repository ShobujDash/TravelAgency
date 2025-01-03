// Footer Component
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Bkash from "../../assets/image/BkashCard.png"
import Dbbl from "../../assets/image/DBBL.jpeg"
import Master from "../../assets/image/master.png"
import Visa from "../../assets/image/visa.png"
import Rocket from "../../assets/image/Roucket.png"
import Nogod from "../../assets/image/Nogod.png"





export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Discover Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Discover</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Talent & Culture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                EMI Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Payment Methods Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src={Visa} alt="Visa" className="h-10" />
            <img src={Master} alt="Master" className="h-10" />
            <img src={Dbbl} alt="DBBL" className="h-10" />
            <img src={Nogod} alt="Nogod" className="h-10" />
            <img src={Rocket} alt="Rocket" className="h-10" />
            <img src={Bkash} alt="Bkash" className="h-10" />
          </div>
        </div>

        {/* Need Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
          <p className="mb-4 text-sm">
            We're here for you 24/7! Reach out to us through Messenger or call
            anytime, day or night, for the support you need.
          </p>
          <h4 className="font-semibold">Experience Center</h4>
          <p className="text-sm">
            Sheltech Ayaan,
            <br />
            House 58, Road 6 & 11,
            <br />
            Block C, Level 2, Banani, Dhaka
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">info@gozayaan.com</p>
          <p className="text-sm">+88 09678 332211</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:opacity-80 bg-gray-500 bg-transparent opacity-55 p-4 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:opacity-80 bg-gray-500 bg-transparent opacity-55 p-4 rounded-full"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:opacity-80 bg-gray-500 bg-transparent opacity-55 p-4 rounded-full"
            >
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-white pt-4">
        &copy; Copyright TravelWithUs Ltd.
      </div>
    </footer>
  );
};

export default Footer;
