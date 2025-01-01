import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const VCComponent = () => {
  return (
    <>
      <div className="mb-5 flex w-full flex-col gap-5 rounded-lg border border-gray-200 px-6 py-5 md:px-12">
        <h2 className="font-semibold">Docusign Smart Contract</h2>
        <p>Smart Contract Royalty Agreement</p>

        <p className="text-sm">
          This Smart Contract Royalty Agreement ("Agreement") is entered into
          between: Company Name: [COMPANY NAME] state as the “creator”, with
          wallet address: [COMPANY WALLET ADDRESS], Holder Name: [HOLDER NAME]
          state as the “holder”, with wallet address: [HOLDER WALLET ADDRESS]
          and Tokalty, with wallet address: [SMART CONTRACT WALLET ADDRESS].
        </p>

        <p className="text-sm">Effective Date: [Date]</p>

        <p className="text-sm">Article 1. Preamble</p>
        <p className="text-sm">
          This Agreement establishes [COMPANY NAME]'s commitment to accurately
          calculate and remit [ROYALTY FEE] of the [ROYALTY TYPE] generated from
          [REVENUE STREAM] through the Tokalty application. Payments will occur
          at regular intervals defined as [TERM] throughout [LIFETIME] as the
          lifetime of this Agreement. These payments shall be made to [HOLDER
          NAME] at the wallet address specified as [HOLDER WALLET ADDRESS]. As
          the payment is realized by the smart contract payment mechanism, it’s
          independent from the holder, all conditions except article 11, will
          apply to the actual token holder wallet address.
        </p>

        <p className="text-sm">Article 2. Smart Contract Description</p>
        <p className="text-sm">
          The Smart Contract “[SMART CONTRACT TITLE]” has the following
          description elaborated by the contract creator, [COMPANY NAME]:
          “[DESCRIPTION]”
        </p>

        <p className="text-sm">Article 3. Revenue Stream</p>
        <p className="text-sm">
          The "Revenue Stream" within the context of this Agreement refers
          exclusively to the activity or asset operated under the company's name
          that generates monetary income. All royalty payments stipulated in
          this Agreement shall be exclusively based on the revenue stream
          identified as "[REVENUE STREAM]," as declared by [COMPANY NAME].
        </p>
      </div>

      <div className="my-5 flex gap-3 md:hidden">
        <Link href={"/edit-smart-contract?page=3"}>
          <Button className="flex gap-2 rounded-xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent">
            Back
          </Button>
        </Link>

        <Button className="flex gap-2 rounded-xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent">
          Export
        </Button>

        <Link href={"/edit-smart-contract/success"}>
          <Button className="flex gap-2 rounded-xl border-gray-100 bg-[#f7f6f6] px-8 font-semibold text-black hover:bg-transparent">
            Sign
          </Button>
        </Link>
      </div>
    </>
  );
};
export default VCComponent;
