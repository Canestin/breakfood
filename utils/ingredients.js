import ble from "../assets/ingredients/ble.png";
import celeri from "../assets/ingredients/celeri.png";
import chou from "../assets/ingredients/chou.png";
import citron from "../assets/ingredients/citron.png";
import mayonnaise from "../assets/ingredients/mayonnaise.png";
import moutarde from "../assets/ingredients/moutarde.png";
import oeuf from "../assets/ingredients/oeuf.png";
import oignonsvert from "../assets/ingredients/oignons-vert.png";
import poivre from "../assets/ingredients/poivre.png";

const ingredientsMap = new Map();

ingredientsMap.set("ble", { icon: ble, name: "blé" });
ingredientsMap.set("oeuf", { icon: oeuf, name: "oeuf dur pelé" });
ingredientsMap.set("oignonsvert", { icon: oignonsvert, name: "oignons vert" });
ingredientsMap.set("chou", { icon: chou, name: "chou" });
ingredientsMap.set("celeri", { icon: celeri, name: "céleri" });
ingredientsMap.set("citron", { icon: citron, name: "citron" });
ingredientsMap.set("mayonnaise", { icon: mayonnaise, name: "mayonnaise" });
ingredientsMap.set("moutarde", { icon: moutarde, name: "moutarde" });
ingredientsMap.set("poivre", { icon: poivre, name: "poivre" });

export { ingredientsMap };
