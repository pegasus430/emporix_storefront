import { GridLayout } from "../components/Utilities/common"
import {Heading4} from '../components/Utilities/typography'
const InvalidTenant = () => {
    return (
        <GridLayout className="invalid-tenant-page">
            <Heading4>You need to enter a valid tenant name in the URL.</Heading4>
        </GridLayout>
    )
}
export default InvalidTenant