const createElements = (svg, elem, stat) => {
  let elemEnter = elem.enter()
    .append("g")
    .on("mouseover", function (d, i) {
      let overlay = svg.select("g.overlays")
        .append("foreignObject")
        .attr("width", 40)
        .attr("height", 40)
        // .attr("x", 112)
        .attr("y", (i * 50) + 180)
        .attr("class", "popout");

      // let border = div.append("rect")
      //   .attr("width", 200)
      //   .attr("height", 200)
      //   .attr("stroke", "black")
      //   .attr("stroke-width", 2)
      //   .attr("x", 0)
      //   .attr("y", (i * 50) + 100);

      overlay.transition()
        .attr("x", -160)
        .attr("width", 200)
        .attr("height", 200);

      let div = overlay.append("xhtml:div")
        .attr("class", "stats")
        .style({
          background: color(d[stat]),
          color: textColor(d[stat]),
          opacity: .9
        })
        .append("div")
        .html(
          `<h5 class="name">${d.Player}</h5>
          <p>Age: ${d.Age}</p>
          <p>Position: ${d.Pos}</p>
          <p>Games Played: ${d.GP}</p>
          <p>Minutes Played: ${d.TOI}</p>
          <p>Minutes Played / Game: ${d.ATOI}</p>
          <p>Goals: ${d.G}</p>
          <p>Assists: ${d.A}</p>
          <p>Points: ${d.PTS}</p>
          <h5 class="separator"></h5>`
          );

    })
    .on("mouseout", function (d) {
      svg.select("g.overlays rect")
        .remove();

      svg.select("g.overlays foreignObject")
        .remove();
    });

  let color = d3.scale.linear()
    .range(["#EEEEEE", "#992932"]);


  let textColor = d3.scale.quantize()
    // .domain([0, 3500])
    .range(["black", "#EEEEEE"]);

  if (stat === 'TOI') {
    color.domain([0, 2500]);
    textColor.domain([0, 2500]);
  } else if (stat === 'G') {
    color.domain([0, 35]);
    textColor.domain([0, 35]);
  } else if (stat === 'A') {
    color.domain([0, 40]);
    textColor.domain([0, 40]);
  } else if (stat === 'PTS') {
    color.domain([0, 80]);
    textColor.domain([0, 80]);
  }

  let rect = elemEnter.append("rect")
    .attr("width", 40)
    .attr("height", 40)
    .attr("fill", d => color(d[stat]))
    // .attr("x", 112)
    .attr("y", -100)
    .transition()
    .duration(1500)
    .attr("y", (d, i) => (i * 50) + 180);

  elemEnter.append("text")
    .attr("x", 6)
    .attr("y", -100)
    .attr("fill", d => textColor(d[stat]))
    .attr("font-weight", 200)
    .text(function (d) {
      return d[stat];
    })
    .transition()
    .duration(1900)
    .attr("y", (d, i) => (i * 50) + 205);
};

const showStat = () => {

  let element = d3.select("#stat").node();
  let stat = element.options[element.selectedIndex].value;

  for (let i = 6; i <= 17; i++) {
    drawSeason(i, stat);
  }

  season18(stat);

};

const createOverlays = svg => {
  svg.append("g")
    .classed("boxes", true);

  svg.append("g")
    .attr("class", "overlays");
};

const season18 = (stat) => {
  let svg = d3.select(".chart18")
    .append("svg")
    .attr("width", 200)
    .attr("height", 1600);

  createOverlays(svg);

  d3.csv("./assets/csv/17-18.csv", function (data18) {
    let elem = svg.select("g.boxes").selectAll("g rect").data(data18);
    createElements(svg, elem, stat);

    elem.enter()
      .append("text")
      .attr("x", 60)
      .attr("y", (d, i) => (i * 50) + 205)
      .attr("fill", "black")
      .attr("font-weight", 600)
      .text(function (d) {
        return `${d.Player} - ${d.Pos}`;
      });

  });
};

const drawSeason = (year, stat) => {
  let svg;

  if (year < 10) {
    svg = d3.select(`.chart0${year}`)
      .append("svg")
      .attr("width", 50)
      .attr("height", 1000);

    createOverlays(svg);

    d3.csv(`./assets/csv/0${year - 1}-0${year}.csv`, function (data) {
      let elem = svg.select("g.boxes").selectAll("g rect").data(data);
      createElements(svg, elem, stat);
    });
  } else if (year === 10) {
    svg = d3.select(`.chart10`)
      .append("svg")
      .attr("width", 50)
      .attr("height", 1000);

    createOverlays(svg);

    d3.csv(`./assets/csv/09-10.csv`, function (data) {
      let elem = svg.select("g.boxes").selectAll("g rect").data(data);
      createElements(svg, elem, stat);
    });
  } else {
    svg = d3.select(`.chart${year}`)
      .append("svg")
      .attr("width", 50)
      .attr("height", 1000);

    createOverlays(svg);

    d3.csv(`./assets/csv/${year - 1}-${year}.csv`, function (data) {
      let elem = svg.select("g.boxes").selectAll("g rect").data(data);
      createElements(svg, elem, stat);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("stat").addEventListener('change', (e) => {
    d3.selectAll('svg').remove();
    showStat();
  });

  let stat = showStat();

});