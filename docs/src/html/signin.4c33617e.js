const e="https://login-2c7ee-default-rtdb.europe-west1.firebasedatabase.app/",t=localStorage.getItem("loggedInUser"),o=t?JSON.parse(t):null,n=o?`${e}users/${o.id}.json`:null;console.log(o.id),console.log(o.username,"2");const s=document.querySelector("#post-button"),c=document.querySelector("#dele-button"),l=document.querySelector("#status"),a=(document.querySelector("#container"),document.querySelector("#content"),document.querySelector("#post"));async function r(){if(o&&o.id){const t=`${e}users.json`;try{const e=await fetch(t),n=await e.json();if(n){const e=n[o.id];if(e&&e.posts){const t=e.posts.map((e=>`<p><strong>You:</strong> ${e}</p>`)).join("");a.innerHTML=t}else console.log(`Error: no posts found for user ${o.id}.`)}else console.log("Error: data is null or undefined.")}catch(e){console.log(`Error fetching data from ${t}: ${e}`)}}}if(s.addEventListener("click",(async function(t){t.preventDefault();const n=l.value;if(console.log(n),o&&o.id){const t=`${e}users/${o.id}.json`,s=await fetch(t),c=await s.json();console.log(c,"posts"),null!==c&&void 0!==c.posts?c.posts.push(n):null!==c&&(c.posts=[n]);const l={method:"PATCH",body:JSON.stringify(c),headers:{"Content-type":"application/json; charset=UTF-8"}},a=await fetch(t,l),r=await a.json();console.log(r,"hello ew world!")}await r()})),c.addEventListener("click",(()=>{if(n){fetch(n,{method:"DELETE"}).then((e=>{console.log(e.status),localStorage.clear(),window.location.assign("./src/index.html")})).catch((e=>{console.log(`Error deleting user account: ${e}`),alert("Error deleting user account. Please try again later.")}))}})),r(),async function(){const t=`${e}users.json`,o=await fetch(t),n=await o.json();!function(e){const t=Object.keys(e),o=Object.values(e),n=document.getElementById("myModal"),s=document.getElementById("modal-content"),c=document.getElementsByClassName("close")[0];for(let e=0;e<o.length;e++){const c=o[e],l=document.createElement("h4"),a=document.createElement("h4"),r=document.createElement("img");document.body.appendChild(l),document.body.appendChild(a),l.innerText=c.username,r.src=c.image,l.addEventListener("click",(()=>{const o=c.posts&&c.posts.length>0?c.posts[c.posts.length-1]:"",l={...c,id:t[e],latestPost:o};console.log(l),localStorage.setItem("loggedInUser",JSON.stringify(l)),s.innerHTML="";const a=document.createElement("p");a.innerText=`${c.username} - Latest Post: ${o}`,s.appendChild(a),s.appendChild(r),n.style.display="block"}))}c.addEventListener("click",(()=>{n.style.display="none"}))}(n),console.log(n)}(),t){const e=JSON.parse(t),o=e.username,n=e.image,s=document.querySelector("#name");console.log(s);const c=document.querySelector("#images");s.textContent=o,c.src=n,console.log(o,"hello")}
//# sourceMappingURL=signin.4c33617e.js.map
