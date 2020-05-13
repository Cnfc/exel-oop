// import "./module";
import "./scss/index.scss";
// import "";
import { Exel } from "./Components/Exel/Exel";
import { Header } from "./Components/header/Header";
import { Toolbar } from "./Components/Toolbar/Toolbar";
import { Formula } from "./Components/Formula/Formula";
import { Table } from "./Components/Table/Table";

const exel = new Exel("#app", {
  components: [Header, Toolbar, Formula, Table],
});

exel.render();
