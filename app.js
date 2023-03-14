const newOutput = document.querySelector('.output');
const mainList = newOutput.getElementsByTagName('ul');
 mainList.id = 'newId';
console.log(mainList.items);
const searchTag = newOutput.children;

for (var i = 0; i < searchTag.length; i ++){
  console.log(searchTag[i].tagName);
  searchTag[i].id =  `${i}`;
  console.log(searchTag[i].id);
  if (i % 2 === 0){
    searchTag[i].style.color = 'red';
  }
  else{
    searchTag[i].style.color = 'blue';
  }
  
 }
