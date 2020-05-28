import React from "react";
import SearchBar from '../SearchBar';
import SideBarButton from '../SideBarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);

const SideBarOpen = props => {
  console.log(props);
  let sideBarMenu = props.projectData;
  let probableList = sideBarMenu.filter(probable => probable.fields.Status !== 'Probable' && probable.fields.Status !== 'Paused');
  probableList.sort((a, b) => (a.fields.Name > b.fields.Name) ? 1 : -1);
  console.log(probableList)
  // let checkPhoto = probableList.fields.photo[0];
  // console.log('check ', checkPhoto);

      return (
        <div className= 'sidebar-menu'>
          <div className="btn-home">
            {/* <OpenClose /> */}       {/* I don't need at this time or if at all */}
            <div className = 'search-container'>
                  <SearchBar
                    projectData={props.projectData}
                    selectProject={props.selectProject}
                    filterProjectList={props.filterProjectList}
                    // handleInput={props.handleInput}
                  />
              </div>
          </div>
              <SideBarButton handleClick = {() => props.handleClick()} title = {<FontAwesomeIcon className = 'times' icon = {faTimes} size =' 4x'/>}/>
          <div className = 'menu-container'>
          {probableList.map(sideBar => {
            console.log('x');

          return(
            <li
              // style={{backgroundColor: '#fae596'}}
              key={sideBar.id}
              onClick={() => props.selectProject(sideBar.id)}
              className="menu">
              {sideBar.fields.Name}
            </li>
          )})}
          </div>
        </div>
      );
};
  export default SideBarOpen;
   
                    
                    
                    


    


    


              
            

