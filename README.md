# README

[Washington Capitals 2017-2018 Roster live](https://brylin142.github.io/capitals/)

Washington Capitals 2017-2018 is a data visualization of the Washington Capitals roster showing when each player first played for the team and how many minutes they have played each season. Hovering on each block displays player stats for the given season.

### Architecture and Technologies
This project is implemented with the following technologies:

* JavaScript for overall structure and logic
* `D3.js` library

### Code Snippet
I was particularly happy to have the mouseover function working correctly. This was challenging because I wanted to embed a `div` element into my `svg` element due to the complexity of trying to style on a `foreignObject`.

Mouseover:
```
  .on("mouseover", function (d, i) {
    let overlay = svg.select("g.overlays")
      .append("foreignObject")
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 0)
      .attr("y", (i * 50) + 150)
      .attr("class", "popout");      
      
    overlay.transition()
      .attr("x", -160)
      .attr("width", 200)
      .attr("height", 200);
      
    let div = overlay.append("xhtml:div")
      .attr("class", "stats")
      .style({
        background: color(d.TOI),
        color: textColor(d.TOI),
        opacity: .9
      })
```
