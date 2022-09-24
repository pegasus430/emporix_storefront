import CategoryService from './product/category.service'
import { menu_list } from '../components/Header/menu.config'
import {product_list_page} from '../constants/page'

const GetCategory = async () => {
    menu_list[0]['items'] = await CategoryService.getProductCategoryTrees()
    return menu_list
}

const PageInitialize = async (page, data) => {
    const category_menu_list = await GetCategory()
    let category_details = {}
    switch(page){
        case product_list_page:
            category_details = CategoryService.getProductCategoryDetail(data.maincategory, data.subcategory, data.category)
            break;
        default:
            break;
    }
    return {
        category_menu_list,
        category_details
    }
}

export default PageInitialize