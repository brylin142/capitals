const season = () => {
  let svg = d3.select(".chart")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 1000)
  
  d3.csv("17-18.csv", function (data18) {
    let elem = svg.selectAll("g rect").data(data18)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      .attr("x", 500)
      .attr("fill", d => color(d.TOI))
      // .append("text")
      //     .text(d => d.TOI)

    elemEnter.append("text")
      .attr("x", 500)
      .attr("y", (d, i) => (i * 50) - 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function(d){
        return d.TOI;
    })

    // d3.csv("17-18.csv", function (data18) {
    //   let canvas = d3.select(".chart")
    //     .append("svg")
    //     .attr("width", 1000)
    //     .attr("height", 1000)

    //   canvas.selectAll("rect").data(data18)
    //     .enter()
    //     .append("rect")
    //     .attr("width", 40)
    //     .attr("height", 40)
    //     .attr("y", (d, i) => i * 50)
    //     .attr("fill", "red")
    //     // .append("text")
    //     //     .text(d => d.TOI)
    //     .append("g")
    //     .append("text")
    //     .text(function (d) {
    //       return d.TOI
    //     })

  });

  // d3.csv("16-17.csv", function (data17) {
  //   console.log(data17)
  //   let canvas = d3.select(".chart")

  //   canvas.selectAll("rect").data(data17)
  //     .merge(data17)
  //     .attr("text", d => d.TOI)
  //     .attr("width", 40)
  //     .attr("height", 40)
  //     .attr("y", (d, i) => i * 50)
  //     .attr("x", (d, i) => i * 50)
  //     .attr("fill", "blue")



  // });
};


document.addEventListener("DOMContentLoaded", () => {
  // document.getElementsByClassName("add-number")[0].addEventListener("click", addNumber);
  // document.getElementsByClassName("remove-number")[0].addEventListener("click", removeNumber);
  // chart();
  console.log("hello")
  season();
  console.log("after")
  // setInterval(addNumber, 2000);
});