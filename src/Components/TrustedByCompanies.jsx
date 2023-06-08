import React from "react";

const TrustedByCompanies = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex xs:max-w-[70%] xxs:flex-wrap items-center justify-center md:grid place-items-center md:grid-cols-5 max-w-[90%] xxs:gap-4 xs:gap-[50px] sm:gap-20 xxs:flex-row max-w-screen md:justify-between md:w-screen min-[1550px]:max-w-[1500px] md:max-w-[90%]">
        <img src="/archlinux.svg" alt="" className="md:max-w-[150px] xxs:max-w-[75px] flex-grow sm:max-w-[120px]" />
        <img src="/aurora.svg" alt="" className="md:max-w-[150px] xxs:max-w-[75px] flex-grow sm:max-w-[120px]" />
        <img src="/atlassian.svg" alt="" className="md:max-w-[150px] xxs:max-w-[75px] flex-grow sm:max-w-[120px]" />
        <img src="/cirrus.svg" alt="" className="md:max-w-[150px] xxs:max-w-[75px] flex-grow sm:max-w-[120px]" />
        <img src="/jira.svg" alt="" className="md:max-w-[150px] xxs:max-w-[75px] flex-grow sm:max-w-[120px]" />
      </div>
    </div>
  );
};

export default TrustedByCompanies;
