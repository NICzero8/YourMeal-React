import{a as o,r as p,u,j as s,B as m,Q as h,d as x}from"./index-BgLun9PX.js";function g(){const e=o(t=>t.modal.selectedProduct),[r,i]=p.useState(e.quantity),a=u();function c(t){return t.map((n,l)=>s.jsx("li",{children:n},l))}function d(){let t=r;for(;t>0;)a(x(e)),t--;i(e.quantity)}return s.jsxs("div",{"data-id":"${selectedProduct.id}",className:"product-info_wrapper",children:[s.jsx("h2",{className:"product_title",children:e.name}),s.jsxs("div",{className:"product-details_wrapper",children:[s.jsx("div",{className:"product-details_left-wrapper",children:s.jsx("img",{className:"product_image",src:`./img/products/${e.category}/${e.image}@2x.png`,alt:e.name})}),s.jsxs("div",{className:"product-details_right-wrapper",children:[s.jsx("p",{className:"product_description",children:e.description}),s.jsxs("div",{className:"ingridients_wrapper",children:[s.jsx("h4",{children:"Состав:"}),s.jsx("ul",{className:"igridient_list",children:c(e.ingridients)}),s.jsxs("p",{className:"nutritional-value",children:[s.jsx("span",{className:"product-weight",children:e.weight}),s.jsx("span",{className:"product-energy",children:e.energy})]})]})]})]}),s.jsxs("div",{className:"product-info_buttons-wrapper",children:[s.jsx(m,{isProductInfo:!0,onClick:d,children:"Добавить"}),s.jsxs("div",{className:"product-quantity_wrapper",children:[s.jsx(h,{product:e,isProductInfo:!0,counter:r,setCounter:i}),s.jsx("p",{className:"product_price",children:e.price})]})]})]})}export{g as default};