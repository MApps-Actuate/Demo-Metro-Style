<%--
	Simple Single sign-on for BIRT Analytics
	This pages, takes the current iPortal user and the password assigned below
	and logs in the user in to BA.
	
	Change following per your install:
		- target variabiable should point to BA application but the URL has to be of "validate" servlet, so just adjust host name, port number and the context as needed
		- Administrator password if required
		- BA's password for users.
--%>
<%@ page contentType="text/html; charset=utf-8" %>

<jsp:useBean
	id="userinfobean"
	class="com.actuate.activeportal.beans.UserInfoBean"
	scope="session"/>	

<% 
response.setHeader("Cache-Control","no-cache"); 
response.setHeader("Pragma","no-cache"); 
response.setDateHeader ("Expires", -1); 

String target = "http://localhost:8110/bafrontend/validate";
String password = "";
//String userName = userinfobean.getUserid();
String userName = request.getParameter("user");
if (userName == null || "".equals(userName)) {
	userName = "";
	target = "/iportal/";
} 
/*
else if ("Administrator".equalsIgnoreCase(userName)) {
	password = "PASSWORD";
} 
*/
else {
	//userName = "Financial";
	password = "PASSWORD";
}


%> 
<html>
	<head>	
	<body onload="document.login.submit();">
	
		<form name="login" method="post" action="<%=target%>">
			<input type="hidden" name="username" placeholder="Username" value="<%=userName%>">
			<input type="hidden" name="password"  value="<%=password%>" >
			<input type="hidden" name="iHubIntegrationEnabled" value="false" />
		</form>
	</body>
	</head>
</html>
