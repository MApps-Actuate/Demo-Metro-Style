//***************************** U R L *******************************
//** <pageName>?[type=]&[name=]&[IV=]&[param=]&[size=]                       
//**                                                                 
//** type : dashboard                                                 
//        design     (viewer with no toolBar)                      
//        design-t   (viewer with toolBar)                         
//        design-c   (viewer with custom toolBar)
//        document   (viewer with no toolBar)                         
//        document-t (viewer with toolBar)                         
//        document-c (viewer with custom toolBar)
//** name : file name                                                
//** IV : true/false - Enable Interactive Viewer                      
//** param : true/false - display a parameter windows 
//** size : portrait / landscape / mashboard
//***************************** U R L *******************************
//debugger;

var host = location.host;
var parameters = location.pathname.split("/");
var appName = parameters[3].split('%20').join(' ');
var pageName = parameters[4];

parameters = location.search.substring(1).split("&");
var temp = parameters[0].split("=");
var type = temp[1];
temp = parameters[1].split("=");
var acName = temp[1].split('%20').join(' ');
temp = parameters[2].split("=");
var IV = temp[1];
temp = parameters[3].split("=");
var withParam = temp[1];
temp = parameters[4].split("=");
var size = temp[1];

if (withParam == "true") {
	actuate.load('parameter');
};
if(type=="dashboard") {
	actuate.load('dashboard');
	if (acName.substring(0,2) == 'my') {
		showCustomCSSSection = true;
		myCSS = "";
		var dashboardName = myHome + acName + '.dashboard';
	} else {
		myCSS = "css/overrideActuate_black.css";
		var dashboardName = '/Applications/' + appName + '/Dashboards/' + acName + '.dashboard';
	}
};

if (type == "design" || type == "design-t" || type == "design-c")  {
	actuate.load('viewer');
	if (acName.substring(0,2) == 'my') var designName = myHome + acName + '.rptdesign';
	else var designName = '/Applications/' + appName + '/Report Designs/' + acName + '.rptdesign';
};
if (type == "document" || type == "document-t" || type == "document-c") {
	actuate.load('viewer');
	if (acName.substring(0,2) == 'my') var reportName = myHome + acName + '.rptdocument';
	else var reportName = '/Applications/' + appName + '/Report Designs/' + acName + '.rptdocument';
};

if (type == "design-c" || type == "document-c") {
	showToolBarSection = true;
};

var reqOps = new actuate.RequestOptions( );
reqOps.setRepositoryType(actuate.RequestOptions.REPOSITORY_ENCYCLOPEDIA);
	
if (withParam=="true") {
	showParamSection = true;
	actuate.initialize( 'http://' + host + '/iportal/', reqOps==undefined?null:reqOps, null, null, displayParams);
}
else {
	actuate.initialize( 'http://' + host + '/iportal/', reqOps==undefined?null:reqOps, null, null, myInit);
};

function initializeCustomCSS() {
	$('head').append('<link id="myCSS" rel="stylesheet" type="text/css" href="css/blank.css">');
};

function loadCustomCSS(url) {
	if(url.length > 0) {
		$("#myCSS").attr("href", url);
	};
};

function displayParams() {
	param = new actuate.Parameter( 'acParams' );
	param.setReportName(designName);
	param.submit();
};

function processParameters( ) {
	param.downloadParameterValues(myInit);
};


