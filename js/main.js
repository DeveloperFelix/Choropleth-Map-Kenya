

countyMap();
subcountyMap();
// performClick();


function countyMap(){

	var svg = d3.select("#county")
	            .append("svg")
	            .attr("width",600)
	            .attr("height",600)
	            .style("background-color","transparent");

	var projection  = d3.geo.mercator()
	           .scale(2800)
	           .center([39.3,0.5])
	           .translate([600 / 2, 600 / 2]);

	var path     = d3.geo.path()
	                    .projection(projection);

  d3.json("json/kenyan-counties.geojson",function(data){

    svg.selectAll("path")
       .data(data.features)
       .enter()
       .append("path")
       .attr("d",path)
       .attr("id",function(d){
       
         var str
       
       try{
          str=d.properties.COUNTY.toUpperCase().replace("/","_").replace("\.","_").replace(/ /gi,"_").replace(/\//g,"_");
        }catch(error){}

       if(str=="KEIYO-MARAKWET"){
           str="elegeyo_marakwet".toUpperCase();
       }else if(str=="THARAKA"){
           str="tharaka_nithi".toUpperCase();
        }

            return str.replace("\'","");
       })
       .attr("class","reg")
       .attr("stroke","grey")
       .attr("fill","black");                                 
  });
}
function subcountyMap(){

	var svg = d3.select("#subCounty")
	            .append("svg")
	            .attr("width",600)
	            .attr("height",600)
	            .style("background-color","transparent");

	var projection  = d3.geo.mercator()
	           .scale(2800)
	           .center([39.3,0.5])
	           .translate([600 / 2, 600 / 2]);

	var path     = d3.geo.path()
	                    .projection(projection);

  d3.json("json/constituencies.json",function(data){

	  svg.selectAll("path")
       .data(data.features)
       .enter()
       .append("path")
       .attr("d", path)
       .attr("id",function(d){  
       
           var temp_str=d.properties.CONSTITUEN;
         
         if(temp_str==="CHUKA/IGAMBANG'OMBE"){
             temp_str="CHUKA_IGAMBANGOMBE";
         }else if(temp_str==="MT. ELGON"){
             temp_str="MT_ELGON";
         }else if(temp_str==="OL JOROK"){
             temp_str="OL JORO OROK";
         }else if(temp_str==="WEBUTE WEST"){
             temp_str="WEBUYE WEST";
         }else if(temp_str==="KIAMBU"){
             temp_str="KIAMBU TOWN";
         }
                return temp_str.replace(/ /gi,"_").replace(/\//g,"_");
       })
       .attr("class","cons_node")
       .attr("stroke","grey")
       .attr("fill","black"); 
       
       });                    
}
function openTab(evt, arg) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(arg).style.display = "block";
    evt.currentTarget.className += " active";
}
function performClick() {

  var chooser = document.querySelector("#theFile");
  console.log(chooser);
    chooser.addEventListener("change", function(evt) {
      console.log(this.value);
    }, false);

    chooser.click();  

}
