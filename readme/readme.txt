************************************************************
* Installation instruction
************************************************************
1) Files publication
	1.1) publish the project as an application on the iHub
	1.2) publish the Data Objects repository or only the files in the Resources folder
	1.3) publish the ClassicModel_Translation_xx_XX.properties files in the Resources folder
	1.4) publish the ThemesReportItems3.rptlibrary in the Resources folder
	1.5) set all privileges (VSREWDG) on all files (including those in the Resources folder) except secureReport.rptdesign
	1.6) set secure read privileges (VSEWDG) on secureReport.rptdesign	

2) iHub files
	2.1) copy the launchBA.jsp in the iportal root folder of your iHub installation (BIRTiHubVisualization\modules\BIRTiHub\iHub\web\iportal)
		edit it and modify it if necessary
	2.2) edit the login.jsp file in the \BIRTiHubVisualization\modules\BIRTiHub\iHub\web\iportal\iportal\activePortal\private)
		add this in the submitForm function after "var uid = form.userid.value;	" (line 210)
		/* ************************************************** */
		/* Define session variable for demo app               */
		/* ************************************************** */
		  sessionStorage.actUserName = uid;
		/* ************************************************** */	


************************************************************
* Application update
************************************************************
The default language is english. Default "hardcoded" username is Administrator (js\translation.js)
The user name comes from the session variable defines by modifing the login.jsp file (see above)

************************************************************
* Translation
************************************************************
The application and the report are localized

The application is translated in french. The french user is Martin (hardcoded in js\translation.js)
For other/new translation
	1) add new BIRT translation properties files Translation_xx_XX.properties (optionnal ClassicModel_Translation_xx_XX.properties)
	2) add new translation for the webapp in the js/translation.js
	
	  *** default value of the framework ***
			$(".mashboardMenu").html("Mashboards");						$(".communityMenu").html("Community");
			$(".dashboardMenu").html("Dashboards");						$("#customCSSMenu").html("Apply Corporate Colors");
			$(".reportsMenu").html("Reporting");						$("#buttonRun").html("Run Report");
			$(".reportsMenu1").html("Sales report");					$("#buttonClear").html("Clear Filter");
			$(".chartsMenu").html("Visual");							$("#customFilterTitle").html("Target achievement");		
			$(".reportsMenu2").html("On-demand");						$("#libHideShow").html("Hide params");
			$(".reportsMenu3").html("Secure report");					$("#btnFirst").prop("title", "First");
			$(".analyticsMenu").html("Analytics");						$("#btnPrevious").prop("title", "Previous");
			$(".webtoolsMenu").html("Web Tools");						$("#btnNext").prop("title", "Next");
			$(".webtoolsMenu1").html("Dashboard Designer");				$("#btnLastt").prop("title", "Last");
			$(".webtoolsMenu2").html("Analytic Designer");				$("#CSSBlack").html("Black");
			$(".webtoolsMenu3").html("Report Designer");				$("#CSSBlue").html("Blue");
			$(".customsMenu1").html("My Dashboard");					$("#CSSGreen").html("Green");
			$(".customsMenu2").html("My Report");						$("#CSSRed").html("Red");
			$(".customsMenu3").html("My Analytic report");				$("#CSSYellow").html("Yellowe");
			$(".customsMenu4").html("iPortal");							$("#CSSWhite").html("White");
			$(".mapMenu").html("Maps");									$("#Excellent").html("Excellent");
			$(".customMenu1").html("Custom ToolBar");					$("#Good").html("Good");
			$(".JSAPIMenu").html("API");								$("#Average").html("Average");
			$(".securityMenu").html("Security")                 		$("#Bad").html("Bad");
			$(".chartsMenu1").html("Chart and line");		
			$(".chartsMenu2").html("Pie and doughnut");		
			$(".chartsMenu3").html("Other");		
			$(".chartsMenu4").html("External library");		
		  
	3) Optionnal - Modify the different links ("#myDashboardLink", "#myAnalyserLink", "#myReportLink", "#analyticDashboardLink")
	4) modify mashboard1.rptdesign. Modify the computed LABEL2_T and LABEL3_T of the dataset
	5) modify mashboard2.rptdesign. Modify the computed LABEL_T of the dataset
	6) modify mashboardReport.rptdesign. Modify the text component on the middle left of the report (bellow the first chart)
	7) modify mashboardReport.rptdesign. Modify the "translate status" column of the table in the bottom left	
	
	

************************************************************
* Security (PLS)
************************************************************
PLS is based on Country name (Classic Model DB). Create User Group with Country label and manage the user.

************************************************************
* Designer (Dashboard, ReportStudio) + Embeding
************************************************************
The dashboard designer uses /Home/<username in lowercase>/myDashboard.dashboard
The report studio designer uses /Home/<username in lowercase>/myRS.rptdesign



	