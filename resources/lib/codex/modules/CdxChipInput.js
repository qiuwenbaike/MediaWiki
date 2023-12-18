"use strict";var g=(e,u,c)=>new Promise((v,f)=>{var d=i=>{try{n(c.next(i))}catch(s){f(s)}},r=i=>{try{n(c.throw(i))}catch(s){f(s)}},n=i=>i.done?v(i.value):Promise.resolve(i.value).then(d,r);n((c=c.apply(e,u)).next())});const t=require("vue"),T=require("./CdxInputChip.js"),k=require("./constants.js"),N=require("./useSplitAttributes.js"),P=require("./useFieldData.js"),L=require("./Icon.js"),z=require("./_plugin-vue_export-helper.js");require("./CdxButton.js");require("./useIconOnlyButton.js");require("./useSlotContents.js");require("./useWarnOnce.js");const O=k.makeStringTypeValidator(k.ValidationStatusTypes),M=t.defineComponent({name:"CdxChipInput",components:{CdxInputChip:T},inheritAttrs:!1,props:{chipAriaDescription:{type:String,required:!0},inputChips:{type:Array,required:!0},separateInput:{type:Boolean,default:!1},status:{type:String,default:"default",validator:O},disabled:{type:Boolean,default:!1}},emits:["update:input-chips"],setup(e,{emit:u,attrs:c}){const v=t.ref(),f=L.useComputedDirection(v),d=t.ref(),r=t.ref(""),n=t.ref("default"),i=t.computed(()=>n.value==="error"||e.status==="error"?"error":"default"),{computedDisabled:s,computedStatus:w}=P.useFieldData(t.toRef(e,"disabled"),i),m=t.ref(!1),B=t.computed(()=>({"cdx-chip-input--has-separate-input":e.separateInput,["cdx-chip-input--status-".concat(w.value)]:!0,"cdx-chip-input--focused":m.value,"cdx-chip-input--disabled":s.value})),{rootClasses:b,rootStyle:D,otherAttrs:F}=N.useSplitAttributes(c,B),C=[];function A(o,l){o!==null&&(C[l]=o)}const h=()=>{d.value.focus()};function I(){e.inputChips.find(o=>o.value===r.value)?n.value="error":r.value.length>0&&(u("update:input-chips",e.inputChips.concat({value:r.value})),r.value="")}function y(o){u("update:input-chips",e.inputChips.filter(l=>l.value!==o.value))}function V(o,l){const p=f.value==="ltr"&&o==="left"||f.value==="rtl"&&o==="right"?-1:1,a=l+p;if(!(a<0)){if(a>=e.inputChips.length){h();return}C[a].focus()}}function S(o){return g(this,null,function*(){I(),yield t.nextTick(),y(o),r.value=o.value,h()})}function q(o,l,p){if(p==="button")h();else if(p==="Backspace"){const a=l===0?1:l-1;a<e.inputChips.length?C[a].focus():h()}else if(p==="Delete"){const a=l+1;a<e.inputChips.length?C[a].focus():h()}y(o)}function R(o){var p,a;const l=f.value==="rtl"?"ArrowRight":"ArrowLeft";switch(o.key){case"Enter":if(r.value.length>0){I(),o.preventDefault(),o.stopPropagation();return}break;case"Escape":(p=d.value)==null||p.blur(),o.preventDefault(),o.stopPropagation();return;case"Backspace":case l:if(((a=d.value)==null?void 0:a.selectionStart)===0&&d.value.selectionEnd===0&&e.inputChips.length>0){C[e.inputChips.length-1].focus(),o.preventDefault(),o.stopPropagation();return}break}}function E(){m.value=!0}function $(){m.value=!1}function K(o){v.value.contains(o.relatedTarget)||I()}return t.watch(t.toRef(e,"inputChips"),o=>{const l=o.find(p=>p.value===r.value);n.value=l?"error":"default"}),t.watch(r,()=>{n.value==="error"&&(n.value="default")}),{rootElement:v,input:d,inputValue:r,rootClasses:b,rootStyle:D,otherAttrs:F,assignChipTemplateRef:A,handleChipClick:S,handleChipRemove:q,moveChipFocus:V,onInputKeydown:R,focusInput:h,onInputFocus:E,onInputBlur:$,onFocusOut:K,computedDisabled:s}}});const U={class:"cdx-chip-input__chips",role:"listbox","aria-orientation":"horizontal"},H=["disabled"],j={key:0,class:"cdx-chip-input__separate-input"},G=["disabled"];function J(e,u,c,v,f,d){const r=t.resolveComponent("cdx-input-chip");return t.openBlock(),t.createElementBlock("div",{ref:"rootElement",class:t.normalizeClass(["cdx-chip-input",e.rootClasses]),style:t.normalizeStyle(e.rootStyle),onClick:u[8]||(u[8]=(...n)=>e.focusInput&&e.focusInput(...n)),onFocusout:u[9]||(u[9]=(...n)=>e.onFocusOut&&e.onFocusOut(...n))},[t.createElementVNode("div",U,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.inputChips,(n,i)=>(t.openBlock(),t.createBlock(r,{key:n.value,ref_for:!0,ref:s=>e.assignChipTemplateRef(s,i),class:"cdx-chip-input__item","chip-aria-description":e.chipAriaDescription,icon:n.icon,disabled:e.computedDisabled,onClickChip:s=>e.handleChipClick(n),onRemoveChip:s=>e.handleChipRemove(n,i,s),onArrowLeft:s=>e.moveChipFocus("left",i),onArrowRight:s=>e.moveChipFocus("right",i)},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(n.value),1)]),_:2},1032,["chip-aria-description","icon","disabled","onClickChip","onRemoveChip","onArrowLeft","onArrowRight"]))),128)),e.separateInput?t.createCommentVNode("v-if",!0):t.withDirectives((t.openBlock(),t.createElementBlock("input",t.mergeProps({key:0,ref:"input","onUpdate:modelValue":u[0]||(u[0]=n=>e.inputValue=n),class:"cdx-chip-input__input",disabled:e.computedDisabled},e.otherAttrs,{onBlur:u[1]||(u[1]=(...n)=>e.onInputBlur&&e.onInputBlur(...n)),onFocus:u[2]||(u[2]=(...n)=>e.onInputFocus&&e.onInputFocus(...n)),onKeydown:u[3]||(u[3]=(...n)=>e.onInputKeydown&&e.onInputKeydown(...n))}),null,16,H)),[[t.vModelDynamic,e.inputValue]])]),e.separateInput?(t.openBlock(),t.createElementBlock("div",j,[t.withDirectives(t.createElementVNode("input",t.mergeProps({ref:"input","onUpdate:modelValue":u[4]||(u[4]=n=>e.inputValue=n),class:"cdx-chip-input__input",disabled:e.computedDisabled},e.otherAttrs,{onBlur:u[5]||(u[5]=(...n)=>e.onInputBlur&&e.onInputBlur(...n)),onFocus:u[6]||(u[6]=(...n)=>e.onInputFocus&&e.onInputFocus(...n)),onKeydown:u[7]||(u[7]=(...n)=>e.onInputKeydown&&e.onInputKeydown(...n))}),null,16,G),[[t.vModelDynamic,e.inputValue]])])):t.createCommentVNode("v-if",!0)],38)}const Q=z._export_sfc(M,[["render",J]]);module.exports=Q;