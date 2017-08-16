$(function() {
    
  var graph = $("#graph");
  var g_offset = graph.offset();
  var endPoint = "data-"+ (g_offset.top - 5);
  //endPoint = "data-500";
  console.log(endPoint);
  
  // Set the attributes dynamically
  // odd ones
  graph.find('ul')
    .children('li:nth-child(2n+1)')
    .attr("data-0", "top:-500px; opacity: 0;")
    .attr("data-200-top", "top:0px; opacity: 1;");
  // even blobs 
  graph.find('ul')
  .children('li:nth-child(2n+2)')
  .attr("data-0", "bottom: -500px; opacity: 0;")
  .attr("data-200-top", "bottom: 50px; opacity: 1;");
  
  
  // Start Skrollr
  skrollr.init();
});