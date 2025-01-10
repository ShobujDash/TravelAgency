import { ContactFrom } from '@/components/userComponents/ContactForm';
import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import React from 'react'

const ContactPage = () => {
  return (
    <MasterLayout>
      <section className="py-4 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-2">
            <h2 className="text-4xl font-bold text-yellow-500">Contact Us</h2>
            <p className="mt-4 text-gray-700">
              Got questions? We’re here to help! Drop us a message, and we’ll
              get back to you as soon as possible.
            </p>
          </div>
          <div>
            <ContactFrom/>
        </div>
        </div>
      </section>
    </MasterLayout>
  );
}

export default ContactPage
