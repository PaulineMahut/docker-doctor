var h=Object.defineProperty;var u=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,a=(t,e)=>{for(var s in e||(e={}))c.call(e,s)&&p(t,s,e[s]);if(u)for(var s of u(e))f.call(e,s)&&p(t,s,e[s]);return t};import{m as w,n as _,a as b,c as k,b as o,p as l,v as d,q as x}from"./vendor.64c73bd9.js";import{_ as g,u as m}from"./index.a07c3cb5.js";var v={methods:{async fetchLogin(t){return await fetch("https://apidoctor.quidam.re/api/login_check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).catch(e=>{console.warn("error",e)})},async fetchConsults(t){return await fetch("https://apidoctor.quidam.re/api/consultations",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}).then(e=>e.json()).catch(e=>{console.warn("error",e)})}}};const y={mixins:[v],data(){return{user:{username:"",password:""}}},computed:a(a({},w(m,["token","refresh_token"])),_(m,["getToken","getRefreshToken"])),methods:{handleSubmit(){this.fetchLogin(this.user).then(t=>{this.token=t==null?void 0:t.token,this.refresh_token=t==null?void 0:t.refresh_token,this.$router.push("consultations")})}}},S={class:"bg-light d-flex flex-wrap"},T=o("label",{for:"username"}," Nom d'utilisateur ",-1),M=o("label",{for:"username"}," Mot de passe ",-1),j=o("input",{class:"btn btn-primary text-light border-dark",type:"submit",name:"valider",id:"valider",value:"Se connecter"},null,-1);function B(t,e,s,V,n,i){return b(),k("div",S,[o("form",{onSubmit:e[2]||(e[2]=x((...r)=>i.handleSubmit&&i.handleSubmit(...r),["prevent"])),class:"d-flex flex-column p-5 gap-2"},[T,l(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>n.user.username=r),name:"username",id:"username",placeholder:"username"},null,512),[[d,n.user.username]]),M,l(o("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=r=>n.user.password=r),placeholder:"password"},null,512),[[d,n.user.password]]),j],32)])}var N=g(y,[["render",B]]);export{N as default};