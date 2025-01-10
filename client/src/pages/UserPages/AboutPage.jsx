import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import React from 'react'
import image01 from "../../assets/image/Banner01.jpg"
import { SparklesCore } from '@/components/ui/sparkles';
import travel from "../../assets/image/travelimage.webp"
import intercom from "../../assets/image/company/intercom.png"
import clavin_klein from "../../assets/image/company/clavin_klein.png"
import felly_belly from "../../assets/image/company/felly_belly.png"
import forever_21 from "../../assets/image/company/forever_21.png"
import hello_fresh from "../../assets/image/company/hello_fresh.png"
import hermes from "../../assets/image/company/hermes.png"
import klarna from "../../assets/image/company/klarna.png"
import nike from "../../assets/image/company/nike.png"
import { MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa6";



const AboutPage = () => {
  return (
    <MasterLayout>
      <div className="bg-gray-900 text-white  bg-gradient-to-r from-[#19173B] via-[#0A2339] to-[#0C1529]">
        {/* Hero Section */}
        <div className="h-[15rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Know About{" "}
            <span className="text-blue-500">
              Travel<span className="text-yellow-600">24</span>
            </span>
          </h1>
        </div>

        {/* Statistics Section */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "55k+", label: "Transactions" },
              { value: "7k+", label: "Happy Clients" },
              { value: "1k+", label: "E-commerce Stores" },
              { value: "4+", label: "Years of Service" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-40"
              >
                <h3 className="text-3xl font-bold text-yellow-500">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-transparent px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                  <MdOutlineSecurity className="text-2xl text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-gray-300">Top-notch data protection.</p>
            </div>
            <div className="text-center bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                  <BiSupport className="text-2xl text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold">24/7 Support</h3>
              <p className="text-gray-300">Always available for you.</p>
            </div>
            <div className="text-center bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                  <FaFileInvoice className="text-2xl text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-300">Cutting-edge technology.</p>
            </div>
            <div className="text-center bg-gray-700 p-4 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto flex items-center justify-center">
                  <FaFileInvoice className="text-2xl text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-300">Cutting-edge technology.</p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">
            Use Only with 4 Easy Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal space-y-4 text-gray-300 pl-5">
                <li>Sign up and create an account.</li>
                <li>Integrate with your platform.</li>
                <li>Start accepting payments.</li>
                <li>Monitor transactions with ease.</li>
              </ol>
            </div>
            <div>
              <img
                src={travel}
                alt="Steps"
                className="rounded-lg shadow-lg w-56  h-72"
              />
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <section className="bg-blue-300 flex items-center justify-center my-10">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center my-4">
              <h1 className="text-center font-semibold text-black text-2xl">
                Trusted by{" "}
                <span className="font-extrabold text-black">25+</span> companies
                from
                <br />
                startups to enterprise
              </h1>
            </div>

            <div className="max-w-5xl text-white mx-auto px-2 sm:px-0 py-2 flex gap-3 mb-3 items-center justify-between">
              <div>
                <img src={intercom} alt="Intercom" />
              </div>
              <div>
                <img src={clavin_klein} alt="Calvin Klein" />
              </div>
              <div>
                <img src={felly_belly} alt="Felly Belly" />
              </div>
              <div className="hidden sm:block">
                <img src={forever_21} alt="Forever 21" />
              </div>
              <div className="hidden sm:block">
                <img src={hello_fresh} alt="Hello Fresh" />
              </div>
              <div className="hidden sm:block">
                <img src={hermes} alt="Hermes" />
              </div>
              <div className="hidden sm:block">
                <img src={klarna} alt="Klarna" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <div className="py-16 bg-transparent px-4 md:px-16 lg:px-32">
          <h2 className="text-2xl font-bold text-center mb-8">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg shadow-lg flex-1 text-black"
            />
            <button
              type="submit"
              className="bg-yellow-500 px-6 py-3 rounded-lg shadow-lg text-white font-bold hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
}

export default AboutPage
