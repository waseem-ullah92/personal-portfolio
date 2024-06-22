import IconNextjs from '@/app/assets/svg-icons/nextjs-icon';
import htmlIcon from '../../../../assets/skills-icons/html.svg'
import cssIcon from '../../../../assets/skills-icons/css.svg'
import reactIcon from '../../../../assets/skills-icons/react.svg'
import nextIcon from '../../../../assets/skills-icons/nextJS.svg'
import javascriptIcon from '../../../../assets/skills-icons/javascript.svg'
import typescriptIcon from '../../../../assets/skills-icons/typescript.svg'
import cPlusIcon from '../../../../assets/skills-icons/cplusIcon.svg'
import oopIcon from '../../../../assets/skills-icons/oopIocn.png'
import apiIcon from '../../../../assets/skills-icons/apiIcon.png'
import reduxIcon from '../../../../assets/skills-icons/redux-icon.svg'

export interface ISliderData {
  id: string;
  title: string;
  value:any;
}
 

export const technicalSkillsData: ISliderData[] = [
  {
    id: "1",
    title:"Frontend UI/UX",
    value:"95%",
  },
  {
    id: "2",
    title:"Responsive Design",
    value:"99%",
  },
  {
    id: "3",
    title:"Analytic",
    value:"90%",
  },
  {
    id: "4",
    title:"Unit Testing",
    value:"93%",
  },
  {
    id: "5",
    title:"Debugging",
    value:"90%",
  },
  {
    id: "6",
    title:"Cross Browser Compatibility",
    value:"92%",
  },
  // {
  //   id: "7",
  //   title:"ReactJs/Redux/Redux Thunk/RTK Query/RESTful API",
  //   value:"88%",
  // },
  // {
  //   id: "8",
  //   title:"NextJs",
  //   value:"88%",
  // },
]

export interface ITechnicalSkillCardData {
  id: string;
  title: string;
  imgIcon?: any | string | React.ComponentType;
}
export const technicalSkillsCardData: ITechnicalSkillCardData[]=[
  {
    id:"1",
    title:"Next JS",
    imgIcon:<IconNextjs/>,
  },
  {
    id:"2",
    title:"React JS",
    imgIcon:reactIcon,
  },
  {
    id:"3",
    title:"JavaScript",
    imgIcon:javascriptIcon,
  },
  
  {
    id:"4",
    title:"TypeScript",
    imgIcon:typescriptIcon,
  },
  {
    id:"5",
    title:"Redux",
    imgIcon:reduxIcon,
  },
  {
  id:"6",
  title:"RTK Query",
  imgIcon:reduxIcon,
},
{
  id:"7",
  title:"RESTful API",
  imgIcon:apiIcon,
},
{
  id:"8",
  title:"HTML",
  imgIcon:htmlIcon,
},
{
  id:"9",
  title:"CSS",
  imgIcon:cssIcon,
},
{
  id:"10",
  title:"C/C++",
  imgIcon:cPlusIcon,
},
{
  id:"11",
  title:"OOP",
  imgIcon:oopIcon,
},
]