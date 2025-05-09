import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-blue-900 mb-8">
                Terms of Service
              </h1>

              <div className="prose prose-lg">
                <p className="mb-6">
                  Welcome to i-genomics. By using our services, you agree to
                  these terms, which we may update from time to time. Please
                  read them carefully.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  1. Membership Eligibility
                </h2>
                <p className="mb-6">
                  To ensure the safety of children and adolescents using the
                  internet and to prevent privacy infringement, i-genomics
                  services are only available to:
                  - Individuals aged 20 and above
                  - Individuals under 20 who have obtained permission from their legal guardian
                  - Legally registered organizations or groups
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  2. Website Services
                </h2>
                <p className="mb-6">
                  i-genomics provides online product purchasing services and
                  related payment, logistics, and information platform services,
                  including but not limited to product sales, website content
                  browsing, email or other methods of product marketing
                  information provision and other services.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  3. Member Registration Information
                </h2>
                <p className="mb-6">
                  Before using our services, you must register as an i-genomics
                  member by providing accurate and complete personal information
                  as prompted by the registration process.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  4. Privacy Protection
                </h2>
                <p className="mb-6">
                  i-genomics highly values your personal data security. We
                  handle all matters in accordance with our "Privacy Protection
                  Policy and Personal Data Collection Notice" and relevant laws
                  and regulations.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  5. Account and Password
                </h2>
                <p className="mb-6">
                  After completing registration, you will receive an account and
                  password. You are responsible for maintaining the
                  confidentiality of your account and password and for all
                  activities that occur under your account.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  6. Member Obligations
                </h2>
                <p className="mb-6">
                  You agree to use our services only for lawful purposes and in
                  accordance with these Terms. You must not use our services to:
                  - Upload or transmit viruses or malicious code
                  - Harass, abuse, or harm others
                  - Violate any applicable laws or regulations
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  7. Intellectual Property
                </h2>
                <p className="mb-6">
                  All content on i-genomics, including text, graphics, logos,
                  and software, is the property of i-genomics or its content
                  suppliers and is protected by intellectual property laws.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="mb-6">
                  i-genomics provides its services "as is" and makes no
                  warranties, express or implied. We shall not be liable for
                  any damages arising from the use of our services.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  9. Governing Law
                </h2>
                <p className="mb-6">
                  These Terms shall be governed by and construed in accordance
                  with the laws of Malaysia, without regard to its conflict of
                  law provisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;