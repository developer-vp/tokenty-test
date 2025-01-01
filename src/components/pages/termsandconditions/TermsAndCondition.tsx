import React from "react";
import { Button } from "@/components/ui/button";

const TermsAndCondition = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex w-[730px] flex-col items-center gap-5 rounded-2xl border px-5 py-4 md:px-10 md:py-8">
        <h2 className="bgred-200 max-w-96 text-center font-semibold">
          Please read and accept terms and conditions before sending your Smart
          Contract to the holder
        </h2>
        <p className="text-xs text-[#c4c4c4]">
          Acceptance of Terms
          <br />
          By accessing or using the Web App, you agree to be bound by this
          Agreement and all applicable laws and regulations. If you do not agree
          with any provision of this Agreement, you should not access or use the
          Web App.
        </p>

        <p className="text-xs text-[#c4c4c4]">
          User Eligibility
          <br />
          By accessing or using the Web App, you represent and warrant that you
          have the necessary legal capacity to enter into this Agreement and to
          form a binding contract. You must be of legal age to form a binding
          contract in your jurisdiction. If you are accessing or using the Web
          App on behalf of a company or other legal entity, you represent and
          warrant that you have the authority to bind such entity to this
          Agreement.
        </p>

        <p className="text-xs text-[#c4c4c4]">
          Account Registration
          <br />
          To access and use certain features of the Web App, you may be required
          to register for an account. You agree to provide accurate and complete
          information during the registration process and to keep your account
          credentials secure. You are solely responsible for all activities that
          occur under your account.
        </p>

        <div className="flex w-full justify-between">
          <Button className="w-28 rounded-lg border-2 border-[#ebebeb] bg-transparent px-6 py-6 font-semibold text-[#444444] hover:bg-transparent md:w-40">
            Back to edit
          </Button>

          <Button className="w-28 rounded-lg border-2 border-[#ffa834] bg-transparent px-6 py-6 font-semibold text-[#444444] hover:bg-transparent md:w-40">
            Accept{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TermsAndCondition;
