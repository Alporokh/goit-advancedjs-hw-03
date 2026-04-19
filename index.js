import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{i as t,n,r,t as i}from"./assets/vendor-DeDiZDIf.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a=e(t(),1),o=`55511157-7a64d58fac1bd8bae601b6272`,s=`https://pixabay.com/api/`;async function c(e){return(await r.get(s,{params:{key:o,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}})).data}var l=e(n(),1),u=l.default.default||l.default;i.register();var d=document.querySelector(`.gallery`),f=document.querySelector(`.loader-wrapper`),p=new u(`.gallery a`,{captionsData:`alt`,captionDelay:250});function m(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${e}"
            alt="${n}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <b>Likes</b>
            ${r}
          </li>
          <li class="info-item">
            <b>Views</b>
            ${i}
          </li>
          <li class="info-item">
            <b>Comments</b>
            ${a}
          </li>
          <li class="info-item">
            <b>Downloads</b>
            ${o}
          </li>
        </ul>
      </li>`).join(``);d.insertAdjacentHTML(`beforeend`,t),p.refresh()}function h(){d.innerHTML=``}function g(){f.classList.remove(`is-hidden`)}function _(){f.classList.add(`is-hidden`)}document.querySelector(`.form`).addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.elements[`search-text`].value.trim();t&&(h(),g(),c(t).then(e=>{if(e.hits.length===0){a.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}m(e.hits)}).catch(()=>{a.default.error({message:`Something went wrong. Please try again later.`,position:`topRight`})}).finally(()=>{_()}))});
//# sourceMappingURL=index.js.map