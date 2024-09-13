const calculateBricksCount = (width, height) => {
  let largeBricks = 0, mediumBricks = 0, smallBricks = 0;
  let rows = height / 5;
  let bricksPerRow = width / 60;
  for(let i=1;i<=rows;i++){
    if(i%3===1){
      largeBricks+=bricksPerRow
    }
    else if(i%3===0||i%3===2){
      mediumBricks+=1;
      smallBricks+=1
      
      let remLargeBricks=(width-60)/60;
      largeBricks+=remLargeBricks
    }
  }

  let result = `${largeBricks}L`;
  if (mediumBricks > 0 || smallBricks > 0) {
    result += `${mediumBricks}M${smallBricks}S`;
  }
  
  return result;
};
