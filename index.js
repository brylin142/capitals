const createElements = (svg, elem) => {
  let elemEnter = elem.enter()
    .append("g")
    .on("mouseover", function (d, i) {
      let overlay = svg.select("g.overlays")
        .append("foreignObject")
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", 0)
        .attr("y", (i * 50) + 100)
        .attr("class", "popout")

      overlay.transition()
        .attr("x", -160)
        .attr("width", 200)
        .attr("height", 200);

      let div = overlay.append("xhtml:div")
        .attr("class", "stats")
        .style({
          background: color(d.TOI),
          color: textColor(d.TOI),
        })
        .append("div")
        .html(
          `<h5 class="name">${d.Player} - ${d.Pos}</h5>
          <p class="age">Age: ${d.Age}</p>
          <p>GP: ${d.GP}</p>
          <p>G: ${d.G}</p>
          <p>A: ${d.A}</p>
          <p>Pts: ${d.PTS}</p>`
        )

      // svg.select("g.overlays")
      //   .append("text")
      //   .attr("x", 36)
      //   .attr("y", (i * 50) + 128)
      //   .attr("fill", textColor(d.TOI))
      //   .text(function () {
      //     return "Age: " + d.Age + " Pos: " + d.Pos + " GP: " + d.GP + " G: " + d.G + " A: " + d.A + " Pts: " + d.PTS;
      //   });


    })
    .on("mouseout", function (d) {
      svg.select("g.overlays rect")
        .remove();

      svg.select("g.overlays foreignObject")
        .remove();
    });

  let color = d3.scale.linear()
    .domain([0, 3500])
    .range(["#EEEEEE", "#992932"]);


  let textColor = d3.scale.quantize()
    .domain([0, 3500])
    .range(["black", "#EEEEEE"]);

  let rect = elemEnter.append("rect")
    .attr("width", 40)
    .attr("height", 40)
    .attr("fill", d => color(d.TOI))
    // .attr("x", 150)
    .attr("y", -100)
    .transition()
    .duration(1500)
    .attr("y", (d, i) => (i * 50) + 100);

  elemEnter.append("text")
    .attr("x", 6)
    .attr("y", -100)
    .attr("fill", d => textColor(d.TOI))
    .attr("font-weight", 200)
    .text(function (d) {
      return d.TOI;
    })
    .transition()
    .duration(1500)
    .attr("y", (d, i) => (i * 50) + 125);
};

const createOverlays = svg => {
  svg.append("g")
    .classed("boxes", true);

  svg.append("g")
    .attr("class", "overlays");
};

const season18 = () => {
  let svg = d3.select(".chart18")
    .append("svg")
    .attr("width", 200)
    .attr("height", 1400);

  createOverlays(svg);

  d3.csv("17-18.csv", function (data18) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data18);
    createElements(svg, elem);

    elem.enter()
      .append("text")
      .attr("x", 210)
      .attr("y", (d, i) => (i * 50) + 125)
      .attr("fill", "black")
      .attr("font-weight", 400)
      .text(function (d) {
        return d.Player;
      });

  });
};

const season17 = () => {
  let svg = d3.select(".chart17")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("16-17.csv", function (data17) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data17);
    createElements(svg, elem);
  });
};

const season16 = () => {
  let svg = d3.select(".chart16")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("15-16.csv", function (data16) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data16);
    createElements(svg, elem);
  });
};

const season15 = () => {
  let svg = d3.select(".chart15")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("14-15.csv", function (data15) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data15);
    createElements(svg, elem);
  });
};

const season14 = () => {
  let svg = d3.select(".chart14")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("13-14.csv", function (data14) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data14);
    createElements(svg, elem);
  });
};

const season13 = () => {
  let svg = d3.select(".chart13")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("12-13.csv", function (data13) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data13);
    createElements(svg, elem);
  });
};

const season12 = () => {
  let svg = d3.select(".chart12")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("11-12.csv", function (data12) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data12);
    createElements(svg, elem);
  });
};

const season11 = () => {
  let svg = d3.select(".chart11")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("10-11.csv", function (data11) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data11);
    createElements(svg, elem);
  });
};

const season10 = () => {
  let svg = d3.select(".chart10")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("09-10.csv", function (data10) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data10);
    createElements(svg, elem);
  });
};

const season09 = () => {
  let svg = d3.select(".chart09")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("08-09.csv", function (data09) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data09);
    createElements(svg, elem);
  });
};

const season08 = () => {
  let svg = d3.select(".chart08")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("07-08.csv", function (data08) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data08);
    createElements(svg, elem);
  });
};

const season07 = () => {
  let svg = d3.select(".chart07")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000);

  createOverlays(svg);

  d3.csv("06-07.csv", function (data07) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data07);
    createElements(svg, elem);
  });
};

const season06 = () => {
  let svg = d3.select(".chart06")
    .append("svg")
    .attr("width", 50)
    .attr("height", 1000)
    .attr("x", 200);

  createOverlays(svg);

  d3.csv("05-06.csv", function (data06) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data06);
    createElements(svg, elem);
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