import { useState, FormEvent } from "react";
import { TalaPageLayout, TalaInput, TalaButton } from "@/components/tala";

const Contact = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, website, email });
  };

  return (
    <TalaPageLayout className="!bg-tala-10">
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-2 items-stretch">
            {/* Left Column — WHITE card with contact info */}
            <div className="flex-1 bg-tala-0 rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h1 className="font-headline font-bold text-h3 text-tala-100">
                  Contact us
                </h1>

                <div className="mt-10">
                  {/* London */}
                  <div>
                    <h2 className="font-headline font-medium text-h6 text-tala-100">
                      London
                    </h2>
                    <p className="font-body text-body-m text-tala-70 mt-2">
                      WeWork, 30 Churchill Place,
                      <br />London E14 5RE
                    </p>
                    <p className="font-body text-body-m text-tala-70 mt-3">
                      +995 598 906 838
                    </p>
                    <p className="font-body text-body-m text-tala-70 mt-1">
                      hello@teamlex.pro
                    </p>
                  </div>

                  <div className="h-px bg-tala-20 my-8" />

                  {/* Barcelona */}
                  <div>
                    <h2 className="font-headline font-medium text-h6 text-tala-100">
                      Barcelona
                    </h2>
                    <p className="font-body text-body-m text-tala-70 mt-2">
                      WEWORK Carrer de Pallars 194,
                      <br />BARCELONA, Index 08005
                    </p>
                    <p className="font-body text-body-m text-tala-70 mt-3">
                      +34672151087
                    </p>
                    <p className="font-body text-body-m text-tala-70 mt-1">
                      hello@teamlex.pro
                    </p>
                  </div>
                </div>
              </div>

              {/* Social icons at bottom */}
              <div className="flex gap-3 items-center mt-10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-tala-100 flex items-center justify-center text-tala-0 hover:bg-tala-brand transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-tala-100 flex items-center justify-center text-tala-0 hover:bg-tala-brand transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column — WHITE form card */}
            <div className="w-full lg:w-[540px] shrink-0">
              <div className="bg-tala-0 rounded-3xl p-8 lg:p-10 h-full flex flex-col">
                <h2 className="font-headline font-bold text-h5 text-tala-100 mb-2">
                  Talk to our team
                </h2>
                <p className="font-body text-body-m text-tala-50 mb-8">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                  <TalaInput
                    label="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TalaInput
                    label="Company website"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <TalaInput
                    label="Work email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TalaButton
                    color="black"
                    size="L"
                    className="w-full mt-4"
                    type="submit"
                  >
                    Submit
                  </TalaButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
};

export default Contact;
