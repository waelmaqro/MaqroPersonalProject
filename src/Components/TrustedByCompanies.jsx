import React from "react";

const TrustedByCompanies = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid xxs:grid-cols-1 xs:flex xs:max-w-[70%] flex-wrap justify-center md:grid place-items-center md:grid-cols-5 max-w-[70%] xxs:gap-4 sm:gap-20 max-w-screen">
        <img src="/archlinux.svg" alt="" className="w-[200px]" />
        <img src="/atlassian.svg" alt="" className="w-[200px]" />
        <img src="/aurora.svg" alt="" className="w-[200px]" />
        <img src="/cirrus.svg" alt="" className="w-[200px]" />
        <img src="/jira.svg" alt="" className="w-[200px]" />
      </div>
    </div>
  );
};

export default TrustedByCompanies;
