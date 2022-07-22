type command = "SEND"|"LET"|"READ"|"UNIX"|"ADVJS";
type argument = `."${any}",`;
type token = `${command}${argument?}${argument?};`|"";
const parse = (input: String) => {
  _check_syntax(_split_terms(input));
}

const _check_syntax = (input: Array) => {
  input.forEach((e)=>{
    if(token(e)) return 0;
    return 1;
  });
}

const _split_terms = (input: String) => {
  return input.replace("\n",";").split(";");
}