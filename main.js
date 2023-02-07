color0 = "#eee"; //font color
color1 = "#0055cc"; //main color
color2 = "#0044cc"; //apps number
color4 = "#002233"; //background color
color5 = "#001122"; //footer color
color10 = "#000";


body=document.getElementsByTagName("body")[0];
body.style = `
    --color0:${color0};
    --color1:${color1};
    --color2:${color2};
    --color4:${color4};
    --color5:${color5};
    --color10:${color10};
    `;

var style = document.createElement("style");
style.type = "text/css";
var Nstyle = `
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;700&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;

}
html,
body {
  color: var(--color0);
  background: var(--color4);
  Height:100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.links {
  width:450px;
}
.links div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links a {
  text-decoration: none;
  color: rgb(212, 212, 212);

  font-size: 20px;
}
.links a:hover {
  text-shadow: 0px 0px 6px rgb(255, 255, 255);
  color: white;
}
#check {
  display: none;
}
#check:checked ~ .links {
  right: 0px;
}
#check:checked ~ label svg:nth-child(1) {
  display: none;
}
#check:checked ~ label svg:nth-child(2) {
  display: inline-block;
}

header {
  background-color: var(--color1);
  //border:1px solid #f00;
  z-index: 200;
  opacity: 1;
  width: 100%;
  height: 50px;
  filter: drop-shadow(2px 3px 2px var(--color10));
  color: var(--color0);
  position: sticky;
  top: 0px;
  left: 0px;
}
section {
  margin-bottom: 30px;
}
header .container {
  padding-top: 3%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container {
  width: 90%;
  height: 100%;
  margin: 0px auto;
}

header .container h2 {
  letter-spacing: 2px;
  font-size: 30px;
}
header .back {
  width: 100%;
  z-index: -1;
  position: fixed;

  top: 48px;
  left: 0px;
}
header .container h1 {
  font-family: LoveMarker;
  font-size: 50px;
  margin-left: 10%;
  margin-top: -5px;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color0);
  -webkit-text-fill-color: var(--color1);
}
header .container div:nth-child(1) {
  display: flex;
}

header .container .menu {
  overflow: hidden;
}
header .container .menu svg {
  width: 40px;
  height: 40px;
}
header .menu svg:nth-child(2) {
  display: none;
}
.footer {
  background-color: var(--color5);
  color: var(--color0);
  padding: 30px 0;
  border-top: 1px solid var(--color0);
  text-align: center;
  margin-bottom: 0px;
}
.loaderDiv {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #000;
  display: inline-block;
  z-index: 300;
}
.loaderDiv p {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translatex(-50%);
  font-size: 30px;
  text-shadow: 0px 0px 10px #000;
}

.titel {
  filter: drop-shadow(2px 3px 2px var(--color1));
}
.titel span {
  color: var(--color1);
}
@media (max-width: 800px) {
  .links {
    position: fixed;
    top: 0px;
    right: -100%;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 2;
  }

  .links div {
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: black;
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .links div a {
    text-decoration: none;
    color: rgb(212, 212, 212);
    margin-top: 10px;
    font-size: 25px;
  }
  .links div a:hover {
    text-shadow: 0px 0px 6px rgb(255, 255, 255);
    border: 2px solid black;
    color: white;
  }
  header label {
    display: inline-block;
  }
}

                    `;
style.innerHTML+= Nstyle;

  document.getElementsByTagName("head")[0].appendChild(style);



body.innerHTML=`<div class="loaderDiv">
  <p>
    Loading...
  </p>
</div> ${body.innerHTML}`;
const loaderDiv = document.querySelector(".loaderDiv");
const TP = 2 * Math.PI;
const CSIZE = 400;
const ctx = (() => {
  let d = document.createElement("div");
  d.style.textAlign = "center";
  loaderDiv.append(d);
  let c = document.createElement("canvas");
  c.width = c.height = 2 * CSIZE;
  d.append(c);
  return c.getContext("2d");
})();
ctx.setTransform(1, 0, 0, 1, CSIZE, CSIZE);
ctx.lineCap = "round";
ctx.lineJoin = "round";

onresize = () => {
  let D = Math.min(window.innerWidth, window.innerHeight) - 40;
  ctx.canvas.style.width = D + "px";
  ctx.canvas.style.height = D + "px";
};

const getRandomInt = (min, max, low) => {
  if (low) return Math.floor(Math.random() * Math.random() * (max - min)) + min;
  else return Math.floor(Math.random() * (max - min)) + min;
};

