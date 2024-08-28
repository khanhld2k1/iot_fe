import{g as q,b as _,s as w,a as l,l as ee,r as k,_ as A,j as t,d as M,c as P,e as T,n as le,u as H,S as O,x as ce,B as ie,q as X}from"./index-BNkkj4sX.js";import{l as de,T as Y,a as ue,I as W}from"./Logo-with-text-Da49q9FZ.js";import{L as Z,I as pe}from"./Image-avJuSswX.js";import{h as me,q as V,c as K,s as oe,P as he,I as fe}from"./Select-bXqo0b07.js";import{B as be,T as L,e as G}from"./Button-j2RDmxIt.js";import{D as xe}from"./Divider-xG3KX7wy.js";function ge(e){return q("PrivateSwitchBase",e)}_("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ke=e=>{const{classes:o,checked:r,disabled:s,edge:a}=e,n={root:["root",r&&"checked",s&&"disabled",a&&`edge${P(a)}`],input:["input"]};return T(n,ge,o)},ve=w(be)(({ownerState:e})=>l({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ye=w("input",{shouldForwardProp:ee})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Pe=k.forwardRef(function(o,r){const{autoFocus:s,checked:a,checkedIcon:n,className:i,defaultChecked:h,disabled:d,disableFocusRipple:c=!1,edge:f=!1,icon:R,id:v,inputProps:j,inputRef:B,name:I,onBlur:u,onChange:b,onFocus:p,readOnly:N,required:U=!1,tabIndex:S,type:x,value:F}=o,g=A(o,Ce),[y,te]=me({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),C=V(),re=m=>{p&&p(m),C&&C.onFocus&&C.onFocus(m)},se=m=>{u&&u(m),C&&C.onBlur&&C.onBlur(m)},ne=m=>{if(m.nativeEvent.defaultPrevented)return;const Q=m.target.checked;te(Q),b&&b(m,Q)};let z=d;C&&typeof z>"u"&&(z=C.disabled);const ae=x==="checkbox"||x==="radio",E=l({},o,{checked:y,disabled:z,disableFocusRipple:c,edge:f}),J=ke(E);return t.jsxs(ve,l({component:"span",className:M(J.root,i),centerRipple:!0,focusRipple:!c,disabled:z,tabIndex:null,role:void 0,onFocus:re,onBlur:se,ownerState:E,ref:r},g,{children:[t.jsx(ye,l({autoFocus:s,checked:a,defaultChecked:h,className:J.input,disabled:z,id:ae?v:void 0,name:I,onChange:ne,readOnly:N,ref:B,required:U,ownerState:E,tabIndex:S,type:x},x==="checkbox"&&F===void 0?{}:{value:F},j)),y?n:R]}))}),je=K(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ie=K(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Fe=K(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function we(e){return q("MuiCheckbox",e)}const D=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Re=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Be=e=>{const{classes:o,indeterminate:r,color:s,size:a}=e,n={root:["root",r&&"indeterminate",`color${P(s)}`,`size${P(a)}`]},i=T(n,we,o);return l({},o,i)},Se=w(Pe,{shouldForwardProp:e=>ee(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.indeterminate&&o.indeterminate,o[`size${P(r.size)}`],r.color!=="default"&&o[`color${P(r.color)}`]]}})(({theme:e,ownerState:o})=>l({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:le(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${D.checked}, &.${D.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${D.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ze=t.jsx(Ie,{}),$e=t.jsx(je,{}),Le=t.jsx(Fe,{}),Me=k.forwardRef(function(o,r){var s,a;const n=H({props:o,name:"MuiCheckbox"}),{checkedIcon:i=ze,color:h="primary",icon:d=$e,indeterminate:c=!1,indeterminateIcon:f=Le,inputProps:R,size:v="medium",className:j}=n,B=A(n,Re),I=c?f:d,u=c?f:i,b=l({},n,{color:h,indeterminate:c,size:v}),p=Be(b);return t.jsx(Se,l({type:"checkbox",inputProps:l({"data-indeterminate":c},R),icon:k.cloneElement(I,{fontSize:(s=I.props.fontSize)!=null?s:v}),checkedIcon:k.cloneElement(u,{fontSize:(a=u.props.fontSize)!=null?a:v}),ownerState:b,ref:r,className:M(p.root,j)},B,{classes:p}))});function Ne(e){return q("MuiFormControlLabel",e)}const $=_("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),We=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],qe=e=>{const{classes:o,disabled:r,labelPlacement:s,error:a,required:n}=e,i={root:["root",r&&"disabled",`labelPlacement${P(s)}`,a&&"error",n&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return T(i,Ne,o)},_e=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${$.label}`]:o.label},o.root,o[`labelPlacement${P(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>l({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${$.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${$.label}`]:{[`&.${$.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ae=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${$.error}`]:{color:(e.vars||e).palette.error.main}})),Te=k.forwardRef(function(o,r){var s,a;const n=H({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:h={},control:d,disabled:c,disableTypography:f,label:R,labelPlacement:v="end",required:j,slotProps:B={}}=n,I=A(n,We),u=V(),b=(s=c??d.props.disabled)!=null?s:u==null?void 0:u.disabled,p=j??d.props.required,N={disabled:b,required:p};["checked","name","onChange","value","inputRef"].forEach(y=>{typeof d.props[y]>"u"&&typeof n[y]<"u"&&(N[y]=n[y])});const U=oe({props:n,muiFormControl:u,states:["error"]}),S=l({},n,{disabled:b,labelPlacement:v,required:p,error:U.error}),x=qe(S),F=(a=B.typography)!=null?a:h.typography;let g=R;return g!=null&&g.type!==L&&!f&&(g=t.jsx(L,l({component:"span"},F,{className:M(x.label,F==null?void 0:F.className),children:g}))),t.jsxs(_e,l({className:M(x.root,i),ownerState:S,ref:r},I,{children:[k.cloneElement(d,N),p?t.jsxs(O,{display:"block",children:[g,t.jsxs(Ae,{ownerState:S,"aria-hidden":!0,className:x.asterisk,children:[" ","*"]})]}):g]}))});function Ue(e){return q("MuiFormGroup",e)}_("MuiFormGroup",["root","row","error"]);const Ee=["className","row"],Ge=e=>{const{classes:o,row:r,error:s}=e;return T({root:["root",r&&"row",s&&"error"]},Ue,o)},De=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})(({ownerState:e})=>l({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Oe=k.forwardRef(function(o,r){const s=H({props:o,name:"MuiFormGroup"}),{className:a,row:n=!1}=s,i=A(s,Ee),h=V(),d=oe({props:s,muiFormControl:h,states:["error"]}),c=l({},s,{row:n,error:d.error}),f=Ge(c);return t.jsx(De,l({className:M(f.root,a),ownerState:c,ref:r},i))}),Ye=()=>{const e=ce(),[o,r]=k.useState(!1),s=()=>{e(X.homeRoot)},a=()=>{r(n=>!n)};return t.jsxs(t.Fragment,{children:[t.jsx(ie,{component:"figure",mb:5,mx:"auto",textAlign:"center",children:t.jsx(Z,{href:X.homeRoot,children:t.jsx(pe,{src:de,alt:"logo with text",height:60})})}),t.jsx(he,{sx:{py:6,px:{xs:5,sm:7.5}},children:t.jsxs(O,{justifyContent:"center",gap:5,children:[t.jsx(L,{variant:"h3",textAlign:"center",color:"text.secondary",children:"Log In"}),t.jsxs(L,{variant:"h6",fontWeight:500,textAlign:"center",color:"text.primary",children:["Don’t have an account?"," ",t.jsx(Z,{href:"/authentication/sign-up",underline:"none",children:"Sign up"})]}),t.jsx(Y,{variant:"filled",label:"Email",type:"email",sx:{".MuiFilledInput-root":{bgcolor:"grey.A100",":hover":{bgcolor:"background.default"},":focus":{bgcolor:"background.default"},":focus-within":{bgcolor:"background.default"}},borderRadius:2}}),t.jsx(Y,{variant:"filled",label:"Password",type:o?"text":"password",sx:{".MuiFilledInput-root":{bgcolor:"grey.A100",":hover":{bgcolor:"background.default"},":focus":{bgcolor:"background.default"},":focus-within":{bgcolor:"background.default"}},borderRadius:2},InputProps:{endAdornment:t.jsx(ue,{position:"end",children:t.jsx(fe,{"aria-label":"toggle password visibility",onClick:a,size:"small",edge:"end",sx:{mr:2},children:o?t.jsx(W,{icon:"el:eye-open",color:"text.secondary"}):t.jsx(W,{icon:"el:eye-close",color:"text.primary"})})})}}),t.jsx(Oe,{sx:{ml:1,width:"fit-content"},children:t.jsx(Te,{control:t.jsx(Me,{}),label:"Keep me signed in",sx:{color:"text.secondary"}})}),t.jsx(G,{onClick:s,sx:{fontWeight:"fontWeightRegular"},children:"Log In"}),t.jsx(xe,{}),t.jsx(L,{textAlign:"center",color:"text.secondary",variant:"body1",children:"Or sign in using:"}),t.jsxs(O,{gap:1.5,direction:"row",justifyContent:"space-between",children:[t.jsx(G,{startIcon:t.jsx(W,{icon:"flat-color-icons:google"}),variant:"outlined",fullWidth:!0,sx:{fontSize:"subtitle2.fontSize",fontWeight:"fontWeightRegular"},children:"Google"}),t.jsx(G,{startIcon:t.jsx(W,{icon:"logos:facebook"}),variant:"outlined",fullWidth:!0,sx:{fontSize:"subtitle2.fontSize",fontWeight:"fontWeightRegular"},children:"Facebook"})]})]})})]})};export{Ye as default};
