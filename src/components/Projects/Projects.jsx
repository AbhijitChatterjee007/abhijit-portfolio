import React, { useContext, useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProjectDetails from "./ProjectDetails";

const TabPanel=(project) => {
  const {title, info, info2, url, repo, img, id, value, index} = project;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
    >
      {value === index && (
        <ProjectDetails title={title} info={info} info2={info2} url ={url} repo={repo} img={img} id={id}/>
      )}
    </div>
  );
}

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [tabIndex, setTabIndex] = useState(0)
  const [projectKey, setProjectKey] = useState("");
  const goldman ="Goldman";
  const aws ="AWS";
  const mern = "MERN";
  const facebook ="Facebook";
  const ui="UI Builds";
  const next="NEXT JS";
  const misc = "misc"
  const tabs = [goldman,aws,mern,facebook ,ui,next, misc ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects" id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Tabs
            className="tabStyles"
            value={tabIndex}
            onChange={(e, index) => {
              setTabIndex(index)}}
          >
          {tabs.map(tab => {
            return <Tab className="tab" label={tab} onClick = {() =>{setProjectKey(tab)}}/>
          })}
          </Tabs>
          {
            projects.map((project) => {
            return (              
              project?.map((item) => {
                const {key, title, info, info2, url, repo, img, id} = item;
                return (projectKey.toUpperCase().trim() === key.toUpperCase().trim() &&
                <TabPanel index={tabIndex} value={tabIndex} title={title} info={info} info2={info2} url ={url} repo={repo} img={img} id={id}/>
            );
              }) 
           
          )})}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
