import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function DailyDoseCreatedTab() {

    const loadMedicinesUrl = "http://localhost:8080/medicines/current/";
    const medicineHistoryUrl = "http://localhost:8080/medicine-history/";
    const [medicines, setMedicines] = useState(null);
    const [intraymeds, setInTrayMedicines] = useState(null);
    const [isLoading, loader] = useState(true);

    useEffect(()=>{
        getCreatedMedicines();
    }, []);

    function getCreatedMedicines() {
        const createdMedicinesBaseUrl = loadMedicinesUrl + 'created';
        axios.get(createdMedicinesBaseUrl).then((response) =>{
            if(response.data != null && response.data.length != 0) {
                setMedicines(response.data);
            }
            else
                setMedicines(null);
            loader(false);
    });
    }

    function getInTrayMedicines() {
        const inTrayMedicinesBaseUrl = loadMedicinesUrl + 'inTray';
        axios.get(inTrayMedicinesBaseUrl).then((response) =>{
            if(response.data != null && response.data.length != 0) {
                setInTrayMedicines(response.data);
            }
        });
    }


    return <div id="home" class="tab-pane fade in active show">
                <h2 className="text-center py-lg-3 py-sm-3 mt-3">Lets Start Your Daily Dose</h2>
                <div className="daily-dose-scrollable">
                {isLoading ? <div>Loading Data....</div> : (medicines != null ? <MedicineList/> : <h3>No medicines!</h3>)}
                </div>
            </div>





function MedicineList() {
    return <div>
    {medicines.map(populateMedicines)}
    </div>
}

function populateMedicines(meds) {
    return <div class="py-2">
        <DailyDoseCard medId={meds.medicineId} medsName={meds.medicineName} medsCompo={meds.medicineComposition} stock={meds.stockCount} />
        </div>;
}

function DailyDoseCard(meds) {
    console.log(meds);
    return <div className="container p-1 daily-dose-card">
            <div className="row">
                <div className="col-lg-5 col-sm-5 text-center">
                    <div className="meds-name">{meds.medsName}</div>
                    <div>({meds.medsCompo} mg)</div>
                </div>
                <div className="col-lg-2 col-sm-2 text-center my-auto">
                    <div>{meds.stock} Nos </div>
                    <div>left</div>
                </div>
                <div className="col-lg-5 col-sm-5 my-auto">
                    <div className="px-3">
            <button className="btn btn-block btn-pill btn-md btn-dark" onClick={() => moveToTrayAlert(meds.medId)}> Move to Tray <i class="fa fa-arrow-circle-right"></i></button>
            </div>
                </div>
            </div>
        </div>

}

function moveToTrayAlert(medicineId) {
    
    if( window.confirm("Are you sure y ou want to move this medicine to tray?") ) {
        moveMedToInTray(medicineId);
        // getCreatedMedicines();
    }
}

function moveMedToInTray(medId) {
    console.log(medId);
    const inTrayMedicinesBaseUrl = medicineHistoryUrl + 'move-to-tray/' + medId;
    axios.post(inTrayMedicinesBaseUrl).then(() =>{
            // getInTrayMedicines();
            getCreatedMedicines();
    });
}

}

export default DailyDoseCreatedTab;