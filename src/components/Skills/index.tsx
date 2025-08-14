import dailysCodes from '../../assets/dailysCodes.svg';
import otherStacks from '../../assets/otherStacks.svg';
import { SimpleGitHubStats } from '../SimpleGitHubStats';

import { 
    SkillsExpContainer, 
    Tag ,
    TitleSkills,
    StackDaily,
    SubTitleSkills
} from './styles';

export function Skills(){
    return (
            <SkillsExpContainer id="skills">
                <Tag>🧑‍💻 Skills · Experiences</Tag>
                <TitleSkills>Tecnologies and Stacks</TitleSkills>
                <SubTitleSkills>Stacks that I use on a daily basis</SubTitleSkills>
                <StackDaily>
                    <img src={dailysCodes} alt=""/>  
                </StackDaily>
                <SubTitleSkills>Other Stacks I've worked with</SubTitleSkills>
                <StackDaily>
                    <img src={otherStacks} alt=""/>  
                </StackDaily>
                
                <SimpleGitHubStats />
            </SkillsExpContainer>
        );
    }
