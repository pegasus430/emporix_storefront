import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'
import { Link } from 'react-router-dom'
import {add_location_url} from '../../services/service.config'

const locationList = [
  {
    Location : 'Head Office',
    Name : 'Company Name' ,
    Address : {
      street : 'Barer Str.27',
      city : '80333 Munchen' ,
      country : 'Germany'
    },
    Shipping : true,
    Billing : true
  } ,
  {
    Location : 'Stuttgart Office',
    Name : 'Company Name' ,
    Address : {
      street : 'Schobpl.',
      city : '70173 Stuttgart' ,
      country : 'Germany'
    },
    Shipping : true,
    Billing : true
  } ,
  {
    Location : 'Munich Warehouse',
    Name : 'Company Name' ,
    Address : {
      street : 'Spiridon-Louis-Ring 21',
      city : '80809 Munchen' ,
      country : 'Germany'
    },
    Shipping : true,
    Billing : false
  } ,
  {
    Location : 'Stuttgart Warehouse',
    Name : 'Company Name' ,
    Address : {
      street : 'FriedhofstraBe 44',
      city : '70191 Stuttgart' ,
      country : 'Germany'
    },
    Shipping : true,
    Billing : false
  } ,
]

const AddButton = () => {
  return (
    <Link to={add_location_url}>
      <div className="w-full md:w-60 h-10 bg-[#214559] text-white  flex items-center mt-6 md:mt-12">
              <span className='text-center  w-full'>ADD NEW LOCATION </span>
      </div>
    </Link>
  )
}

const LocationItem = ({Location, Name, street, city, country , Shipping  , Billing }) => {
  return (
    <div className='location_item'>
        <div className='flex-auto md:w-1/5 justify-between flex md:block w-full'>
            <div className='location-title desktop_only'>
                Location
            </div>
            <div className='location-data font-bold'>
                {Location}
            </div>
            <div className='mobile_only  underline text-sm font-semibold'>
            Edit Address
          </div>
        </div>

        <div className=' flex-auto w-1/5 desktop_only '>
            <div className='location-title '>
                Name
            </div>
            <div className='location-data'>
                {Name}
            </div>
        </div>

        <div className='flex-auto'>
            <div className=' location-title desktop_only'>
                Address
            </div>
            <div className='location-data'>
                {street}<br />
                {city} <br />
                {country}
            </div>
        </div>

        <div className='flex-auto '>
            <div className=' md:flex md:float-right'>
              <div  className="pt-6 md:pt-0">
                <input type="checkbox" checked = {Shipping} readOnly/> Shipping
              </div>
              <div className="pt-6 md:pl-6 md:pt-0" >
                <input type="checkbox" checked = {Billing} readOnly/> Billing
              </div>
            </div>
            <div className='desktop_only  mt-[70px] underline text-sm font-semibold float-right ml-[57%] '>
                Edit Address
            </div>
        </div>
    </div>
  )
}

const Locations = () => {
  return (
    <>
      <AddButton />
      <div className='mt-6 md:mt-12'>
        {
          locationList.map((item, index) => 
            <LocationItem 
              key = {index} Location = {item.Location} Name = {item.Name} street = {item.Address.street}
              city = {item.Address.city} country = {item.Address.country} Shipping = {item.Shipping} Billing = {item.Billing}
            />
          )
        }
      </div>
    </>
  );
};

const AccountLocations = () => {
    return <AccountLayout page="Locations"> <Locations /></AccountLayout>;
};

export default AccountLocations;