/** SCOPES AND CLOSURES: Scope's bubble */

/**
 * Doll Parts:
 * 
 * We have a bin of doll parts in a factory. Each part goes to a doll with
 *  a specific, unique name. Each part will be described by a string, 
 *  with the name of the doll and the part name separated by an underscore, 
 *  like "Mary_arm".
 *  
 * All dolls are made of the same types of parts, and we have a list of all 
 *  of the parts that form a complete doll. Given a list of available parts, 
 *  return a list of doll names for which will we be able to create at least 
 *  one complete doll.
 */



// Global Lexical Scope (RED)
var complete_part_list_1 = "eyes,nose,mouth,ears";
var complete_part_list_2 = "eyes,nose,mouth,ears,feet";

// Global lexical Scope (RED)
var parts = [
  "Bette_feet",
  "Bette_eyes",
  "Colleen_nose",
  "Astrid_eyes",
  "Doug_eyes",
  "Bette_nose",
  "Astrid_nose",
  "Doug_mouth",
  "Bette_ears",
  "Bette_mouth",
  "Colleen_nose",
  "Colleen_arms",
  "Astrid_feet",
  "Colleen_nose",
  "Colleen_mouth",
  "Doug_nose",
  "Doug_ears",
  "Astrid_hands",
  "Doug_eyes"
];

//Global Lexical Scope (RED)
function getValidDoll(dollSchema, parts) {
  let validDolls = [];
  dollSchema = dollSchema.split(',');
  parts = parseParts(parts);

  for (let doll in parts) {
    let isValid = true;

    dollSchema.forEach(dollPart => {
      if (!parts[doll].includes(dollPart)) isValid = false;
    });

    if (isValid) validDolls.push(doll)
  };

  return validDolls;
};

function parseParts(parts) {
  let partsObject = {};
  for (let part of parts) {
    [name, part] = part.split("_");
    partsObject[name] = partsObject[name] || [];
    partsObject[name].push(part);
  }
  return partsObject;
};

console.log(getValidDoll(complete_part_list_1, parts));
console.log(getValidDoll(complete_part_list_2, parts));
