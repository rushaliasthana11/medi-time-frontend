import React from "react";
import ReactDOM from "react-dom";

function InTrayTab() {
    return <div id="menu1" class="tab-pane fade">
                <h2 className="text-center py-lg-3 py-sm-3 mt-3">In Tray!</h2>
                <div className="daily-dose-scrollable">
                    {isLoading ? <div>Loading Data....</div> : (medicines != null ? <MedicineList/> : <h3>No medicines!</h3>)}
                </div>
    </div>
}

export default InTrayTab;