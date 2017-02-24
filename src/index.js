import React from 'react'
import ReactDOM from 'react-dom'
import { Fabric } from 'office-ui-fabric-react';

ReactDOM.render(
  <Fabric>
        <div className="ms-Grid"> 
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg2">A</div>
            <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg10">B</div>
          </div>
        </div>
      </Fabric>,
  document.getElementById('app')
);
