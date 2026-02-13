import lume from "lume/mod.ts";

const site = lume();

site.copy("style.css");
site.copy("assets");

export default site;