function myInit(paramValues){
	if (type != "dashboard") {
		var options = new actuate.viewer.UIOptions( );
	};		
	if (type == "design" || type == "document") {
		options.enableToolBar(false);
		options.enableToolbarContextMenu(false);
	};
	if (type == "design-t" || type == "document-t") {
		options.enableToolBar(true);
	};	
	if (type == "design-c" || type == "document-c") {
		options.enableToolBar(false);
		options.enableToolbarContextMenu(false);		
	};	
	
	if (type == "design" || type == "design-t" || type == "design-c") {
		viewer = new actuate.Viewer( 'acContainer1' );
		viewer.setReportDesign(designName);
	};
	if (type == "document" || type == "document-t" || type == "document-c") {
		viewer = new actuate.Viewer( 'acContainer1' );
		viewer.setReportName(reportName);	
	};
	if (type == "dashboard") {
		viewer = new actuate.Dashboard( 'acContainer1' );
		viewer.setDashboardName(dashboardName);	
	};
	
	if (withParam=="true") {
		viewer.setParameterValues(paramValues);
	};

	if (size == "portrait") {
		viewer.setSize(950,1000);
		if(!$("#acContainer1").hasClass("acPortrait")) $("#acContainer1").addClass("acPortrait");
			
	} else if (size == "landscape") {
		viewer.setSize(1520,1000);
		if (type != "dashboard") { 
			if(!$("#acContainer1").hasClass("acLandscape")) $("#acContainer1").addClass("acLandscape");
		} else {	
			if(!$("#acContainer1").hasClass("acDashboard")) $("#acContainer1").addClass("acDashboard");
		}
	} else if (size == "mashboard") {
		viewer.setSize(1520,1000);
		if(!$("#acContainer1").hasClass("acMashboard")) $("#acContainer1").addClass("acMashboard");
	};
	
	if (type != "dashboard") {
		viewer.setUIOptions( options );
	};
	if(IV=="true") {
		viewer.submit(function() {viewer.enableIV();});
	}
	else {
		viewer.submit();	
	};
	
	initializeCustomCSS();
	loadCustomCSS(myCSS);
};


function doAction(act){
	switch (act){
		case 'first':
			viewer.gotoPage(1);
			break;
		case 'pagedown':
			if (viewer.getCurrentPageNum() > 1 ) {
				viewer.gotoPage(viewer.getCurrentPageNum() - 1);
			}
			break;
		case 'pageup':
			if (viewer.getCurrentPageNum() < viewer.getTotalPageCount()) {
				viewer.gotoPage(viewer.getCurrentPageNum() + 1);
			}
			break;
		case 'last':
			viewer.gotoPage(viewer.getTotalPageCount());
			break;
		case 'jump':
			viewer.gotoPage(document.getElementById('jump').value);
			break;
		case 'bookmark':
			viewer.gotoBookmark(document.getElementById('bookmark').value);
			break;
		case 'print':
			viewer.showPrintDialog();
			break;
		case 'data':
			viewer.showDownloadResultSetDialog();
			break;
		case 'export':
			viewer.showDownloadReportDialog();
			break;
		case 'download':
			viewer.downloadReport(document.getElementById('format').value, document.getElementById('pagerange').value);
			break;
		case 'PDF':
			viewer.downloadReport("pdf","1-" + viewer.getTotalPageCount());
			break;
		case 'XLSX':
			viewer.downloadReport("xlsx","1-" + viewer.getTotalPageCount());
			break;
	}
};

function clearFilters() {
	if(document.jsapiform.EXCELLENT.checked && document.jsapiform.GOOD.checked && document.jsapiform.AVERAGE.checked && document.jsapiform.BAD.checked)
		return;
	else {
		document.jsapiform.EXCELLENT.checked = true;
		document.jsapiform.GOOD.checked = true;
		document.jsapiform.AVERAGE.checked = true;
		document.jsapiform.BAD.checked = true;
	};				
};

function applyFilters(){
	var myFilterString = [3];
	if(document.jsapiform.EXCELLENT.checked){
		myFilterString[0] = "EXCELLENT";
	}; 		
 	if(document.jsapiform.GOOD.checked){
		myFilterString[1] = "GOOD";
	}; 		
 	if(document.jsapiform.AVERAGE.checked){
		myFilterString[2] = "AVERAGE";
	}; 		
	if(document.jsapiform.BAD.checked){
		myFilterString[3] = "BAD";
	}; 		
	
	var bviewer = viewer;
	var bpagecontents = bviewer.getCurrentPageContent();
	var btable = bpagecontents.getTableByBookmark("mySRTable");
	
	if (btable == null) return;	// unable to get handle to table
	
	var filter = new actuate.data.Filter("AWARD", "IN", myFilterString);
	var filters = new Array();
	filters.push(filter);
	
	btable.setFilters(filters);
	btable.submit();
};