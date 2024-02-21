import codeIcon from '../../assets/codeIcon.svg';
import educationIcon from '../../assets/educationIcon.svg';
import worldIcon from '../../assets/worldIcon.svg';

import { ExpContainer, ExpCard, ContentCard } from "./styles";

export function Experiences(){
    return (
        <ExpContainer>
            <ExpCard>
                <ContentCard>
                    <img src={codeIcon} alt="" width={30} height={30}/>
                </ContentCard>
                <ContentCard>
                    <strong>Programming</strong>
                </ContentCard>
            </ExpCard>
            <ExpCard>
                <ContentCard>
                    <img src={worldIcon} alt="" width={30} height={30}/>
                </ContentCard>
                <ContentCard>
                    <strong>Work</strong>
                </ContentCard>
            </ExpCard>
            <ExpCard>
                <ContentCard>
                    <img src={educationIcon} alt="" width={30} height={30}/>
                </ContentCard>
                <ContentCard>
                    <strong>Education</strong>
                </ContentCard>
            </ExpCard>
        </ExpContainer>
    )
}