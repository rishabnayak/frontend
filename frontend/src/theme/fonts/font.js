import hackru_regular from "./TitilliumWeb-Regular.ttf";
import hackru_light from "./TitilliumWeb-Light.ttf";
import hackru_bold from "./TitilliumWeb-Bold.ttf";
const HackRURegular = {
    fontfamily: "HackRU Regular",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 100,
    src: `url(${hackru_regular})`
}
const HackRULight = {
    fontfamily: "HackRU Light",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 100,
    src: `url(${hackru_light})`
}
const HackRUBold = {
    fontfamily: "HackRU Bold",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 100,
    src: `url(${hackru_bold})`
}
const family = "HackRU Regular, Titillium Web";
const faces = [HackRURegular, HackRULight, HackRUBold];
export { family, faces }