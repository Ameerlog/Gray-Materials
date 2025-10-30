import React, { useState } from "react";
import { Phone, Mail, MapPin, Loader, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    companyname:'',
    phonenumber:'',
    city:'',
    state:'',
    requirements:''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

     try {
      
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/244057338/8496364f-54e5-4292-9b18-139e01d830e5',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: Object.entries(formData).map(([name, value]) => ({
            name,
            value
          })),
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      })

      if(response.ok){
        setIsSubmitted(true)
        setFormData({
          firstname:'',
          lastname:'',
          email:'',
          companyname:'',
          phonenumber:'',
          city:'',
          state:'',
          requirements:''
        })
      } else {
        setSubmitError('Failed to submit form. Please try again.')
      }
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.')
    }
     setIsSubmitting(false)
  }

    if (isSubmitted) {
      return (
        // <Section id="contact">
          <div className="py-20">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-12"
              >
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We've received your message and will get back to you within 24 hours with a personalized action plan.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-300 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            </div>
          </div>
        // </Section>
      )
    } 
  


  return (
   <section className="bg-gray-50 dark:bg-zinc-900 py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-7xl md:text-4xl font-bold sm:text-3xl text-zinc-900 dark:text-white">
            Contact our <span className="text-blue-600 ">Friendly team</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 mt-3">
            Ready to start? Let’s chat about how we can help.
          </p>
        </motion.div>

 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-gray-200 dark:border-zinc-700 p-8"
          >
            <motion.form
              initial={{ opacity: 0 }}
              onSubmit={handleSubmit}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >

          
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
              </div>

      
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                />
              </motion.div>

  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyname"
                    placeholder="Company Name"
                    value={formData.companyname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phonenumber"
                    placeholder="+91 9876543210"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                    pattern="^\+?\d{0,15}$"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all cursor-pointer"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Requirements
                </label>
                <textarea
                  rows="4"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  placeholder="Tell about your requirements..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all resize-none cursor-pointer"
                ></textarea>
              </motion.div>

   
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin w-5 h-5 mr-2" />
                      Submitting...
                  </>
                ) : (
                  <>
                    Continue
                  </>
                )}
               
              </motion.button>
            </motion.form>

     
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            >
              <div className="hover:scale-105 transition-transform duration-200">
                <Phone className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  080 - 8575 8575
                </p>
              </div>
              <div className="hover:scale-105 transition-transform duration-200">
                <Mail className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  info@graymaterial.com
                </p>
              </div>
              <div className="hover:scale-105 transition-transform duration-200">
                <MapPin className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Hubli, Karnataka
                </p>
              </div>
            </motion.div>
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15389.253188842828!2d75.11395208060357!3d15.359509713230663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d736cf492201%3A0x9523e2cb14e7e318!2sMarvel%20Artiza!5e0!3m2!1sen!2sin!4v1754886633841!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "550px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gray Material Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
