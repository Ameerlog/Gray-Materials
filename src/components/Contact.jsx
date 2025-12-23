import React, { useState, useRef, useEffect, useCallback } from "react";
import { Phone, Mail, MapPin, Loader, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ZOHO_FORM_ACTION = "https://forms.zohopublic.in/graymaterial1/form/contactus/formperma/QRXe8uTmyqi5dus5CsCMuVpUPvwIBGqyY-WGHd2i6-Q/htmlRecords/submit";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    companyname: '',
    phonenumber: '',
    city: '',
    state: '',
    requirements: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [touchedFields, setTouchedFields] = useState({});

  const formRef = useRef(null);


  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };


  const validateField = useCallback((name, value) => {
    let error = '';
    
    switch(name) {
      case 'firstname':
        if (!value.trim()) error = 'First name is required';
        else if (value.trim().length < 2) error = 'Minimum 2 characters';
        break;
      
      case 'lastname':
        if (!value.trim()) error = 'Last name is required';
        else if (value.trim().length < 1) error = 'Minimum 2 characters';
        break;
      
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(value)) error = 'Please enter a valid email';
        }
        break;
      
      case 'phonenumber':
        const digits = value.replace(/\D/g, '');
        if (!digits) {
          error = 'Phone number is required';
        } else if (digits.length !== 10) {
          error = 'Phone must be exactly 10 digits';
        }
        break;
      
      case 'state':
        if (!value.trim()) error = 'State is required';
        break;
      
      // case 'requirements':
      //   if (!value.trim()) {
      //     error = 'Requirements are required';
      //   } else if (value.trim().length < 10) {
      //     error = 'Minimum 10 characters required';
      //   }
      //   break;
    }
    
    return error;
  }, []);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let newValue = value;
    if (name === 'phonenumber') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      newValue = digitsOnly;
    }
    
    setFormData(prev => ({ ...prev, [name]: newValue }));
    

    if (touchedFields[name]) {
      const error = validateField(name, newValue);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
    
    if (submitError) setSubmitError('');
  };


  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);


  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      if (['firstname', 'lastname', 'email', 'phonenumber', 'state', 'requirements'].includes(field)) {
        const error = validateField(field, formData[field]);
        if (error) {
          errors[field] = error;
          isValid = false;
        }
      }
    });

    setFieldErrors(errors);
    
    if (!isValid) {
      setSubmitError('Please fill all the required fields before submitting.');
    }
    
    return isValid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTouchedFields({
      firstname: true,
      lastname: true,
      email: true,
      phonenumber: true,
      state: true,
      requirements: true
    });
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');

    try {
      if (formRef.current) {
        formRef.current.submit();
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };


  useEffect(() => {
    const iframe = document.getElementById('zoho_iframe');
    
    const handleIframeLoad = () => {
      if (isSubmitting) {
        setTimeout(() => {
          setIsSubmitted(true);
          setFormData({
            firstname: '', lastname: '', email: '', companyname: '',
            phonenumber: '', city: '', state: '', requirements: ''
          });
          setFieldErrors({});
          setTouchedFields({});
          setIsSubmitting(false);
        }, 1000);
      }
    };
    
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      return () => iframe.removeEventListener('load', handleIframeLoad);
    }
  }, [isSubmitting]);


  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 border rounded-lg transition-all";
    const colorClass = "bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100";
    
    if (touchedFields[fieldName] && fieldErrors[fieldName]) {
      return `${baseClass} ${colorClass} border-red-500 focus:ring-2 focus:ring-red-400 focus:border-red-500`;
    }
    
    if (touchedFields[fieldName] && !fieldErrors[fieldName] && formData[fieldName]) {
      return `${baseClass} ${colorClass} border-green-500 focus:ring-2 focus:ring-green-400 focus:border-green-500`;
    }
    
    return `${baseClass} ${colorClass} border-gray-300 dark:border-zinc-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400`;
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-12"
          >
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
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
    );
  }

  return (
    <>

      <iframe
        name="zoho_iframe"
        id="zoho_iframe"
        style={{ display: 'none', width: 0, height: 0, border: 'none' }}
        title="Zoho Form"
      />


      <form
        ref={formRef}
        action={ZOHO_FORM_ACTION}
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        target="zoho_iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="zf_referrer_name" value={typeof window !== 'undefined' ? window.location.href : ''} />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        
        <input type="hidden" name="Name_First" value={formData.firstname.trim()} />
        <input type="hidden" name="Name_Last" value={formData.lastname.trim()} />
        <input type="hidden" name="Email" value={formData.email.trim()} />
        <input type="hidden" name="SingleLine" value={formData.companyname.trim()} />
        <input type="hidden" name="PhoneNumber_countrycode" value={formData.phonenumber.replace(/\D/g, '')} />
        <input type="hidden" name="SingleLine1" value={formData.city.trim()} />
        <input type="hidden" name="SingleLine2" value={formData.state.trim()} />
        <input type="hidden" name="SingleLine3" value={formData.requirements.trim()} />
      </form>

      <section className="bg-gray-50 dark:bg-zinc-900 py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-bold sm:text-3xl text-zinc-900 dark:text-white">
              Contact our <span className="text-blue-600">Friendly team</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mt-3">
              Ready to start? Let's chat about how we can help.
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
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First name"
                      aria-required="true"
                      aria-invalid={touchedFields.firstname && !!fieldErrors.firstname}
                      aria-describedby={fieldErrors.firstname ? "firstname-error" : undefined}
                      className={getInputClassName('firstname')}
                    />
                    <AnimatePresence mode="wait">
                      {touchedFields.firstname && fieldErrors.firstname && (
                        <motion.p
                          id="firstname-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.firstname}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last name"
                      aria-required="true"
                      aria-invalid={touchedFields.lastname && !!fieldErrors.lastname}
                      aria-describedby={fieldErrors.lastname ? "lastname-error" : undefined}
                      className={getInputClassName('lastname')}
                    />
                    <AnimatePresence mode="wait">
                      {touchedFields.lastname && fieldErrors.lastname && (
                        <motion.p
                          id="lastname-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.lastname}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={touchedFields.email && !!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={getInputClassName('email')}
                  />
                  <AnimatePresence mode="wait">
                    {touchedFields.email && fieldErrors.email && (
                      <motion.p
                        id="email-error"
                        role="alert"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {fieldErrors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="companyname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      name="companyname"
                      placeholder="Company Name"
                      value={formData.companyname}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="phonenumber"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="987-654-3211"
                      value={formatPhoneNumber(formData.phonenumber)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength="12"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={touchedFields.phonenumber && !!fieldErrors.phonenumber}
                      aria-describedby={fieldErrors.phonenumber ? "phonenumber-error" : undefined}
                      className={getInputClassName('phonenumber')}
                    />
                    <AnimatePresence mode="wait">
                      {touchedFields.phonenumber && fieldErrors.phonenumber && (
                        <motion.p
                          id="phonenumber-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.phonenumber}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="address-level2"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label 
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      placeholder="Enter your state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="address-level1"
                      aria-required="true"
                      aria-invalid={touchedFields.state && !!fieldErrors.state}
                      aria-describedby={fieldErrors.state ? "state-error" : undefined}
                      className={getInputClassName('state')}
                    />
                    <AnimatePresence mode="wait">
                      {touchedFields.state && fieldErrors.state && (
                        <motion.p
                          id="state-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {fieldErrors.state}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label 
                    htmlFor="requirements"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Requirements 
                  </label>
                  <textarea
                    rows="4"
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your requirements..."
                    aria-required="true"
                    aria-invalid={touchedFields.requirements && !!fieldErrors.requirements}
                    aria-describedby={fieldErrors.requirements ? "requirements-error" : undefined}
                    className={`${getInputClassName('requirements')} resize-none`}
                  ></textarea>
                  <AnimatePresence mode="wait">
                    {touchedFields.requirements && fieldErrors.requirements && (
                      <motion.p
                        id="requirements-error"
                        role="alert"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {fieldErrors.requirements}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <AnimatePresence mode="wait">
                  {submitError && (
                    <motion.div
                      role="alert"
                      aria-live="polite"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {submitError}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 dark:bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin w-5 h-5" />
                      Submitting...
                    </>
                  ) : (
                    <>Continue</>
                  )}
                </motion.button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              >
                <div className="hover:scale-105 transition-transform duration-200">
                  <Phone className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    +91-808575 8575
                  </p>
                </div>
                <div className="hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                  <a 
                    href="mailto:info@graymaterial.com"
                    className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
                  >
                    info@graymaterial.com
                  </a>
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
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
