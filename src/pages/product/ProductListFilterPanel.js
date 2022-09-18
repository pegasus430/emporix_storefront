import React, { useState , useRef } from 'react'
import adjust               from '../../assets/adjust-2.png'
import deleteFilter         from '../../assets/del_filter.png'
import { ChevronUpIcon , ChevronDownIcon } from '@heroicons/react/solid'
import { CAccordionBody } from '@coreui/react'

// const filterItems = [
//     {
//         category : 'Material' ,
//         val : 'Leather'
//     } ,
//     {
//         category : 'Material' ,
//         val : 'Mesh'
//     } ,
//     {
//         category : 'Material' ,
//         val : 'Black'
//     } ,
//     {
//         category : 'Price' ,
//         val : ' \u20AC100 - \u20AC200'
//     } ,
// ]

const SelectedFilter = ({title, val}) => {
    return (
        <div className='flex font-inter pb-4'>
            <img src={deleteFilter} className="w-6 h-6" />
            <span className='font-bold ml-2' >{title}: &nbsp;</span>
            <span className='font-normal' >{val}</span>
        </div>
    )
}

const SelectionField = ({title, total}) => {
  
    return (
        <div className='flex justify-between pb-4 font-inter font-medium text-base'>
            <div>
                
                <label > {title}</label>
            </div>
            <div className=' pr-2'>
                {total}
            </div>
            
        </div>
    )
}

const Category = ({ item }) => {

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const { title, items } = item;
    const handleToggle = () => {
      setClicked((prev) => !prev);
    };
  
    return (
      <li className={`cat_accordion_item ${clicked ? "active" : ""}`}>
        <button className="category_pan" onClick={handleToggle}>
          {title}
          {clicked ? <ChevronDownIcon className='h-4'/> : <ChevronUpIcon className='h-4' />} 
        </button>
  
        <div
          ref={contentEl}
          className="content_wrapper"
          style={
            clicked
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="content">
            
            {
                
                items.map(( item , index) => 
                   
                    <SelectionField key={index}  title = {item.title} total = {item.total} />
                )
            }
          </div>
        </div>
      </li>
    );
};

const FilterListPanel = ({filterItems , handleSideFilterContent}) => {
    return (
        <div className='pr-6'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={adjust} className="w-4 h-4 mt-1 mr-2" onClick={handleSideFilterContent} />
                    <span className='mr-2' >Filters</span>
                    [{filterItems.length}]
                </div>
                <div>
                    <a className='font-inter font-semibold font-[14px] text-[#0380F3] underline'>
                        Clear Filters
                    </a>
                </div>
            </div>
            <div className='pt-6 pb-2 border-b'>
                {
                filterItems.map((item , index) => (
                        <SelectedFilter title={item.category} val={item.val} key={index} />
                    )
                )
                    
                }
            </div>
        </div>
    )
}

const CategoryPanel = ({categoryMenuList}) => {
    return (
        
            <ul className="category_accordion pr-6">
                {categoryMenuList.map((item, index) => (
                    <Category key={index} item={item} />
                ))}
                
            </ul>
    )
}

const ProductListFilterPanel = ({handleSideFilterContent , categoryMenuList  , filterItems }) => {
    return (
        <div className='border-r'>
            <FilterListPanel filterItems ={filterItems} handleSideFilterContent ={handleSideFilterContent} />
            <CategoryPanel categoryMenuList = {categoryMenuList} />
        </div>
    )
}

export default ProductListFilterPanel