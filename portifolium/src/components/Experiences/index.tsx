import codeIcon from '../../assets/codeIcon.svg';

import { ExpContainer, ExpCard } from "./styles";

export function Experiences(){
    return (
        <ExpContainer>
            <ExpCard>
                <img src={codeIcon} alt="" width={50} height={50}/>
                <strong>Programming</strong>
            </ExpCard>
            <ExpCard>Work</ExpCard>
            <ExpCard>Education</ExpCard>
        </ExpContainer>
    )
}