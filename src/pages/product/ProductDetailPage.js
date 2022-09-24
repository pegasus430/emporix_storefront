import React, { useState ,createContext, useContext}  from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Select from "react-dropdown-select";
import ReactStars from 'react-stars'
import Quantity from "../../components/Utilities/quantity/quantity"
import Product from "../../components/Product/product"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import SliderComponent from '../../components/Utilities/slider'
import Accordion, {AccordionItem} from '../../components/Utilities/accordion'
import hp_laser_printer from "../../assets/products/hp_laser_printer.png"
import comfort_chair from "../../assets/products/comfort_chair.png"
import pc_stand from "../../assets/products/pc_stand.png"
import stapler from "../../assets/products/stapler.png"
import HandleProductAddToCart from './HandleProductAddToCart'
import LayoutContext from '../context'
import CategoryService from '../../services/product/category.service'

const ProductContext = createContext()

const ProductDetailCategoryCaptionBar = () => {
 
    const category_tree = [
        {"caption": "Home", "link": "#"}, 
        {"caption": "Printers and Scanners", "link": "#"}, 
        {"caption": "Cabinet Printers", "link": "#"}, 
        {"caption": "HP LaserJet 500 color Series Printer Cabinet", "link": ""}
    ]
    return (
        <div className="product-detail-category-caption-bar">
            <Breadcrumbs className="lg:block hidden" separator="|" aria-label="breadcrumb">
                { category_tree.map((row,index) => {
                    return row.link === "" ? 
                        <Typography key={index} className="breadcrumb-item" color="text.primary">{row.caption}</Typography>:
                        <Link key={index} className="breadcrumb-item" underline="hover" color="inherit" href="/">
                            {row.caption}
                        </Link>
                })}
            </Breadcrumbs>
            <Breadcrumbs className="lg:hidden md:block hidden" separator="|" aria-label="breadcrumb">
                { category_tree.map((row,index) => {
                    return row.link === "" ? 
                        "":
                        <Link key={index} className="breadcrumb-item" underline="hover" color={index === category_tree.length - 2 ?"text.primary": "inherit"} href="/">
                            {row.caption}
                        </Link>
                })}
            </Breadcrumbs>
            <Breadcrumbs className="md:hidden" separator="|" aria-label="breadcrumb">
                { category_tree.map((row,index) => {
                    return (category_tree.length - index > 1 && category_tree.length - index < 4)?
                        <Link key={index} className="breadcrumb-item" underline="hover" color={index === category_tree.length - 1 ?"text.primary": "inherit"} href="/">
                            {row.caption}
                        </Link>:
                        ""
                })}
            </Breadcrumbs>
        </div>
    )
}

