﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	var
	dataS	= sources.timeTable;
	adminV 	= _ns.adminView;
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'timeTableDetails';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	// @region namespaceDeclaration// @startlock
	var timeTableEvent = {};	// @dataSource
	// @endregion// @endlock
	function refresh(){
		var
		begin = this.beginDate,
		end = this.endDate;
		
		timetable_time = {
			start : adminV.formatTimeFromNumber(begin.getHours()*60 + begin.getMinutes()),
			end : adminV.formatTimeFromNumber(end.getHours()*60 + end.getMinutes())
		}
		
		sources.timetable_time.sync();
	}
	
	refresh.call(dataS);
	// eventHandlers// @lock

	timeTableEvent.onCurrentElementChange = function timeTableEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		refresh.call(this);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener("timeTable", "onCurrentElementChange", timeTableEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
