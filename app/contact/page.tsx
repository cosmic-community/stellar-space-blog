import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Stellar Space Blog',
  description: 'Get in touch with the Stellar Space Blog team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[40vh] bg-gradient-to-br from-cosmic-600 via-cosmic-800 to-gray-900" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Have a question, story idea, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-cosmic-100 dark:bg-cosmic-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-600 dark:text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">tony@cosmicjs.com</p>
          </div>

          {/* Response Time Card */}
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-cosmic-100 dark:bg-cosmic-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-600 dark:text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Response Time</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Within 24 hours</p>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-cosmic-100 dark:bg-cosmic-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-600 dark:text-cosmic-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Based In</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">The Cosmos 🌌</p>
          </div>
        </div>
      </section>
    </div>
  );
}