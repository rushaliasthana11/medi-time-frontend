import React from "react";
import ReactDOM from "react-dom";

function DailyDoseTab() {
    return <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#home">Dose Time</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu1">In Tray</a>
            </li>
        </ul>
}

export default DailyDoseTab;