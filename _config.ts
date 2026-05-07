import lume from "lume/mod.ts";

const site = lume();

site.ignore("README.md");
site.copy("assets");

export default site;
