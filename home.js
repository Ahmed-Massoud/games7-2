




Rgames = document.getElementById("Rgames");
for (let i = 1; i <= recentNum; i++) {
  name = apps[i - 1].name;
  icon = apps[i - 1].icon;
  page = apps[i - 1].page;
  Rgames.innerHTML += `
  <a href="game.html?a=${name}">
  <div>
                 
                     <p>#0${i}</p>
                 <img src=\"${icon}\" alt="">
                  <h1>${name}</h1>
                 </div>
                 </a>
                 
  
  `;
}

Pgames = document.getElementById("Pgames");
for (let i = 1; i <= recentNum; i++) {
  name = apps[i - 1].name;
  icon = apps[i - 1].icon;
  page = apps[i - 1].page;
  Pgames.innerHTML += `
    <a href="${page}">
    <div>
                   
                       <p>#0${i}</p>
                   <img src=\"${icon}\" alt="">
                    <h1>${name}</h1>
                   </div>
                   </a>
                   
    
    `;
}

