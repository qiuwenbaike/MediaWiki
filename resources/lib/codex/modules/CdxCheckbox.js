"use strict";const t=require("vue"),h=require("./CdxLabel.js"),f=require("./useLabelChecker.js"),k=require("./useModelWrapper.js"),c=require("./useGeneratedId.js"),C=require("./useFieldData.js"),u=require("./constants.js"),y=require("./_plugin-vue_export-helper.js");require("./Icon.js");require("./useSplitAttributes.js");require("./useSlotContents.js");require("./useWarnOnce.js");const v=u.makeStringTypeValidator(u.ValidationStatusTypes),x=t.defineComponent({name:"CdxCheckbox",components:{CdxLabel:h},props:{modelValue:{type:[Boolean,Array],default:!1},inputValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},status:{type:String,default:"default",validator:v}},emits:["update:modelValue"],setup(e,{emit:o,slots:n,attrs:i}){var r;f.useLabelChecker((r=n.default)==null?void 0:r.call(n),i,"CdxCheckbox");const{computedDisabled:a,computedStatus:l}=C.useFieldData(t.toRef(e,"disabled"),t.toRef(e,"status")),d=t.computed(()=>({"cdx-checkbox--inline":e.inline,["cdx-checkbox--status-".concat(l.value)]:!0})),s=t.ref(),p=c.useGeneratedId("checkbox"),b=c.useGeneratedId("description"),m=k.useModelWrapper(t.toRef(e,"modelValue"),o);return{rootClasses:d,computedDisabled:a,input:s,checkboxId:p,descriptionId:b,wrappedModel:m}}});const V=["id","aria-describedby","value","disabled",".indeterminate"],$=t.createElementVNode("span",{class:"cdx-checkbox__icon"},null,-1);function q(e,o,n,i,a,l){const d=t.resolveComponent("cdx-label");return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["cdx-checkbox",e.rootClasses])},[t.withDirectives(t.createElementVNode("input",{id:e.checkboxId,ref:"input","onUpdate:modelValue":o[0]||(o[0]=s=>e.wrappedModel=s),class:"cdx-checkbox__input",type:"checkbox","aria-describedby":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,value:e.inputValue,disabled:e.computedDisabled,".indeterminate":e.indeterminate},null,40,V),[[t.vModelCheckbox,e.wrappedModel]]),$,t.createCommentVNode(" Only render a Label component if label text has been provided. This component can also\n			supply a description to the Checkbox if content is provided in the description slot. "),e.$slots.default&&e.$slots.default().length?(t.openBlock(),t.createBlock(d,{key:0,class:"cdx-checkbox__label","input-id":e.checkboxId,"description-id":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,disabled:e.computedDisabled},t.createSlots({default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:2},[e.$slots.description&&e.$slots.description().length>0?{name:"description",fn:t.withCtx(()=>[t.createCommentVNode(" @slot Short description text. "),t.renderSlot(e.$slots,"description")]),key:"0"}:void 0]),1032,["input-id","description-id","disabled"])):t.createCommentVNode("v-if",!0)],2)}const g=y._export_sfc(x,[["render",q]]);module.exports=g;