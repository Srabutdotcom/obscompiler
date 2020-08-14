import {require as requireDefault, requireFrom} from "../d3-require/index.js";

export default function(resolve) {
  return resolve == null ? requireDefault : requireFrom(resolve);
}
