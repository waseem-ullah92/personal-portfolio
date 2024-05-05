import serviceImg from '../../../assets/skills-icons/web-icon.png'

export interface IServices {
    id: string;
    title: string;
    imgIcon: any;
    description:string;

  }
  export const servicesData: IServices[] = [
    {
      id: "1",
      title: "Custom Web Developement",
      imgIcon:serviceImg,
      description:"Translating your ideas into dynamic, responsive websites using cutting-edge technologies. From conceptualization to execution, our development approach focuses on scalability, efficiency, and a seamless integration of features to meet your digital objectives."
    },
    {
        id: "2",
        title: "E-Commerce Web Developement",
        imgIcon:serviceImg,
        description:"Revolutionizing your online store with visually appealing design and robust development. Our e-commerce solutions integrate secure payment gateways and optimize for performance, ensuring a smooth and efficient shopping experience."
      },
      {
        id: "3",
        title: "Web Maintenance",
        imgIcon:serviceImg,
        description:"Streamlining your website’s functionality through reliable maintenance. Our services cover security updates, performance optimizations, and ensuring your codebase remains robust and up-to-date."
      },

]