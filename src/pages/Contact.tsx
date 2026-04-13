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
      <section className="py-6 md:py-10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* ═══ LEFT — WHITE info card ═══ */}
            <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col justify-between gap-10 md:gap-12 lg:gap-16 lg:mr-[-1px]">
              <div className="flex flex-col gap-10 md:gap-12 lg:gap-[60px]">
                <h1 className="font-headline font-bold text-[40px] leading-[40px] md:text-[48px] md:leading-[46px] lg:text-[60px] lg:leading-[54px] text-tala-100">
                  Contact us
                </h1>

                {/* London */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h2 className="font-headline font-medium text-[24px] leading-[26px] text-tala-90">
                      London
                    </h2>
                    <p className="font-body text-[16px] leading-[18px] text-tala-60">
                      WeWork, 30 Churchill Place, London E14 5RE
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-body text-[16px] leading-[20px] text-tala-60">
                      +995 598 906 838
                    </p>
                    <p className="font-body text-[16px] leading-[20px] text-tala-60">
                      hello@teamlex.pro
                    </p>
                  </div>
                </div>

                {/* Barcelona */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-0.5">
                    <h2 className="font-headline font-medium text-[24px] leading-[26px] text-tala-90">
                      Barcelona
                    </h2>
                    <p className="font-body text-[16px] leading-[18px] text-tala-60">
                      WEWORK Carrer de Pallars 194, BARCELONA, Index 08005
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-body text-[16px] leading-[20px] text-tala-60">
                      +34 672 151 087
                    </p>
                    <p className="font-body text-[16px] leading-[20px] text-tala-60">
                      hello@teamlex.pro
                    </p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-1 items-center">
                <a
                  href="https://linkedin.com/company/teamlex"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-tala-100 flex items-center justify-center text-tala-0 hover:bg-tala-brand transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://clutch.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clutch"
                  className="w-8 h-8 rounded-full bg-tala-100 flex items-center justify-center text-tala-0 hover:bg-tala-brand transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.5 0 4.78-.92 6.54-2.44l-2.12-2.12A6.93 6.93 0 0 1 12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.93 0 3.68.78 4.95 2.05l2.12-2.12A9.96 9.96 0 0 0 12 2zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ═══ RIGHT — GREY container with floating white form card ═══ */}
            <div className="flex-1 bg-tala-20 rounded-[32px] md:rounded-[40px] flex items-center justify-center p-6 md:p-10 lg:p-[60px] mt-1 lg:mt-0">
              <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-10 w-full max-w-[440px] flex flex-col gap-8 md:gap-10">
                <h2 className="font-headline font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[26px] text-tala-100 text-center">
                  Talk to our team
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col">
                  <TalaInput
                    label="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="-mb-px"
                  />
                  <TalaInput
                    label="Company's website"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="-mb-px"
                  />
                  <TalaInput
                    label="Work e-mail"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TalaButton
                    color="black"
                    size="L"
                    className="w-full mt-8 md:mt-10"
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