const ProductImage = ({product}) => {
    
    return (
        <div className="product-detail-image-content">
            <div className="product-detail-main-image rounded">
                <img src={`${product.src}`} alt="product" className="w-full"/>
            </div>
            <div className="product-detail-sub-images">
                {product.sub_images.map((link, index) => {
                    return <div key={index} className="rounded product-detail-sub-image-item">
                                <img src={`${link}`} alt="product_" className="w-full m-auto items-center"/>
                            </div>
                })}
            </div>
        </div>
    )
}
const ProductSkuAndReview = ({product}) => {
    return (
        <div className="flex justify-between items-end">
                <div className="sku-info">SKU:&nbsp;&nbsp;<span className="sku">{product.sku}</span></div>
                <div className="reviews-info">
                    <div className="lg:flex">
                        <div className="flex float-right lg:float-left lg:pb-0 pb-4">
                            <ReactStars size={16} value = {product.rating} color2 = {'#FBB13C'} className="reviews-star"/>
                            ({product.count})
                        </div>
                        <div className="lg:ml-4  product-all-reviews">Read All Reviews</div>
                    </div>
                </div>
        </div>
    )
}
const ProductTitle = ({name}) => {
    return (
        <div className="mt-6 product-title">
            {name}
        </div>
    )
}
const ProductPriceAndAmount = ({price, list_price, product_count, estimated_delivery}) => {
    return (
        <div className="product-price-and-amount-wrapper mt-12 ">
            <div className="product-price-wrapper flex space-x-4 items-center">
                <div className="product-price h-12">&euro; {price}</div>
                <div className="vat-caption">VAT excluded</div>
                <div className="list-price desktop-sm">List Price &euro; <del>{list_price}</del></div>
            </div>  
            <div className="mobile-sm mt-2 list-price">List Price &euro; <del>{list_price}</del></div>
            <div className="product-amount-wrapper flex mt-6 space-x-6 items-center">
                <span className="product-number">{product_count} in Stock</span>
                <span className="delivery-date">Estimated Delivery {estimated_delivery}</span>
            </div>
        </div>
    )
}
const ProductBasicInfo = ({product}) => {
    return (
        <div className="product-basic-info-wrapper hidden lg:block">
            <ProductSkuAndReview product={product}/>
            <ProductTitle name={product.name} />
            <ProductPriceAndAmount price={product.price} list_price={product.list_price} product_count={product.product_count} estimated_delivery={product.estimated_delivery}/>
        </div>
    )
} 

const ProductSelectComponent = ({label, options}) => {
    return (
        <div className="dropdown-wrapper">
            <label className="dropdown-label">{label}</label>
            <div className="dropdown-wrapper mt-2">
                <DropdownComponent options={options}/>
            </div>
        </div>
    )
}

const DropdownComponent = ({options}) => (
    <Select options={options} searchable={true} placeholder="Please select" dropdownHandleRenderer={({state})=>(
        <>
            {state.dropdown ?  <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#ACAEB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>:
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.999999L7 7L13 1" stroke="#ACAEB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                           
                            
            }
        </>
    )}/>
  )
const ProductFormantAndWarranty = () => {
    const format_options = [
        {value: "Paper A4", label: "Paper A4"}
    ]
    const warranty_options = [
        {value: "1 year - extandable", label: "1 year - extandable"}
    ]
    return (
        <div className="product-format-and-warranty py-12">
            
            <ProductSelectComponent label="Format" options={format_options} />
            <ProductSelectComponent label="Warranty" options={warranty_options} />
        </div>
    )
}
const PrdouctAddToCart = () => {
    const product = useContext(ProductContext)
    const {showCart, setShowCart} = useContext(LayoutContext)
    const [quantitiy, setQuantity] = useState(1)

    return (
        <div className="product-add-to-cart-wrapper py-12">
            <div className="quantity">
                Quantity
                <Quantity value={quantitiy} action={setQuantity} />
            </div>
            <div className="">
                <button className="product-add-to-cart-btn" onClick={()=> HandleProductAddToCart(product,setShowCart, quantitiy)}>ADD TO CART</button>
            </div>
        </div>
    )
}
const ProductDiscount = () => {
    return (
        <div className="product-discount-wrapper pt-12 gap-6 ">
            <div className="product-discount-caption">Quantity Discount</div>
            <div className="discount-row">
                <div className="discount-first-col discount-col">Qty</div>
                <div className="discount-col">1-9</div>
                <div className="discount-col">10-19</div>
                <div className="discount-col">20-21</div>
            </div>
            <div className="discount-row">
                <div className="discount-first-col discount-col">Discount</div>
                <div className="discount-col">5%</div>
                <div className="discount-col">10%</div>
                <div className="discount-col">20%</div>
            </div>
            <div className="discount-row">
                <div className="discount-first-col discount-col">Unit Price</div>
                <div className="discount-col">€ 299.00</div>
                <div className="discount-col">€ 279.99</div>
                <div className="discount-col">€ 259.99</div>
            </div>
        </div>
    )
}
const ProductInfo = ({product}) => {
    return (
        <>
            <ProductBasicInfo product={product}/>
            <ProductFormantAndWarranty />
            <PrdouctAddToCart /> 
            <ProductDiscount />
        </>
    )
}

