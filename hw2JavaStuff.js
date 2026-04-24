function useridvalidation()
    {
        x = document.getElementById("user").value;
        if( x.length<5) { 
              document.getElementById("usercheck").innerHTML = "Username too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[A-Za-z]+[A-Za-z0-9-_]/)) {
              document.getElementById("usercheck").innerHTML = "";  
            }
            else  {
              document.getElementById("usercheck").innerHTML = "Invalid characters and must start with a letter";
              error_flag = 1;
              }
        }
    }

function passwordmatch() {
    x=document.getElementById("pass").value;
    y=document.getElementById("repass").value;
    if ( x==y ) 
    {
      document.getElementById("repass_match").innerHTML = "";
    } else  
      {
         document.getElementById("repass_match").innerHTML = "Passwords need to match!";
         error_flag = 1;
      }
    }

function namevalidation()
    {
        x = document.getElementById("firstname").value;
        if( x.length<2) { 
              document.getElementById("namecheck").innerHTML = "First name too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z\-']/)) {
              document.getElementById("namecheck").innerHTML = "";  
            }
            else  {
              document.getElementById("namecheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function namevalidation2()
    {
        x = document.getElementById("lastname").value;
        if( x.length<2) { 
              document.getElementById("namecheck").innerHTML = "Last name too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z2-5\-']/)) {
              document.getElementById("namecheck").innerHTML = "";  
            }
            else  {
              document.getElementById("namecheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function namevalidation3()
    {
        x = document.getElementById("middlename").value;
        if( x.length>0) { 
              if (x.match(/[A-Za-z]/)) {
              document.getElementById("namecheck").innerHTML = "";  
            }
            else  {
              document.getElementById("namecheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function socialvalidation()
    {
        x = document.getElementById("social").value;
        if( x.length<9) { 
              document.getElementById("socialcheck").innerHTML = "Social Security too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[0-9]+/)) {
              document.getElementById("socialcheck").innerHTML = "";  
            }
            else  {
              document.getElementById("socialcheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function addressvalidation()
    {
        x = document.getElementById("addressone").value;
        if( x.length<2) { 
              document.getElementById("addresscheck").innerHTML = "Address Required";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z2-5\-']/)) {
              document.getElementById("addresscheck").innerHTML = "";  
            }
            else  {
              document.getElementById("addresscheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function locationvalidation()
    {
        x = document.getElementById("city").value;
        if( x.length<2) { 
              document.getElementById("locationcheck").innerHTML = "City Required";  
              error_flag = 1;
        }
        else {
            if (x.match(/[a-zA-Z]+/)) {
              document.getElementById("locationcheck").innerHTML = "";  
            }
            else  {
              document.getElementById("locationcheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function locationvalidation2()
    {
        x = document.getElementById("zip").value;
        if( x.length<5) { 
              document.getElementById("locationcheck").innerHTML = "Zipcode too short";  
              error_flag = 1;
        }
        else {
            if (x.match(/[0-9]+/)) {
              document.getElementById("locationcheck").innerHTML = "";  
            }
            else  {
              document.getElementById("locationcheck").innerHTML = "Invalid characters";
              error_flag = 1;
              }
        }
    }

function emailvalidation()
    {
        x = document.getElementById("email").value;
        if( x.length>0) { 
              if (x.match(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]/)) {
              document.getElementById("emailcheck").innerHTML = "";  
            }
            else  {
              document.getElementById("emailcheck").innerHTML = "Invalid characters / format";
              error_flag = 1;
              }
        }
    }

function statevalidation() 
    {
        x=document.getElementById("state").value;
        if(x=="") { 
              document.getElementById("locationcheck").innerHTML = "State is required";  
              error_flag = 1;
        }
        else {
          document.getElementById("locationcheck").innerHTML = ""; 
        }
    }

function passpattern() 
    {
    var passtextresponse;
    var passvalue = document.getElementById("pass").value;
    console.log(passvalue);
    
    if (passvalue.search(/[a-z]/) < 0 ) {
      passtextresponse = "Requires 1 lower case letter";
      error_flag = 1;
    } else {
      passtextresponse = "";
    }
    document.getElementById("passerror1").innerHTML = passtextresponse;
    
    if (passvalue.search(/[A-Z]/)< 0)  {  
      passtextresponse = "Requires 1 upper case letter";
      error_flag = 1;
    } else {
      passtextresponse = "";
    }
    document.getElementById("passerror2").innerHTML = passtextresponse;
  
   if (passvalue.search(/[0-9]/)<0 ) {   
    passtextresponse = "Requires 1 number";
    error_flag = 1;
    } else {
    passtextresponse = "";
    }
    document.getElementById("passerror3").innerHTML = passtextresponse;
    
   if (passvalue.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passtextresponse = "Requires 1 special character";
    error_flag = 1;
    } else {
    passtextresponse = "";
    }
    document.getElementById("passerror4").innerHTML = passtextresponse;
    
    if (passvalue.length < 8) {
      passtextresponse = "Requires minimum of 8 characters";
      error_flag = 1;
  } else {
      passtextresponse = "";
  }
  document.getElementById("passerror5").innerHTML = passtextresponse;
  }

function showdatainput() {
  var formdata = document.getElementById("signupform");
  var dataoutput;
  var datatype;
  var i;
  dataoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formdata.length; i++) {
            console.log("item: "+i+" "+formdata.elements[i].name+" = "+formdata.elements[i].value);
              datatype = formdata.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formdata.elements[i].checked) {
                    dataoutput = dataoutput + "<tr><td align='left'>"+formdata.elements[i].name+"</td>";
                    dataoutput = dataoutput +"<td align='left'>"+ datatype + "</td>";
                    dataoutput = dataoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formdata.elements[i].checked) {
                      dataoutput = dataoutput + "<tr><td align='left'>"+formdata.elements[i].name+"</td>";
                      dataoutput = dataoutput +"<td align='left'>"+ datatype + "</td>";
                      dataoutput = dataoutput +"<td class='outputdata'>"+ formdata.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  dataoutput = dataoutput + "<tr><td align='left'>"+formdata.elements[i].name+"</td>";
                  dataoutput = dataoutput +"<td align='left'>"+ datatype + "</td>";
                  dataoutput = dataoutput +"<td class='outputdata'>"+ formdata.elements[i].value+"</td></tr>";
                  break;
                default:
                  dataoutput = dataoutput + "<tr><td align='left'>"+formdata.elements[i].name+"</td>";
                  dataoutput = dataoutput +"<td align='left'>"+ datatype + "</td>";
                  dataoutput = dataoutput +"<td class='outputdata'>"+ formdata.elements[i].value+"</td></tr>";
                }
        
  }

   if (dataoutput.length>0) { 
      dataoutput = dataoutput + "</table>";
      document.getElementById("showdataoutput").innerHTML = dataoutput;
   }
}