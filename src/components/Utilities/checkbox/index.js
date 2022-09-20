
import './checkbox.css'
import { Container } from '../common'
import {TextRegular} from '../typography'

const Checkbox = ({title}) => {
    return (
        <Container className="gap-2 items-center">
            <input className="checkbox" type="checkbox"/>
            <TextRegular >
                {title}
            </TextRegular>
        </Container>
    )
}
export default Checkbox