const ProductContent = ({product}) => {
    
    // const product = {
    //     stock : "Low", 
    //     rating : 4, 
    //     product_count: 16,
    //     count : 8 ,
    //     src : "/img/products/hp_printer.png" ,
    //     category : "ICA-CT 073BK",
    //     name : "HP LaserJet 500 color Series Printer Cabinet",
    //     price : "93.50",
    //     list_price : "109.99",
    //     sku: "CF085A",
    //     estimated_delivery: "23.05.2022",
    //     sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    // }

    return (
        <ProductContext.Provider value={product}>
            <div className="product-content-wrapper">
                <div className="mobile-lg">
                    <ProductSkuAndReview product={product}/>
                    <ProductTitle name={product.name} />
                </div>
                <div className="product-image-wrapper">
                    <ProductImage product={product}/>
                </div>
                <div className="mobile-price-and-amount-wrapper">
                    <ProductPriceAndAmount price={product.price} list_price={product.list_price} product_count={product.product_count} estimated_delivery={product.estimated_delivery}/>
                </div>
                <div className="product-info-wrapper">
                    <ProductInfo product={product}/>
                </div>
            </div>
        </ProductContext.Provider>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }



  const ProductDetailsTabContent = () => {
    const design_items = [
        {"property": "Product colour", "value": "Grey"},
        {"property": "CompatibilityHP", "value": "HP LaserJet 500"},
        {"property": "HP segment", "value": "Business, Enterprise"}
    ]
    const dimension_items = [
        {"property": "Width", "value": "678.2 mm"},
        {"property": "Depth", "value": "772.2 mm"},
        {"property": "Height", "value": "426.7 mm"},
        {"property": "Weight", "value": "19.2 kg"},
        {"property": "Dimensions (WxDxH)", "value": "678.2 x 772.2 x 426.7 mm"}
    ]
    const packaging_items = [
        {"property": "Package dimensions (WxDxH)", "value": "630 x 600 x 553 mm"},
        {"property": "Package width", "value": "630 mm"},
        {"property": "Package depth", "value": "600 mm"},
        {"property": "Package height", "value": "553 mm"},
        {"property": "Package Weight", "value": "24.4 Kg"}
    ]
    const technical_details_items = [
        {"property": "Package dimensions (WxDxH)", "value": "630 x 600 x 553 mm"}
    ]
    const techincal_dimension_items = [
        {"property": "Pallet dimensions (W x D x H) (imperial)", "value": '1201.4 x 800.1 x 2362.2 mm (47.3 x 31.5 x 93")'},
        {"property": "Pallet dimensions (W x D x H)", "value": '1200 x 800 x 2362 mm'},
        {"property": "Pallet weight (imperial)", "value": "205.2 kg (452.4 lbs)"},
        {"property": "Products per pallet", "value": "8 pc(s)"},
        {"property": "Master (outer) cases per pallet", "value": "2 pc(s)"},
        {"property": "Layers per pallet", "value": "4 pc(s)"},
        {"property": "Pallet gross weight", "value": "205.7 g"}
    ]

    return (
        <div className="product-details-tab-content-wrapper">
            <div className="grid grid-cols-1 gap-12">
                <ProductInfoPortal key="1" caption="Design" items={design_items}/>
                <ProductInfoPortal key="2" caption="Weight & dimensions" items={dimension_items}/>
                <ProductInfoPortal key="3" caption="Packaging data" items={packaging_items}/>
                <ProductInfoPortal key="4" caption="Technical details" items={technical_details_items}/>
                <ProductInfoPortal key="5" caption="Weight & dimensions" items={techincal_dimension_items}/>
            </div>
        </div>
    )
}

const ProductDetailTabContent = () => {
    const [tab, setTab] = React.useState(0);

    const handleChange = (event, tab) => {
        setTab(tab);
        
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
    
    const tabStyle = {
        color:'#ACAEB2', 
        fontSize: '20px', 
        lineHeight: '32px',
        fontHeight: 500,
        paddingTop: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingBottom: '8px'
    }
    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant="fullWidth"  value={tab} onChange={handleChange} aria-label="">
                    <Tab sx={tabStyle} label="Details" {...a11yProps(0)} />
                    <Tab sx={tabStyle} label="Additional Information" {...a11yProps(1)} />
                    <Tab sx={tabStyle} label="Reviews" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={tab} index={0}>
                <ProductDetailsTabContent /> 
            </TabPanel>
            <TabPanel value={tab} index={1}>
                Additional Information
            </TabPanel>
            <TabPanel value={tab} index={2}>
                Reviews
            </TabPanel>
        </Box>
    )
}
const ProductInfoPortal = ({caption, items}) => {
    return (
        <div className="information-portal-wrapper grid grid-cols-1 gap-4">
            <div className="information-caption">
                {caption}
            </div>
            <div className="information-content grid grid-cols-2">
                <div className="information-properties pl-6 grid grid-cols-1 gap-2">
                    {items.map((row,index) => (
                        <span key={index}>{row.property}</span>
                    ))}
                </div>
                <div className="information-values pl-6 grid grid-cols-1 gap-2">
                    {items.map((row,index) => (
                        <span key={index}>{row.value}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
    

const ProductDetailInfo = () => {
    return (
        <div className="product-detail-page-info-wrapper lg:py-12 pb-12">
            <div className="product-detail-content">
                <div className="desktop-lg">
                    <ProductDetailTabContent />
                </div>
                <div className="mobile-lg">
                    <Accordion>
                        <AccordionItem index={0} title='Details'>
                            <ProductDetailsTabContent /> 
                        </AccordionItem>
                        <AccordionItem index={1} title='Additional Information'>
                            Additional Information
                        </AccordionItem>
                        <AccordionItem index={2} title='Reviews'>
                            Reviews
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            
        </div>
    )
}

const products = [
    {
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : hp_laser_printer ,
        category : "TY2-B#M74A",
        name : "HP LaserJet 1*500-sheet Paper Feeder and Cabinet",
        price : "341.89",
        list_price : "389.50"
    } ,
   
    {
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : pc_stand ,
        category : "BB2-B3M987",
        name : "RP9 Retail Compact Stand Silver PC Multimedia stand",
        price : "84.89",
        list_price : "94.10"
    } ,
    {
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : stapler ,
        category : "BB2-B3M987",
        name : "Zenith Plier stapler 548/E Silver",
        price : "27.50",
        list_price : "34.99"
    } ,
    {
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : comfort_chair ,
        category : "TY2-B#M74A",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.59",
        list_price : "59.99"
    } ,
    {
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : comfort_chair ,
        category : "TY2-B#M74A",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.59",
        list_price : "59.99"
    } ,
]

const ProductMatchItems = () => {
    const [auth, setAuth] = useState(true)

    return (
        <div className="product-match-items-wrapper grid grid-cols-1">
            <div className="product-match-caption w-full">Match it with</div>
            <div className="product-match-items-content w-full">
                <SliderComponent>
                    {
                        products.map((item, index) => (
                                <Product key={index} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                    category = {item.category} name={item.name} 
                                    price = {item.price} list_price = {item.list_price} />
                            )
                        )
                    }
                </SliderComponent>
            </div>
        </div>
    )
}
const ProductDetailPage = ({product}) => {
    // CategoryService.getAllCategories()
    return (
        <div className="product-detail-page-wrapper ">
            <div className="product-detail-page-content">
                <ProductDetailCategoryCaptionBar /> 
                <ProductContent product={product}/>
                <ProductDetailInfo />
                <ProductMatchItems />
            </div>
        </div>
    )
}
export default ProductDetailPage