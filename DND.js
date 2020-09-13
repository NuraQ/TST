import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridProvider from "./GridContext";
import GridContext from "./GridContext";import   {contact}  from './Update';

import {useGlobalState} from './GlobalState';
import Samples from './Samples';
import {setDragging} from './GlobalState';


function DND() {
  const { items, moveItem } = useContext(GridContext);
 var xx =  useGlobalState('items')
console.log("sthh"+items);


// console.log("this is "+x)
  return (
    <div >
      <Grid>
        {items.map(item => (
          
          <div>{item.id}
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
          {"http://127.0.0.1:9999/load_image/?img=" + `${item.image}` + "&&type=" + `${item.category_id}`}

            <GridItem>ds
              <img src={encodeURI("http://127.0.0.1:9999/load_image/?img=" + `${item.image}` + "&&type=" + `${item.category_id}`)}></img>
            </GridItem>
          </DragItem>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default DND;
