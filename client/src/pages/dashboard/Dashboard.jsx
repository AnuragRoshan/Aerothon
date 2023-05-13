import React from 'react'
// import DoughnutChart from '../graphs_dashboard/chart-doughnut'
// import BarChart from '../graphs_dashboard/chart-horizontal'
// import PieChart from '../graphs_dashboard/chart-pie'
import '../dashboard/Dashboard.css'

import DoughnutAircraftModelf from '../graphs_dashboard/fuselage/pie-aircraftModel'
import DoughnutLocationf from '../graphs_dashboard/fuselage/pie-location'
import DoughnutManufacturerf from '../graphs_dashboard/fuselage/pie-manufacturer'
import PieMaterialf from '../graphs_dashboard/fuselage/pie-material'
import PieUsecasef from '../graphs_dashboard/fuselage/pie-usecase'
import BarChartf from '../graphs_dashboard/fuselage/bar-newRecycle'

import DoughnutAircraftModelA from "../graphs_dashboard/avionics/pie-aircraftModel";
import DoughnutLocationA from "../graphs_dashboard/avionics/pie-location";
import DoughnutManufacturerA from "../graphs_dashboard/avionics/pie-manufacturer";
import PieMaterialA from "../graphs_dashboard/avionics/pie-material";
import PieUsecaseA from "../graphs_dashboard/avionics/pie-usecase";
import BarChartA from "../graphs_dashboard/avionics/bar-newRecycle";

import DoughnutAircraftModelE from "../graphs_dashboard/engine/pie-aircraftModel";
import DoughnutLocationE from "../graphs_dashboard/engine/pie-location";
import DoughnutManufacturerE from "../graphs_dashboard/engine/pie-manufacturer";
import PieMaterialE from "../graphs_dashboard/engine/pie-material";
import PieUsecaseE from "../graphs_dashboard/engine/pie-usecase";
import BarChartE from "../graphs_dashboard/engine/bar-newRecycle";

import DoughnutAircraftModelL from "../graphs_dashboard/landingGear/pie-aircraftModel";
import DoughnutLocationL from "../graphs_dashboard/landingGear/pie-location";
import DoughnutManufacturerL from "../graphs_dashboard/landingGear/pie-manufacturer";
import PieMaterialL from "../graphs_dashboard/landingGear/pie-material";
import PieUsecaseL from "../graphs_dashboard/landingGear/pie-usecase";
import BarChartL from "../graphs_dashboard/landingGear/bar-newRecycle";

import DoughnutAircraftModelW from "../graphs_dashboard/wings/pie-aircraftModel";
import DoughnutLocationW from "../graphs_dashboard/wings/pie-location";
import DoughnutManufacturerW from "../graphs_dashboard/wings/pie-manufacturer";
import PieMaterialW from "../graphs_dashboard/wings/pie-material";
import PieUsecaseW from "../graphs_dashboard/wings/pie-usecase";
import BarChartW from "../graphs_dashboard/wings/bar-newRecycle";


const Dashboard = () => {
  return (
    <div className="container">
            <h1 className="title">Fuselage</h1>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div className='pie' style={{flex:"1"}}><PieUsecasef/></div>
            <div className='pie' style={{flex:"1"}}><PieMaterialf/></div>
            <div className='doughNut' style={{flex:"1"}}><DoughnutManufacturerf/></div>
            <div className='doughNut' style={{flex:"1"}}><DoughnutLocationf/></div>
            <div className='doughNut' style={{flex:"1"}}><DoughnutAircraftModelf/></div>
            <div className='bar' style={{flex:"1"}}><BarChartf/></div>
        </div>

            <h1 className="title">Avionics</h1>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieUsecaseA/></div>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieMaterialA/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutManufacturerA/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutLocationA/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutAircraftModelA/></div>
            <div className='bar' style={{flex:"1", flex :"1"}}><BarChartA/></div>
        </div>

            <h1 className="title">Engine</h1>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieUsecaseE/></div>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieMaterialE/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutManufacturerE/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutLocationE/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutAircraftModelE/></div>
            <div className='bar' style={{flex:"1", flex :"1"}}><BarChartE/></div>
        </div>

            <h1 className="title">Landing Gear</h1>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieUsecaseL/></div>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieMaterialL/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutManufacturerL/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutLocationL/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutAircraftModelL/></div>
            <div className='bar' style={{flex:"1", flex :"1"}}><BarChartL/></div>
        </div>

            <h1 className="title">Wings</h1>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieUsecaseW/></div>
            <div className='pie' style={{flex:"1", flex :"1"}}><PieMaterialW/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutManufacturerW/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutLocationW/></div>
            <div className='doughNut' style={{flex:"1", flex :"1"}}><DoughnutAircraftModelW/></div>
            <div className='bar' style={{flex:"1", flex :"1"}}><BarChartW/></div>
        </div>

      {/* <div className="doughNut">      <DoughnutChart />      </div>
      <div className="bar">        <BarChart />      </div>
      <div className="pie">        <PieChart />      </div> */}


    </div>
  );
}

export default Dashboard
