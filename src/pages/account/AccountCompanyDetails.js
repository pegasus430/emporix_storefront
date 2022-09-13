import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const CompanyInfoItem = ({caption,content}) => {
  return (
    <div className="company-info-item-wrapper md:flex md:justify-between w-full mt-3 md:mt-0">
      <div className="font-bold">
        {caption}
      </div>
      <div className="company-info">
        {content}
      </div>
    </div>
  )
}
const CompanyDetails = () => {
  return (
    <>
      <div className="w-full md:py-12 py-5 md:flex md:justify-between border-bottom-gray">
        <div className="font-inter font-bold company-label label">Company Name</div>
        <div className="company-input-wrapper mt-2 md:mt-0">
          <input type="text" className="mt-2 sm:mt-0 company-input border-gray" />
        </div>
      </div>
      <div className="w-full md:pt-12 pt-6 md:flex md:justify-between">
        <div className="font-inter font-bold company-label label border-bottom-gray md:border-0 pb-3 md:pb-3">
          Legal Entity
          <div className="mt-2 sub-label">Provide your Personal Info</div>
        </div>
        <div className="company-info-wrapper md:flex md:gap-4 flex-col my-3 md:my-0">
          <CompanyInfoItem caption="Legal Name" content="Company Legal Name" />
          <CompanyInfoItem caption="Tax Registration Number" content="1605492" />
          <CompanyInfoItem caption="Country Of Registration" content="Germany" />
          <CompanyInfoItem caption="Registration Agency" content="Input Text" />
          <CompanyInfoItem caption="Registration Date" content="DD/MM/YYYY" />
          <CompanyInfoItem caption="Registration ID" content="064464" />

        </div>
      </div>
    </>
  )
}

const AccountCompanyDetails = () => {
    return <AccountLayout pageComponent={<CompanyDetails />} page="Company Details"/>
}


export default AccountCompanyDetails
  