(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=async i=>{try{const n=await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${i}`);if(!n.ok)throw new Error("Sorry can't fetch food!");const o=await n.json();return console.log(o),o}catch(n){console.error(n.message)}},u=async i=>{const n=i.target.title,{meals:o}=await m(n);document.querySelector("#app").style.display="none",document.getElementById("meal-list"),o.forEach(r=>{const e=document.createElement("li"),t=document.createElement("div");t.setAttribute("class","container");const s=document.createElement("div");s.setAttribute("class","card");const d=document.createElement("img");d.src=r.strMealThumb;const c=document.createElement("div");c.setAttribute("class","details");const a=document.createElement("div");a.setAttribute("class","name"),a.textContent=r.strMeal;const l=document.createElement("button");l.setAttribute("id","recipe"),l.textContent="Recipe",c.append(a,l),s.append(d,c),t.append(s),e.append(t),document.querySelector("#dish-list").append(e)})};document.querySelector("#app").innerHTML=`
  <div>
    <h1>Tasti Labs</h2>
    <h2>Are you craving...</h2>
    <ul id="categories">
      <li><button><img src="./index-images/chicken.png" alt="Chicken" title="Chicken"/></button></li>
      <li><button><img src="./index-images/seafood.png" alt="Seafood" title="Seafood"/></button></li>
      <li><button><img src="./index-images/pasta.png" alt="Pasta" title="Pasta"/></button></li>
      <li><button><img src="./index-images/vegan.png" alt="Vegan" title="Vegan"/></button></li>
      <li><button><img src="./index-images/dessert.png" alt="Dessert" title="Dessert"/></button></li>
    </ul> 
  </div>
`;const p=async i=>{u(i)},g=async i=>{renderDetails(i)},h=()=>{document.getElementById("categories").addEventListener("click",p),document.getElementById("dish-list").addEventListener("click",g),renderDetails(),u()};h();
