import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import DailyDoseTab from "./DailyDoseTabs";
import DailyDoseCreatedTab from "./DailyDoseCreatedTab";
import InTrayTab from "./InTrayTab";

function DailyDose() {
return <div className="p-sm-3">
            <div className="container-lg  bg-light my-5 p-5 border-rounded">
                <div className="col-lg-7">
                    <DailyDoseLayout></DailyDoseLayout>
                </div>
            </div>
        </div>

function DailyDoseLayout() {
    return (
    <div>
        <DailyDoseTab></DailyDoseTab>
        <div class="tab-content">
            <DailyDoseCreatedTab></DailyDoseCreatedTab>
            <InTrayTab></InTrayTab>
        </div>
    </div>);
}
    

}

export default DailyDose;