import LanguageButton from "@/app/components/ui/LanguageButton";
import React from "react";

const Page = () => {
  return (
    <div>
          <LanguageButton label='Hindi' />
          <LanguageButton label='English' />
          <LanguageButton label='Gujarati' />
          <LanguageButton label='Marathi' />
    </div>
  );
};

export default Page;
