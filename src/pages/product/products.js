
const products = [
    {
        id : 1,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        product_count: 1,
        src : "/img/products/chair1.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair SKODSBORG",
        price : "93.50",
        list_price : "109.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 2,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 4,
        src : "/img/products/chair2.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Mesh Office Chair",
        price : "89.90",
        list_price : "99.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,   
    {
        id : 3,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        product_count: 6,
        src : "/img/products/chair3.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair DALMOSE",
        price : "58.05",
        list_price : "64.50",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 4,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 3,
        src : "/img/products/chair4.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair STAKROGE",
        price : "143.99",
        list_price : "159.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 5,
        stock : "Low", 
        rating : 4, 
        product_count: 4,
        count : 8 ,
        src : "/img/products/chair5.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Ergonomic Executive Office Chair",
        price : "127.50",
        list_price : "149.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 6,
        stock : "Ouf Of", 
        rating : 4, 
        count : 8 ,
        product_count: 13,
        src : "/img/products/chair6.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Office Chair, Ribbed Upholstery, High-Back",
        price : "143.99",
        list_price : "159.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 7,
        stock : "Low", 
        rating : 4, 
        product_count: 4,
        count : 8 ,
        src : "/img/products/comfort_chair.png" ,
        category : "ICA-CT 073BK",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.99",
        list_price : "59.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 8,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 2,
        src : "/img/products/chair7.png" ,
        category : "ICA-CT 073BK",
        name : "Techly Office chair with padded seat",
        price : "61.65",
        list_price : "72.50",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 9,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 20,
        src : "/img/products/chair8.png" ,
        category : "ICA-CT 073BK",
        name : "Kenson 7010 officecomputer chair Padded seat",
        price : "78.20",
        list_price : "92.00",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 10,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        product_count: 5,
        src : "/img/products/chair1.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair SKODSBORG",
        price : "93.50",
        list_price : "109.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 11,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 19,
        src : "/img/products/chair2.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Mesh Office Chair",
        price : "89.90",
        list_price : "99.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,   
    {
        id : 12,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        product_count: 5,
        src : "/img/products/chair3.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair DALMOSE",
        price : "58.05",
        list_price : "64.50",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 13,
        stock : "In", 
        product_count: 2,
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair4.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair STAKROGE",
        price : "143.99",
        list_price : "159.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 14,
        stock : "Low", 
        rating : 4, 
        product_count: 1,
        count : 8 ,
        src : "/img/products/chair5.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Ergonomic Executive Office Chair",
        price : "127.50",
        list_price : "149.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 15,
        stock : "Ouf Of", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair6.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Office Chair, Ribbed Upholstery, High-Back",
        price : "143.99",
        product_count: 7,
        list_price : "159.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 16,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        product_count: 8,
        src : "/img/products/comfort_chair.png" ,
        category : "ICA-CT 073BK",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.99",
        list_price : "59.99",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 17,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 10,
        src : "/img/products/chair7.png" ,
        category : "ICA-CT 073BK",
        name : "Techly Office chair with padded seat",
        price : "61.65",
        list_price : "72.50",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
    {
        id : 18,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        product_count: 15,
        src : "/img/products/chair8.png" ,
        category : "ICA-CT 073BK",
        name : "Kenson 7010 officecomputer chair Padded seat",
        price : "78.20",
        list_price : "92.00",
        sku: "CF085A",
        estimated_delivery: "23.05.2022",
        sub_images: ["/img/products/hp_printer_sub1.png", "/img/products/hp_printer_sub2.png", "/img/products/hp_printer_sub3.png"]
    } ,
   
]

const categoryMenuList = [
    {
        'title': 'Office Chairs',
        'items' : [
            {
                "title" : "All" ,
                "items" : [], 
                'total' : 280
            },
            {
                "title" : "Executive Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Computer Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Mesh Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Draughtsman Chairs" ,
                "items" : [], 
                'total' : 23
            },
        ],
        'toal' : 280

    } ,
    {
        'title': 'Meeting Chairs',
        'items' : [
        {
                "title" : "Meeting & Boardroom Chairs" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Occasional Seating" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Stacking Chairs" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Waiting Room Chairs" ,
                "items" : [], 
                'total' : 23
        },
        ],
        'total' : 242
    } ,
    {
        'title': 'Ergonomic Chairs',
        'items' : [
            {
                "title" : "Bariatric Office Chairs" ,
                "items" : [],
                'total' : 25
            },
            {
                "title" : "Posture Chairs" ,
                "items" : [],
                'total' : 25
            },
            {
                "title" : "Kneeling Chairs" ,
                "items" : [],
                'total' : 25
            },
        ],
        'total' : 343

    } ,
    {
     'title': 'Armchairs and Stools',
     'items' : [
         {
           "title" : "Armchairs" ,
           "items" : [],
           'total' : 25
         },
         {
           "title" : "Stools" ,
           "items" : [],
           'total' : 25
         },
         {
           "title" : "Industrial Stools" ,
           "items" : [],
            'total' : 25
         },
     ],
     'total' : 75
    } ,
 ]
export default products