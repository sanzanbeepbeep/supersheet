import { Universityitem } from "./Universityitem";
import Universitiyitems from "../../data/universities_icon.json"

const Card = () => {

    return(
        <div>
            {Universitiyitems.map((item) => (
                <div key={item.university}><Universityitem{...item}></Universityitem></div>
            ))}
        </div>
    )
}

export default Card