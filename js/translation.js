//
// Change label, menu, links... depending on the user name (default user administrator - default language english)
// French user Martin
// German user Thomas
//
	var actUserName = sessionStorage.actUserName;
	if (!actUserName) actUserName = "Administrator";

	var host = location.host;
	var parameters = location.pathname.split("/");
	var appName = parameters[3].split('%20').join(' ');
	var pageName = parameters[4];
	
//	var myHome = '/Home/' + actUserName.toLowerCase() + '/';
	var myHome = '/Applications/' + appName + '/Home/';
	
	var now = new Date();
	var libUserName = actUserName.charAt(0).toUpperCase() + actUserName.slice(1);
	
	if(libUserName == 'Martin') {
		var dayNames = new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
		var monNames = new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
		var today = dayNames[now.getDay()] + " " + now.getDate() + " " + monNames[now.getMonth()] + " " + now.getFullYear();
	}
	else if(libUserName == 'Thomas') {
		var dayNames = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
		var monNames = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
		var today = dayNames[now.getDay()] + " " + now.getDate() + " " + monNames[now.getMonth()] + " " + now.getFullYear();
	}
	else {
		var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		var monNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		var today = dayNames[now.getDay()] + " " + monNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
	};			
	

$(document).ready(function(){	
	debugger;
	$(".my-time").html(today);						
	$(".my-user-name").html(libUserName);
	
	if (showCustomCSSSection) $("#customCSSSectionFull").show();	
	if (showToolBarSection) $("#toolBarSectionFull").show();	
	if (showParamSection) $("#paramSectionFull").show();	
	$("#myDashboardLink").attr("href", "../../dashboard?__design=" + myHome + "myDashboard.dashboard&__launchDesigner=true&usePersonalDashboard=false&__vp=Default%20Volume&volume=Default%20Volume&showBanner=false");
	$("#myReportLink").attr("href", "../../wr?__report=" + myHome +  "myRS.rptdesign&__vp=Default Volume&volume=Default Volume");
	$("#myAnalyserLink").attr("href", "../../da?__data=/Applications/" + appName + "/Data Objects/Classic Models.data&__vp=Default Volume&volume=Default Volume&showBanner=false");	
	

	if(libUserName == 'Martin') {
		$(".mashboardMenu").html("Mashboards");
		$(".dashboardMenu").html("Dashboards");
		$(".reportsMenu").html("Reporting");
		$(".reportsMenu1").html("Rapport de vente");
		$(".reportsMenu2").html("Rapport à la demande");
		$(".reportsMenu3").html("Rapport sécurisé");
		$(".analyticsMenu").html("Analyse");
		$(".webtoolsMenu").html("Designer Web");
		$(".webtoolsMenu1").html("Dashboard Designer");
		$(".webtoolsMenu2").html("Analytic Designer");
		$(".webtoolsMenu3").html("Report Designer");
		$(".customsMenu1").html("Mon Dashboard personnel");
		$(".customsMenu2").html("Mon état");
		$(".customsMenu3").html("Mon état d'analyse");
		$(".customsMenu4").html("Explorateur iPortal");
		$(".mapMenu").html("Cartographie");
		$(".customMenu1").html("Menu personnalisé");
		$(".JSAPIMenu").html("JSAPI");
		$(".securityMenu").html("Sécurité")
		$(".chartsMenu").html("Visuel graphique");
		$(".chartsMenu1").html("Courbes et histogrammes");
		$(".chartsMenu2").html("Graphiques à secteurs");
		$(".chartsMenu3").html("Autres");
		$(".chartsMenu4").html("Biblothèques graphiques externes");
		$(".communityMenu").html("Communauté");
		$("#customCSSMenu").html("Appliquer charte graphique");	
		$("#buttonRun").html("Lancer la génération");
		$("#customFilterTitle").html("Réalisation objectifs");		
		$("#buttonClear").html("Supprimer les filtres");			
		$("#libHideShow").html("Masquer paramêtres");
		$("#btnFirst").attr("title", "Première page");
		$("#btnPrevious").attr("title", "Page précédente");
		$("#btnNext").attr("title", "Page suivante");
		$("#btnLast").attr("title", "Dernière page");
    	$("#myDashboardLink").attr("href", "../../dashboard?__design=" + myHome + "myDashboard FR.dashboard&__launchDesigner=true&usePersonalDashboard=false&__vp=Default%20Volume&volume=Default%20Volume&showBanner=false");
		$("#myAnalyserLink").attr("href", "../../da?__data=/Applications/" + appName + "/Data Objects/Classic Models FR.data&__vp=Default Volume&volume=Default Volume&showBanner=false");
		$("#analyticDashboardLink").attr("href","JSAPI.html?type=dashboard&name=Analytics%20FR&IV=false&param=false&size=landscape");
		$("#CSSBlack").html("Noir");
		$("#CSSBlue").html("Bleu");
		$("#CSSGreen").html("Vert");
		$("#CSSRed").html("Rouge");
		$("#CSSYellow").html("Jaune");
		$("#CSSWhite").html("Blanc");
		$("#Excellent").html("Excellent");
		$("#Good").html("Bon");
		$("#Average").html("Moyen");
		$("#Bad").html("Insuffisant");				
	};

	if(libUserName == 'Thomas') {
		$(".mashboardMenu").html("Mashboards");
		$(".dashboardMenu").html("Dashboards");
		$(".reportsMenu").html("Reporting");
		$(".reportsMenu1").html("Verkauft Bericht");
		$(".reportsMenu2").html("Auf Anfrage Bericht");
		$(".reportsMenu3").html("Gesichert Bericht");
		$(".analyticsMenu").html("Analyse");
		$(".webtoolsMenu").html("Web Designer");
		$(".webtoolsMenu1").html("Dashboard Designer");
		$(".webtoolsMenu2").html("Analytic Designer");
		$(".webtoolsMenu3").html("Report Designer");
		$(".customsMenu1").html("Mein Dashboard");
		$(".customsMenu2").html("Mein Bericht");
		$(".customsMenu3").html("Mein Analyse Bericht");
		$(".customsMenu4").html("iPortal browser");
		$(".mapMenu").html("Kartographie");
		$(".customMenu1").html("Personalisierbaren Menü");
		$(".JSAPIMenu").html("JSAPI");
		$(".securityMenu").html("Sicherheit")
		$(".chartsMenu").html("Graphik");
		$(".chartsMenu1").html("Linien und Spaltendiagramm");
		$(".chartsMenu2").html("Kreisdiagram");
		$(".chartsMenu3").html("Weitere");
		$(".chartsMenu4").html("Benutzerdefinierte Darstellung");
		$(".communityMenu").html("Gemeinschaft");
		$("#customCSSMenu").html("Grafikcharta anwenden");	
		$("#buttonRun").html("Bericht ausführen");
		$("#customFilterTitle").html("Zieles Verwirklichung");		
		$("#buttonClear").html("Filter löschen");			
		$("#libHideShow").html("Parameters ausblenden");
		$("#btnFirst").attr("title", "Erste Seite");
		$("#btnPrevious").attr("title", "Vorherige  Seite");
		$("#btnNext").attr("title", "Nächste Seite");
		$("#btnLast").attr("title", "Letzte  Seite");
	    $("#myDashboardLink").attr("href", "../../dashboard?__design=" + myHome + "myDashboard DE.dashboard&__launchDesigner=true&usePersonalDashboard=false&__vp=Default%20Volume&volume=Default%20Volume&showBanner=false");		
		$("#myAnalyserLink").attr("href", "../../da?__data=/Applications/" + appName + "/Data Objects/Classic Models DE.data&__vp=Default Volume&volume=Default Volume&showBanner=false");
		$("#analyticDashboardLink").attr("href","JSAPI.html?type=dashboard&name=Analytics%20DE&IV=false&param=false&size=landscape");
		$("#CSSBlack").html("Schwarz");
		$("#CSSBlue").html("Blau");
		$("#CSSGreen").html("Grün");
		$("#CSSRed").html("Rot");
		$("#CSSYellow").html("Gelb");
		$("#CSSWhite").html("Weiss");
		$("#Excellent").html("Ausgezeichnet");
		$("#Good").html("Gut");
		$("#Average").html("Durchschnitt");
		$("#Bad").html("Unzureichend");				
	};

});

function paramHideShow() {
	if (hideShow == "isNotVisible") {
		$("#paramSection").slideDown();		
		$("#buttonHideShow").toggleClass("fa-minus-square");
		$("#buttonHideShow").toggleClass("fa-plus-square");
		if(libUserName == 'Martin') {
			$("#libHideShow").html("Masquer paramêtres");
		} else if(libUserName == 'Thomas') {
			$("#libHideShow").html("Parameters ausblenden");
		} else {
			$("#libHideShow").html("Hide params");
		};
		
		hideShow = "isVisible";
	}
	else {
		$("#paramSection").slideUp();
		$("#buttonHideShow").toggleClass("fa-minus-square");
		$("#buttonHideShow").toggleClass("fa-plus-square");
		if(libUserName == 'Martin') {
			$("#libHideShow").html("Afficher paramêtres");
		} else if(libUserName == 'Thomas') {
			$("#libHideShow").html("Parameters anzeigen");
		} else {
			$("#libHideShow").html("Show params");
		};

		hideShow = "isNotVisible";			
	};
};