var colors = [];
var setColors = () => {
  colors = [];
  let colorCount = 4;
  let hue = getRandomInt(180, 270);
  for (let i = 0; i < colorCount; i++) {
    let hd = Math.round(180 / colorCount) * i + getRandomInt(-10, 10);
    let h = (hue + hd) % 360;
    colors.splice(
      getRandomInt(0, colors.length + 1),
      0,
      "hsl(" + h + ",98%,50%)"
    );
  }
};

var COUNT = 18; //getRandomInt(20,42);
var R = CSIZE / COUNT;
ctx.lineWidth = Math.round(2 * R - 4);

function RPath(initPoint, idx) {
  initPoint.d = true; // TODO, check if already true
  this.dir = idx % 2;
  this.pa = [initPoint];
  if (this.dir) this.ka = [4, 3, 5];
  else this.ka = [1, 2, 0];
  this.gr = 0;
  this.sh = 0;
  this.l = 0;
  this.kidx = idx;
  this.grow = () => {
    let pt = this.pa[this.pa.length - 1];
    for (let ipt of this.ka) {
      let cpt = pt.cpa[ipt];
      if (!cpt) continue;
      if (cpt.d) continue;
      cpt.d = true;
      this.pa.push(cpt);
      this.gr++;
      return true;
    }
    return false;
  };
  this.shrink = () => {
    if (this.pa.length > 4) this.sh = 1;
    else this.sh = 0;
    if (this.pa.length < 4) return;
    this.pa[0].d = false;
    this.pa.shift();
    this.sh = 1;
    return;
  };
  this.getPath = () => {
    let p = new Path2D();
    if (!this.sh && !this.gr) {
      p.moveTo(this.pa[1].x, this.pa[1].y);
      for (let i = 2; i < this.pa.length; i++) {
        p.lineTo(this.pa[i].x, this.pa[i].y);
      }
      return p;
    }
    if (this.sh) {
      p.moveTo(
        (1 - frac) * this.pa[0].x + frac * this.pa[1].x,
        (1 - frac) * this.pa[0].y + frac * this.pa[1].y
      );
    } else p.moveTo(this.pa[0].x, this.pa[0].y);
    for (let i = 1; i < this.pa.length - 2; i++) {
      p.lineTo(this.pa[i].x, this.pa[i].y);
    }
    let pt2 = this.pa[this.pa.length - 2];
    let pt3 = this.pa[this.pa.length - 1];
    if (this.gr == 1) {
      p.lineTo(pt2.x, pt2.y);
      p.lineTo(
        (1 - frac) * pt2.x + frac * pt3.x,
        (1 - frac) * pt2.y + frac * pt3.y
      );
    } else if (this.gr == 2) {
      if (frac < 0.5) {
        let pt1 = this.pa[this.pa.length - 3];
        let f = 2 * frac;
        p.lineTo((1 - f) * pt1.x + f * pt2.x, (1 - f) * pt1.y + f * pt2.y);
      } else {
        let f = 2 * (frac - 0.5);
        p.lineTo(pt2.x, pt2.y);
        p.lineTo((1 - f) * pt2.x + f * pt3.x, (1 - f) * pt2.y + f * pt3.y);
      }
    } else {
      p.lineTo(pt2.x, pt2.y);
      p.lineTo(pt3.x, pt3.y);
    }
    return p;
  };
}

var removePath = (idx) => {
  for (let i = 0; i < rpa[idx].pa.length; i++) rpa[idx].pa[i].d = false;
  rpa.splice(idx, 1);
};

function start() {
  if (stopped) {
    requestAnimationFrame(animate);
    stopped = false;
  } else {
    stopped = true;
  }
}

var stopped = true;
var t = 1;
var frac = 0;
var dur = 14;
function animate(ts) {
  if (stopped) return;
  t++;
  if (t == dur) {
    for (let i = 0; i < rpa.length; i++) {
      rpa[i].gr = 0;
      if (!rpa[i].grow()) rpa[i].l++;
      else rpa[i].l = 0;
      if (rpa[i].pa.length < len) rpa[i].grow();
      rpa[i].shrink();
      if (rpa[i].l > 100) {
        removePath(i);
        for (let i = 0; i < rpa.length; i++) rpa[i].l = 0;
        len++;
      }
    }
    t = 0;
  }
  frac = t / dur;
  draw();
  requestAnimationFrame(animate);
}

