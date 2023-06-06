import React from "react";

const TrustedByCompanies = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid xxs:grid-cols-1 xs:flex xs:max-w-[70%] xs:flex-wrap xs:items-center xs:justify-center md:grid place-items-center md:grid-cols-5 max-w-[90%] xxs:gap-4 xs:gap-[50px] sm:gap-20 sm:flex-row max-w-screen md:justify-between md:w-screen md:max-w-[1500px]">
        <img src="/archlinux.svg" alt="" className="md:max-w-[150px] md:w-[100px] xxs:w-[75px]" />
        <img src="/aurora.svg" alt="" className="md:max-w-[150px] md:w-[100px] xxs:w-[75px]" />
        <img src="/atlassian.svg" alt="" className="md:max-w-[150px] md:w-[100px] xxs:w-[75px]" />
        <img src="/cirrus.svg" alt="" className="md:max-w-[150px]  md:w-[100px] xxs:w-[75px]" />
        <img src="/jira.svg" alt="" className="md:max-w-[150px] md:w-[100px] xxs:w-[75px]" />
      </div>
    </div>
  );
};

export default TrustedByCompanies;
