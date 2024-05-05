import vsCodeIcon from "../../../../assets/skills-icons/developer-tools-icons/visual-studio-code-icon.svg";
import visualStudioIcon from "../../../../assets/skills-icons/developer-tools-icons/visual-studio-icon.svg";
import gitIcon from "../../../../assets/skills-icons/developer-tools-icons/git-icon.svg";
import githubIcon from "../../../../assets/skills-icons/developer-tools-icons/github-icon.svg";
import bitbucketIcon from "../../../../assets/skills-icons/developer-tools-icons/bitbucket-icon.svg";
import jiraIcon from "../../../../assets/skills-icons/developer-tools-icons/jira-icon.svg";
import awsIcon from "../../../../assets/skills-icons/developer-tools-icons/aws-icon.svg";
import swaggerIcon from "../../../../assets/skills-icons/developer-tools-icons/swagger-icon.svg";
import vercelIcon from "../../../../assets/skills-icons/developer-tools-icons/vercel-icon.svg";
import figmaIcon from "../../../../assets/skills-icons/developer-tools-icons/figma-icon.svg";
import photoshopIcon from "../../../../assets/skills-icons/developer-tools-icons/photoshop-icon.svg";

export interface IDeveloperToolsData {
    id: string;
    title: string;
    imgIcon:any;
  }
  export const developersToolsData: IDeveloperToolsData[] = [
   {
    id:"1",
    title:"VS Code",
    imgIcon:vsCodeIcon,
   },
   {
    id:"2",
    title:"Visual Studio",
    imgIcon:visualStudioIcon,
   },
   {
    id:"3",
    title:"Git",
    imgIcon:gitIcon,
   },
   {
    id:"4",
    title:"Github",
    imgIcon:githubIcon,
   },
   {
    id:"5",
    title:"Bitbucket",
    imgIcon:bitbucketIcon,
   },
   {
    id:"6",
    title:"Jira",
    imgIcon:jiraIcon,
   },
   {
    id:"7",
    title:"AWS Code Commit",
    imgIcon:awsIcon,
   },
   {
    id:"8",
    title:"Swagger",
    imgIcon:swaggerIcon,
   },
   {
    id:"9",
    title:"Vercel",
    imgIcon:vercelIcon,
   },
   {
    id:"10",
    title:"Figma",
    imgIcon:figmaIcon,
   },
   {
    id:"11",
    title:"PhotoShop",
    imgIcon:photoshopIcon,
   },
  ]

