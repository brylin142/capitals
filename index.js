const season18 = () => {
  let svg = d3.select(".chart18")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1300)
  
  d3.csv("17-18.csv", function (data18) {
    console.log(data18)
    let elem = svg.selectAll("g rect").data(data18)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50))
      // .attr("x", 500)
      .attr("fill", d => color(d.TOI))
      .attr("text-align", "center")

    elemEnter.append("text")
      // .attr("x", 500)
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function(d){
        return d.TOI;
      })
    
  });
};

const season17 = () => {
  let svg = d3.select(".chart17")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("16-17.csv", function (data17) {
    console.log(data17)
    let elem = svg.selectAll("g rect").data(data17)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season16 = () => {
  let svg = d3.select(".chart16")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("15-16.csv", function (data16) {
    console.log(data16)
    let elem = svg.selectAll("g rect").data(data16)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season15 = () => {
  let svg = d3.select(".chart15")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("14-15.csv", function (data15) {
    console.log(data15)
    let elem = svg.selectAll("g rect").data(data15)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season14 = () => {
  let svg = d3.select(".chart14")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("13-14.csv", function (data14) {
    console.log(data14)
    let elem = svg.selectAll("g rect").data(data14)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season13 = () => {
  let svg = d3.select(".chart13")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("12-13.csv", function (data13) {
    console.log(data13)
    let elem = svg.selectAll("g rect").data(data13)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season12 = () => {
  let svg = d3.select(".chart12")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("11-12.csv", function (data12) {
    console.log(data12)
    let elem = svg.selectAll("g rect").data(data12)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season11 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("10-11.csv", function (data11) {
    console.log(data11)
    let elem = svg.selectAll("g rect").data(data11)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season10 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("09-10.csv", function (data10) {
    console.log(data10)
    let elem = svg.selectAll("g rect").data(data10)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season09 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("08-09.csv", function (data09) {
    console.log(data09)
    let elem = svg.selectAll("g rect").data(data09)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season08 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("07-08.csv", function (data08) {
    console.log(data08)
    let elem = svg.selectAll("g rect").data(data08)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season07 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("06-07.csv", function (data07) {
    console.log(data07)
    let elem = svg.selectAll("g rect").data(data07)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};

const season06 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("05-06.csv", function (data06) {
    console.log(data06)
    let elem = svg.selectAll("g rect").data(data06)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["white", "#992932"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => i * 50)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 25)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};


document.addEventListener("DOMContentLoaded", () => {
  console.log("hello")
  season18();
  season17();
  season16();
  season15();
  season14();
  season13();
  season12();
  season11();
  season10();
  season09();
  season08();
  season07();
  season06();
  console.log("after")
});