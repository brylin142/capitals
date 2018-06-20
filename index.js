const season18 = () => {
  let svg = d3.select(".chart18")
    .append("svg")
    .attr("width", 200)
    .attr("height", 1300)
  
  svg.append("g")
    .classed("boxes", true)

  svg.append("g")
    .classed("overlays", true)
  
  d3.csv("17-18.csv", function (data18) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data18)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])


    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 140)
      .attr("fill", d => color(d.TOI))
      .attr("text-align", "center")
      .on("mouseover", function (d) {
        console.log(d)
        svg.select("g.overlays")
          .append("rect")
            .attr("width", 300)
            .attr("height", 300)
            .attr("fill", color(d.TOI))
      })
      .on("mouseout", function (d) {
        svg.select("g.overlays rect")
          .remove()
      });

    elemEnter.append("text")
      .attr("x", 6)
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
      .attr("font-weight", 200)
      .text(function(d){
        return d.TOI;
      })
    
    elemEnter.append("text")
      .attr("x", 60)
      // .attr("x", 500)
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", "black")
      .attr("font-weight", 200)
      .text(function(d){
        return d.Player;
      })
    
  });
};

const season17 = () => {
  let svg = d3.select(".chart17")
    .append("svg")
    .attr("width", 60)
    .attr("height", 1000)

  d3.csv("16-17.csv", function (data17) {
    let elem = svg.selectAll("g rect").data(data17)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))
      .on("mouseover", function (d) {
        d3.select(this)
          .attr("width", 100)
          .attr("height", 100)
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .attr("width", 40)
          .attr("height", 40)
      });

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data16)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data15)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data14)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data13)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data12)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data11)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data10)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data09)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data08)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data07)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
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
    let elem = svg.selectAll("g rect").data(data06)
    let elemEnter = elem.enter()
      .append("g")

    let color = d3.scale.linear()
      .domain([0, 3500])
      .range(["#EEEEEE", "#992932"])

    let textColor = d3.scale.ordinal()
      .domain([0, 3500])
      .range(["black", "#EEEEEE"])

    let rect = elemEnter.append("rect")
      .attr("width", 40)
      .attr("height", 40)
      .attr("y", (d, i) => (i * 50) + 100)
      // .attr("x", 200)
      .attr("fill", d => color(d.TOI))

    elemEnter.append("text")
      .attr("x", 6)
      // .attr("x", 200)  
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", d => textColor(d.TOI))
      .attr("font-weight", 200)
      .text(function (d) {
        return d.TOI;
      })
  });
};


document.addEventListener("DOMContentLoaded", () => {
  season06();
  season07();
  season08();
  season09();
  season10();
  season11();
  season12();
  season13();
  season14();
  season15();
  season16();
  season17();
  season18();
});