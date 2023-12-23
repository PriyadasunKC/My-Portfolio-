// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import "./SideNavigation.css";
import { Anchor } from "antd";
const onChange = (link) => {
  console.log("Anchor:OnChange", link);
};

import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  SolutionOutlined,
  LaptopOutlined,
  ShopOutlined,
  CommentOutlined,
  MailOutlined,
} from "@ant-design/icons";



const SideNavigation = () => {
  const [isSideBarTabsVisible, setIsSideBarTabsVisible] = useState(true);

  const toggleSideBarTabs = () => {
    setIsSideBarTabsVisible(!isSideBarTabsVisible);
  };


  return (
    <div>
      {isSideBarTabsVisible && (
        <div className="sidenav">
          <div className="sideBarToggleButton">
            <MenuOutlined
              className="toggleButtonIcon"
              onClick={toggleSideBarTabs}
            />
          </div>
          <div className="sideBarTabs">
            <a href="#home" title="Home">
              <HomeOutlined className="menuIcons" />
            </a>

            <a href="#about" title="About">
              <UserOutlined className="menuIcons" />
            </a>

            <a href="#resume" title="Resume">
              <SolutionOutlined className="menuIcons" />
            </a>

            <a href="#services" title="Services">
              <ShopOutlined className="menuIcons" />
            </a>

            <a href="#skills" title="Skills">
              <LaptopOutlined className="menuIcons" />
            </a>

            <a href="#testimonials" title="Testimonial">
              <CommentOutlined className="menuIcons" />
            </a>

            <a href="#contact" title="Contact">
              <MailOutlined className="menuIcons" />
            </a>
          </div>
        </div>
      )}

      {!isSideBarTabsVisible && (
        <Anchor
          className="anchorTabs"
          affix={false}
          onChange={onChange}
          items={[
            {
              key: "1",
              href: "#home",
              title: "Home",
              icon: <HomeOutlined className="menuIcons" />,
            },
            {
              key: "2",
              href: "#about",
              title: "About",
              icon: <UserOutlined className="menuIcons" />,
            },
            {
              key: "3",
              href: "#resume",
              title: "Resume",
              icon: <SolutionOutlined className="menuIcons" />,
            },
            {
              key: "4",
              href: "#services",
              title: "Services",
              icon: <ShopOutlined className="menuIcons" />,
            },
            {
              key: "5",
              href: "#skills",
              title: "Skills",
              icon: <LaptopOutlined className="menuIcons" />,
            },
            {
              key: "6",
              href: "#testimonial",
              title: "Testimonial",
              icon: <CommentOutlined className="menuIcons" />,
            },
            {
              key: "7",
              href: "#contact",
              title: "Contact",
              icon: <MailOutlined className="menuIcons" />
            },
          ]}
        />
      )}
    </div>
  );
};

export default SideNavigation;
