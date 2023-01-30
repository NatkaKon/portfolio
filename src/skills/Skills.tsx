import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleBlocks={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Mobile APP'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequuntur cupiditate dolor eum inventore laboriosam libero quia ut! Eveniet ipsum minima unde? '}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, alias deserunt ea error et facere fuga id e qui, vel. Dignissimos.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam omnis quo quod rem sint! Alias, dolore, itaque. Assumenda cupnem incidunt molestiae nostrum, vero voluptates.'}/>
                    <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores consequatur nte sit unde, ut voluptates! Autem, hic?'}/>
                    <Skill title={'JavaScript/TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis delectus essei quidem quod ratione repudiandae sunt veritatis? Exercitationem?'}/>
                    <Skill title={'Testing and Debugging'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis et nam, nobis nostrum qentium quod sequi sunt velit voluptatem voluptatum.'}/>
                </div>
            </div>
        </div>
    );
};

