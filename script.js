const target = new Date("2026-12-22T09:00:00+05:30").getTime();
function tick(){
  const d = Math.max(0, target - Date.now());
  const days = Math.floor(d/86400000);
  const hours = Math.floor((d%86400000)/3600000);
  const mins = Math.floor((d%3600000)/60000);
  const secs = Math.floor((d%60000)/1000);
  document.querySelector("#days").textContent=String(days).padStart(2,"0");
  document.querySelector("#hours").textContent=String(hours).padStart(2,"0");
  document.querySelector("#mins").textContent=String(mins).padStart(2,"0");
  document.querySelector("#secs").textContent=String(secs).padStart(2,"0");
}
tick(); setInterval(tick,1000);

document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector(".nav nav");
  nav.style.display = nav.style.display==="flex" ? "" : "flex";
  nav.style.position="absolute"; nav.style.top="78px"; nav.style.left="0"; nav.style.right="0";
  nav.style.padding="20px 6vw"; nav.style.background="#0a0b0d"; nav.style.flexDirection="column";
});