onresize();

var draw = () => {
  ctx.clearRect(-CSIZE, -CSIZE, 2 * CSIZE, 2 * CSIZE); // TODO, remove, black on shrink
  let pa = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
  for (let i = 0; i < rpa.length; i++) {
    pa[rpa[i].kidx % 4].addPath(rpa[i].getPath());
  }
  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = colors[i % colors.length];
    ctx.stroke(pa[i]);
  }
};

setColors();

var pts2 = [];
var setPoints2 = () => {
  let wc = (CSIZE - R) / R;
  for (let w = 0; w < wc; w++) {
    pts2[w] = [];
    let ra = TP * Math.random();
    let cc = Math.round((w + 1) * TP);
    for (let c = 0; c < cc; c++) {
      let a = ra + (TP / cc) * c;
      if (a > TP) a -= TP;
      pts2[w][c] = {
        x: (w + 1) * R * Math.cos(a),
        y: (w + 1) * R * Math.sin(a),
        a: a,
        w: w,
        cpa: []
      };
      if (w == 0) pts2[w][c].d = true;
    }
    pts2[w].sort((a, b) => {
      return a.a - b.a;
    });
  }
};

setPoints2();

for (let w = 0; w < pts2.length; w++) {
  for (let c = 0; c < pts2[w].length; c++) {
    // +in, +even, +out, -out, -even, -in
    pts2[w][c].cpa[1] = pts2[w][(c + 1) % pts2[w].length];
    pts2[w][c].cpa[4] = pts2[w][(c + pts2[w].length - 1) % pts2[w].length];
    if (w == 0) {
      pts2[w][c].cpa[0] = false;
      pts2[w][c].cpa[5] = false;
      for (let i = 0; i < pts2[1].length; i++) {
        if (pts2[1][i].a > pts2[0][c].a) {
          pts2[0][c].cpa[2] = pts2[1][i];
          pts2[0][c].cpa[3] =
            pts2[1][(i + pts2[1].length - 1) % pts2[1].length];
          break;
        }
      }
    } else if (w == pts2.length - 1) {
      pts2[w][c].cpa[2] = false;
      pts2[w][c].cpa[3] = false;
      let pta = pts2[pts2.length - 2];
      for (let i = 0; i < pta.length; i++) {
        if (pta[i].a > pts2[w][c].a) {
          pts2[w][c].cpa[0] = pta[i];
          pts2[w][c].cpa[5] = pta[(i + pta.length - 1) % pta.length];
          break;
        }
      }
    } else {
      for (let i = 0; i < pts2[w - 1].length; i++) {
        if (pts2[w - 1][i].a > pts2[w][c].a) {
          pts2[w][c].cpa[0] = pts2[w - 1][i];
          pts2[w][c].cpa[5] =
            pts2[w - 1][(i + pts2[w - 1].length - 1) % pts2[w - 1].length];
          break;
        }
      }
      for (let i = 0; i < pts2[w + 1].length; i++) {
        if (pts2[w + 1][i].a > pts2[w][c].a) {
          pts2[w][c].cpa[2] = pts2[w + 1][i];
          pts2[w][c].cpa[3] =
            pts2[w + 1][(i + pts2[w + 1].length - 1) % pts2[w + 1].length];
          break;
        }
      }
    }
  }
}

var rpa = new Array();

for (let i = 0; i < 36; i++) {
  let rw = getRandomInt(0, pts2.length);
  let rc = getRandomInt(0, pts2[rw].length);
  let rpt = pts2[rw][rc];
  while (rpt.d) {
    rw = getRandomInt(0, pts2.length);
    rc = getRandomInt(0, pts2[rw].length);
    rpt = pts2[rw][rc];
  }
  rpa.push(new RPath(rpt, i));
}

var len = pts2[pts2.length - 1].length;
for (let i = 0; i < len; i++) {
  for (let j = 0; j < rpa.length; j++) {
    rpa[j].grow();
  }
}

for (let i = 0; i < rpa.length; i++) {
  if (rpa[i].pa.length > 2) {
    rpa[i].gr = 1;
    rpa[i].sh = 1;
  }
  if (rpa[i].pa.length < 2) removePath(i);
}

ctx.lineWidth = 0.7 * R;

start();
body.style = `
    --color0:${color0};
    --color1:${color1};
    --color2:${color2};
    --color4:${color4};
    --color5:${color5};
    --color10:${color10};
    `;