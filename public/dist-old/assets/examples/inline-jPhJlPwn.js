import{i as A,d as D,f as qe,h as re,_ as i,j as C,r as F,k as a,l as et,w,m as I,F as Xe,H as le,o as E,p as O,q as Ee,x,s as Mt,t as B,L as H,u as Z,v as X,y as j,z as Ze,A as zt,C as we,D as ai,E as ri,G as Ot,I as oi,J as nt,K as _e,M as it,N as li,O as ni,P as ci,Q as di,R as hi,U as ui,V as pi,W as fi,X as mi,Y as St,Z as gi,$ as ct,a0 as Ve,a1 as Ue,a2 as xe,a3 as bi,a4 as $t,a5 as vi,a6 as yi,a7 as Rt,c as Bt,a8 as at,a9 as dt,aa as It,ab as _i,ac as xi,ad as wi,ae as ki,af as Ci,ag as ht}from"../chunk.URTPIBTY-BfW3KnjQ.js";var zi=A`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Si=A`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,q=class extends I{constructor(){super(...arguments),this.formControlController=new Xe(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new le(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return x`
      <div
        class=${E({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${E({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${O(this.value)}
            .indeterminate=${Ee(this.indeterminate)}
            .checked=${Ee(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?x`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?x`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};q.styles=[D,qe,Si];q.dependencies={"sl-icon":re};i([C('input[type="checkbox"]')],q.prototype,"input",2);i([F()],q.prototype,"hasFocus",2);i([a()],q.prototype,"title",2);i([a()],q.prototype,"name",2);i([a()],q.prototype,"value",2);i([a({reflect:!0})],q.prototype,"size",2);i([a({type:Boolean,reflect:!0})],q.prototype,"disabled",2);i([a({type:Boolean,reflect:!0})],q.prototype,"checked",2);i([a({type:Boolean,reflect:!0})],q.prototype,"indeterminate",2);i([et("checked")],q.prototype,"defaultChecked",2);i([a({reflect:!0})],q.prototype,"form",2);i([a({type:Boolean,reflect:!0})],q.prototype,"required",2);i([a({attribute:"help-text"})],q.prototype,"helpText",2);i([w("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);i([w(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],q.prototype,"handleStateChange",1);var U=class rt extends I{constructor(){super(...arguments),this.localize=new H(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Z(this.childrenContainer);const{keyframes:t,options:s}=X(this,"tree-item.collapse",{dir:this.localize.dir()});await j(this.childrenContainer,Ze(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&rt.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Z(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:s}=X(this,"tree-item.expand",{dir:this.localize.dir()});await j(this.childrenContainer,Ze(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>rt.isTreeItem(s)&&(t||!s.disabled)):[]}render(){const t=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return x`
      <div
        part="base"
        class="${E({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${E({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${zt(this.loading,()=>x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${zt(this.selectable,()=>x`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Ee(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};U.styles=[D,zi];U.dependencies={"sl-checkbox":q,"sl-icon":re,"sl-spinner":Mt};i([F()],U.prototype,"indeterminate",2);i([F()],U.prototype,"isLeaf",2);i([F()],U.prototype,"loading",2);i([F()],U.prototype,"selectable",2);i([a({type:Boolean,reflect:!0})],U.prototype,"expanded",2);i([a({type:Boolean,reflect:!0})],U.prototype,"selected",2);i([a({type:Boolean,reflect:!0})],U.prototype,"disabled",2);i([a({type:Boolean,reflect:!0})],U.prototype,"lazy",2);i([C("slot:not([name])")],U.prototype,"defaultSlot",2);i([C("slot[name=children]")],U.prototype,"childrenSlot",2);i([C(".tree-item__item")],U.prototype,"itemElement",2);i([C(".tree-item__children")],U.prototype,"childrenContainer",2);i([C(".tree-item__expand-button slot")],U.prototype,"expandButtonSlot",2);i([w("loading",{waitUntilFirstUpdate:!0})],U.prototype,"handleLoadingChange",1);i([w("disabled")],U.prototype,"handleDisabledChange",1);i([w("selected")],U.prototype,"handleSelectedChange",1);i([w("expanded",{waitUntilFirstUpdate:!0})],U.prototype,"handleExpandedChange",1);i([w("expanded",{waitUntilFirstUpdate:!0})],U.prototype,"handleExpandAnimation",1);i([w("lazy",{waitUntilFirstUpdate:!0})],U.prototype,"handleLazyChange",1);var Ne=U;B("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});B("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ne.define("sl-tree-item");var $i=A`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Tt(e,t=!1){function s(c){const p=c.getChildrenItems({includeDisabled:!1});if(p.length){const f=p.every(h=>h.selected),d=p.every(h=>!h.selected&&!h.indeterminate);c.selected=f,c.indeterminate=!f&&!d}}function r(c){const p=c.parentElement;Ne.isTreeItem(p)&&(s(p),r(p))}function l(c){for(const p of c.getChildrenItems())p.selected=t?c.selected||p.selected:!p.disabled&&c.selected,l(p);t&&s(c)}l(e),r(e)}var $e=class extends I{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new H(this),this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const s=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(s===null?e.append(r):s.hasAttribute("data-default")&&s.replaceWith(r))})},this.handleTreeChanged=e=>{for(const t of e){const s=[...t.addedNodes].filter(Ne.isTreeItem),r=[...t.removedNodes].filter(Ne.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ne.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const r=s.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(l=>l.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Tt(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const l of r)l.selected=l===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(t.length!==s.length||s.some(r=>!t.includes(r)))&&Promise.all(s.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(l=>{var c;return["input","textarea"].includes((c=l?.tagName)==null?void 0:c.toLowerCase())}))return;const t=this.getFocusableItems(),s=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const l=t.findIndex(d=>d.matches(":focus")),c=t[l],p=d=>{const h=t[we(d,0,t.length-1)];this.focusItem(h)},f=d=>{c.expanded=d};e.key==="ArrowDown"?p(l+1):e.key==="ArrowUp"?p(l-1):s&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!c||c.disabled||c.expanded||c.isLeaf&&!c.lazy?p(l+1):f(!0):s&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!c||c.disabled||c.isLeaf||!c.expanded?p(l-1):f(!1):e.key==="Home"?p(0):e.key==="End"?p(t.length-1):(e.key==="Enter"||e.key===" ")&&(c.disabled||this.selectItem(c))}}handleClick(e){const t=e.target,s=t.closest("sl-tree-item"),r=e.composedPath().some(l=>{var c;return(c=l?.classList)==null?void 0:c.contains("tree-item__expand-button")});!s||s.disabled||t!==this.clickTarget||(r?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of t)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Tt(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=s=>s.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(s=>{var r;if(s.disabled)return!1;const l=(r=s.parentElement)==null?void 0:r.closest("[role=treeitem]");return l&&(!l.expanded||l.loading||t.has(l))&&t.add(s),!t.has(s)})}render(){return x`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};$e.styles=[D,$i];i([C("slot:not([name])")],$e.prototype,"defaultSlot",2);i([C("slot[name=expand-icon]")],$e.prototype,"expandedIconSlot",2);i([C("slot[name=collapse-icon]")],$e.prototype,"collapsedIconSlot",2);i([a()],$e.prototype,"selection",2);i([w("selection")],$e.prototype,"handleSelectionChange",1);$e.define("sl-tree");ai.define("sl-visually-hidden");var Ii=A`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Ti=0,Ye=class extends I{constructor(){super(...arguments),this.attrId=++Ti,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return x`
      <slot
        part="base"
        class=${E({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ye.styles=[D,Ii];i([a({reflect:!0})],Ye.prototype,"name",2);i([a({type:Boolean,reflect:!0})],Ye.prototype,"active",2);i([w("active")],Ye.prototype,"handleActiveChange",1);Ye.define("sl-tab-panel");ri.define("sl-tag");var Ai=A`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,L=class extends I{constructor(){super(...arguments),this.formControlController=new Xe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new le(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,r="preserve"){const l=t??this.input.selectionStart,c=s??this.input.selectionEnd;this.input.setRangeText(e,l,c,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t;return x`
      <div
        part="form-control"
        class=${E({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${E({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${O(this.name)}
              .value=${Ee(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              rows=${O(this.rows)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              autocapitalize=${O(this.autocapitalize)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${O(this.spellcheck)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};L.styles=[D,qe,Ai];i([C(".textarea__control")],L.prototype,"input",2);i([C(".textarea__size-adjuster")],L.prototype,"sizeAdjuster",2);i([F()],L.prototype,"hasFocus",2);i([a()],L.prototype,"title",2);i([a()],L.prototype,"name",2);i([a()],L.prototype,"value",2);i([a({reflect:!0})],L.prototype,"size",2);i([a({type:Boolean,reflect:!0})],L.prototype,"filled",2);i([a()],L.prototype,"label",2);i([a({attribute:"help-text"})],L.prototype,"helpText",2);i([a()],L.prototype,"placeholder",2);i([a({type:Number})],L.prototype,"rows",2);i([a()],L.prototype,"resize",2);i([a({type:Boolean,reflect:!0})],L.prototype,"disabled",2);i([a({type:Boolean,reflect:!0})],L.prototype,"readonly",2);i([a({reflect:!0})],L.prototype,"form",2);i([a({type:Boolean,reflect:!0})],L.prototype,"required",2);i([a({type:Number})],L.prototype,"minlength",2);i([a({type:Number})],L.prototype,"maxlength",2);i([a()],L.prototype,"autocapitalize",2);i([a()],L.prototype,"autocorrect",2);i([a()],L.prototype,"autocomplete",2);i([a({type:Boolean})],L.prototype,"autofocus",2);i([a()],L.prototype,"enterkeyhint",2);i([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],L.prototype,"spellcheck",2);i([a()],L.prototype,"inputmode",2);i([et()],L.prototype,"defaultValue",2);i([w("disabled",{waitUntilFirstUpdate:!0})],L.prototype,"handleDisabledChange",1);i([w("rows",{waitUntilFirstUpdate:!0})],L.prototype,"handleRowsChange",1);i([w("value",{waitUntilFirstUpdate:!0})],L.prototype,"handleValueChange",1);L.define("sl-textarea");var Ei=A`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ut=class extends I{constructor(){super(...arguments),this.effect="none"}render(){return x`
      <div
        part="base"
        class=${E({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ut.styles=[D,Ei];i([a()],ut.prototype,"effect",2);ut.define("sl-skeleton");var Di=A`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`,At=()=>null,ee=class extends I{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new H(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=At,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:s,size:r,snapThreshold:l,isRtl:c,vertical:p})=>{let f=s,d=Number.POSITIVE_INFINITY;return t.forEach(h=>{let v;if(h.startsWith("repeat(")){const n=e.substring(7,e.length-1),g=n.endsWith("%"),m=Number.parseFloat(n),y=g?r*(m/100):m;v=Math.round((c&&!p?r-s:s)/y)*y}else h.endsWith("%")?v=r*(Number.parseFloat(h)/100):v=Number.parseFloat(h);c&&!p&&(v=r-v);const o=Math.abs(s-v);o<=l&&o<d&&(f=v,d=o)}),f}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=At}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Ot(this,{onMove:(s,r)=>{var l;let c=this.vertical?r:s;this.primary==="end"&&(c=this.size-c),c=(l=this.snapFunction({pos:c,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?l:c,this.position=we(this.pixelsToPercentage(c),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=s),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=we(t,0,100)}}handleResize(e){const{width:t,height:s}=e[0].contentRect;this.size=this.vertical?s:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,l="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${l}`:this.style[e]=`${l} var(--divider-width) ${r}`:s&&!this.vertical?this.style[e]=`${l} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${l}`,this.style[t]="",x`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${O(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ee.styles=[D,Di];i([C(".divider")],ee.prototype,"divider",2);i([a({type:Number,reflect:!0})],ee.prototype,"position",2);i([a({attribute:"position-in-pixels",type:Number})],ee.prototype,"positionInPixels",2);i([a({type:Boolean,reflect:!0})],ee.prototype,"vertical",2);i([a({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);i([a()],ee.prototype,"primary",2);i([a({reflect:!0})],ee.prototype,"snap",1);i([a({type:Number,attribute:"snap-threshold"})],ee.prototype,"snapThreshold",2);i([w("position")],ee.prototype,"handlePositionChange",1);i([w("positionInPixels")],ee.prototype,"handlePositionInPixelsChange",1);i([w("vertical")],ee.prototype,"handleVerticalChange",1);ee.define("sl-split-panel");var Fi=A`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,G=class extends I{constructor(){super(...arguments),this.formControlController=new Xe(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new le(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return x`
      <div
        class=${E({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${E({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${O(this.value)}
            .checked=${Ee(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=[D,qe,Fi];i([C('input[type="checkbox"]')],G.prototype,"input",2);i([F()],G.prototype,"hasFocus",2);i([a()],G.prototype,"title",2);i([a()],G.prototype,"name",2);i([a()],G.prototype,"value",2);i([a({reflect:!0})],G.prototype,"size",2);i([a({type:Boolean,reflect:!0})],G.prototype,"disabled",2);i([a({type:Boolean,reflect:!0})],G.prototype,"checked",2);i([et("checked")],G.prototype,"defaultChecked",2);i([a({reflect:!0})],G.prototype,"form",2);i([a({type:Boolean,reflect:!0})],G.prototype,"required",2);i([a({attribute:"help-text"})],G.prototype,"helpText",2);i([w("checked",{waitUntilFirstUpdate:!0})],G.prototype,"handleCheckedChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);G.define("sl-switch");oi.define("sl-resize-observer");Mt.define("sl-spinner");var Li=A`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,V=class extends I{constructor(){super(...arguments),this.formControlController=new Xe(this),this.hasSlotController=new le(this,"help-text","label"),this.localize=new H(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,s=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),l=this.localize.dir()==="rtl",c=t*e;if(l){const p=`${t-c}px + ${e} * ${r}`;this.output.style.translate=`calc((${p} - ${s/2}px - ${r} / 2))`}else{const p=`${c}px - ${e} * ${r}`;this.output.style.translate=`calc(${p} - ${s/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t;return x`
      <div
        part="form-control"
        class=${E({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${E({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${O(this.name)}
              ?disabled=${this.disabled}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${Ee(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?x`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};V.styles=[D,qe,Li];i([C(".range__control")],V.prototype,"input",2);i([C(".range__tooltip")],V.prototype,"output",2);i([F()],V.prototype,"hasFocus",2);i([F()],V.prototype,"hasTooltip",2);i([a()],V.prototype,"title",2);i([a()],V.prototype,"name",2);i([a({type:Number})],V.prototype,"value",2);i([a()],V.prototype,"label",2);i([a({attribute:"help-text"})],V.prototype,"helpText",2);i([a({type:Boolean,reflect:!0})],V.prototype,"disabled",2);i([a({type:Number})],V.prototype,"min",2);i([a({type:Number})],V.prototype,"max",2);i([a({type:Number})],V.prototype,"step",2);i([a()],V.prototype,"tooltip",2);i([a({attribute:!1})],V.prototype,"tooltipFormatter",2);i([a({reflect:!0})],V.prototype,"form",2);i([et()],V.prototype,"defaultValue",2);i([nt({passive:!0})],V.prototype,"handleThumbDragStart",1);i([w("value",{waitUntilFirstUpdate:!0})],V.prototype,"handleValueChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],V.prototype,"handleDisabledChange",1);i([w("hasTooltip",{waitUntilFirstUpdate:!0})],V.prototype,"syncRange",1);V.define("sl-range");var Pi=A`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Q=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:s,right:r,width:l}=this.rating.getBoundingClientRect(),c=t?this.roundToPrecision((r-e)/l*this.max,this.precision):this.roundToPrecision((e-s)/l*this.max,this.precision);return we(c,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"){const l=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-l),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"){const l=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+l),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const s=1/t;return Math.ceil(e*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,x`
      <div
        part="base"
        class=${E({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(r=>s>r&&s<r+1?x`
                <span
                  class=${E({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${_e({clipPath:e?`inset(0 ${(s-r)*100}% 0 0)`:`inset(0 0 0 ${(s-r)*100}%)`})}
                  >
                    ${it(this.getSymbol(r+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${_e({clipPath:e?`inset(0 0 0 ${100-(s-r)*100}%)`:`inset(0 ${100-(s-r)*100}% 0 0)`})}
                  >
                    ${it(this.getSymbol(r+1))}
                  </div>
                </span>
              `:x`
              <span
                class=${E({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===r+1,"rating__symbol--active":s>=r+1})}
                role="presentation"
              >
                ${it(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Q.styles=[D,Pi];Q.dependencies={"sl-icon":re};i([C(".rating")],Q.prototype,"rating",2);i([F()],Q.prototype,"hoverValue",2);i([F()],Q.prototype,"isHovering",2);i([a()],Q.prototype,"label",2);i([a({type:Number})],Q.prototype,"value",2);i([a({type:Number})],Q.prototype,"max",2);i([a({type:Number})],Q.prototype,"precision",2);i([a({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);i([a({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);i([a()],Q.prototype,"getSymbol",2);i([nt({passive:!0})],Q.prototype,"handleTouchMove",1);i([w("hoverValue")],Q.prototype,"handleHoverValueChange",1);i([w("isHovering")],Q.prototype,"handleIsHoveringChange",1);Q.define("sl-rating");var Mi=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Ie=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=t.getTime()-e.getTime(),{unit:r,value:l}=Mi.find(c=>Math.abs(s)<c.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/l),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let c;r==="minute"?c=Qe("second"):r==="hour"?c=Qe("minute"):r==="day"?c=Qe("hour"):c=Qe("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),c)}return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};i([F()],Ie.prototype,"isoTime",2);i([F()],Ie.prototype,"relativeTime",2);i([a()],Ie.prototype,"date",2);i([a()],Ie.prototype,"format",2);i([a()],Ie.prototype,"numeric",2);i([a({type:Boolean})],Ie.prototype,"sync",2);function Qe(e){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return s-Date.now()%s}Ie.define("sl-relative-time");var Oi=A`
  ${li}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ne=class extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return ni`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${E({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${O(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ne.styles=[D,Oi];i([C(".button")],ne.prototype,"input",2);i([C(".hidden-input")],ne.prototype,"hiddenInput",2);i([F()],ne.prototype,"hasFocus",2);i([a({type:Boolean,reflect:!0})],ne.prototype,"checked",2);i([a()],ne.prototype,"value",2);i([a({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);i([a({reflect:!0})],ne.prototype,"size",2);i([a({type:Boolean,reflect:!0})],ne.prototype,"pill",2);i([w("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);ne.define("sl-radio-button");var Ri=A`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,W=class extends I{constructor(){super(...arguments),this.formControlController=new Xe(this),this.hasSlotController=new le(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?di:e?hi:ui}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,s.forEach(l=>l.checked=l===t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(f=>!f.disabled),r=(t=s.find(f=>f.checked))!=null?t:s[0],l=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,c=this.value;let p=s.indexOf(r)+l;p<0&&(p=s.length-1),p>s.length-1&&(p=0),this.getAllRadios().forEach(f=>{f.checked=!1,this.hasButtonGroup||f.setAttribute("tabindex","-1")}),this.value=s[p].value,s[p].checked=!0,this.hasButtonGroup?s[p].shadowRoot.querySelector("button").focus():(s[p].setAttribute("tabindex","0"),s[p].focus()),this.value!==c&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=s.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(r=>r.checked))if(this.hasButtonGroup){const r=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");r&&r.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const r=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),s=t.find(c=>c.checked),r=t.find(c=>!c.disabled),l=s||r;l&&l.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t,l=x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return x`
      <fieldset
        part="form-control"
        class=${E({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${l}
                </sl-button-group>
              `:l}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};W.styles=[D,qe,Ri];W.dependencies={"sl-button-group":ci};i([C("slot:not([name])")],W.prototype,"defaultSlot",2);i([C(".radio-group__validation-input")],W.prototype,"validationInput",2);i([F()],W.prototype,"hasButtonGroup",2);i([F()],W.prototype,"errorMessage",2);i([F()],W.prototype,"defaultValue",2);i([a()],W.prototype,"label",2);i([a({attribute:"help-text"})],W.prototype,"helpText",2);i([a()],W.prototype,"name",2);i([a({reflect:!0})],W.prototype,"value",2);i([a({reflect:!0})],W.prototype,"size",2);i([a({reflect:!0})],W.prototype,"form",2);i([a({type:Boolean,reflect:!0})],W.prototype,"required",2);i([w("size",{waitUntilFirstUpdate:!0})],W.prototype,"handleSizeChange",1);i([w("value")],W.prototype,"handleValueChange",1);W.define("sl-radio-group");var Bi=A`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Le=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*t,r=s-this.value/100*s;this.indicatorOffset=`${r}px`}}render(){return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Le.styles=[D,Bi];i([C(".progress-ring__indicator")],Le.prototype,"indicator",2);i([F()],Le.prototype,"indicatorOffset",2);i([a({type:Number,reflect:!0})],Le.prototype,"value",2);i([a()],Le.prototype,"label",2);Le.define("sl-progress-ring");var Vi=A`
  :host {
    display: inline-block;
  }
`;let Vt=null;class Ut{}Ut.render=function(e,t){Vt(e,t)};self.QrCreator=Ut;(function(e){function t(f,d,h,v){var o={},n=e(h,d);n.u(f),n.J(),v=v||0;var g=n.h(),m=n.h()+2*v;return o.text=f,o.level=d,o.version=h,o.O=m,o.a=function(y,T){return y-=v,T-=v,0>y||y>=g||0>T||T>=g?!1:n.a(y,T)},o}function s(f,d,h,v,o,n,g,m,y,T){function R(_,k,u,b,S,P,M){_?(f.lineTo(k+P,u+M),f.arcTo(k,u,b,S,n)):f.lineTo(k,u)}g?f.moveTo(d+n,h):f.moveTo(d,h),R(m,v,h,v,o,-n,0),R(y,v,o,d,o,0,-n),R(T,d,o,d,h,n,0),R(g,d,h,v,h,0,n)}function r(f,d,h,v,o,n,g,m,y,T){function R(_,k,u,b){f.moveTo(_+u,k),f.lineTo(_,k),f.lineTo(_,k+b),f.arcTo(_,k,_+u,k,n)}g&&R(d,h,n,n),m&&R(v,h,-n,n),y&&R(v,o,-n,-n),T&&R(d,o,n,-n)}function l(f,d){var h=d.fill;if(typeof h=="string")f.fillStyle=h;else{var v=h.type,o=h.colorStops;if(h=h.position.map(g=>Math.round(g*d.size)),v==="linear-gradient")var n=f.createLinearGradient.apply(f,h);else if(v==="radial-gradient")n=f.createRadialGradient.apply(f,h);else throw Error("Unsupported fill");o.forEach(([g,m])=>{n.addColorStop(g,m)}),f.fillStyle=n}}function c(f,d){e:{var h=d.text,v=d.v,o=d.N,n=d.K,g=d.P;for(o=Math.max(1,o||1),n=Math.min(40,n||40);o<=n;o+=1)try{var m=t(h,v,o,g);break e}catch{}m=void 0}if(!m)return null;for(h=f.getContext("2d"),d.background&&(h.fillStyle=d.background,h.fillRect(d.left,d.top,d.size,d.size)),v=m.O,n=d.size/v,h.beginPath(),g=0;g<v;g+=1)for(o=0;o<v;o+=1){var y=h,T=d.left+o*n,R=d.top+g*n,_=g,k=o,u=m.a,b=T+n,S=R+n,P=_-1,M=_+1,$=k-1,z=k+1,pe=Math.floor(Math.min(.5,Math.max(0,d.R))*n),ve=u(_,k),ze=u(P,$),je=u(P,k);P=u(P,z);var Ge=u(_,z);z=u(M,z),k=u(M,k),M=u(M,$),_=u(_,$),T=Math.round(T),R=Math.round(R),b=Math.round(b),S=Math.round(S),ve?s(y,T,R,b,S,pe,!je&&!_,!je&&!Ge,!k&&!Ge,!k&&!_):r(y,T,R,b,S,pe,je&&_&&ze,je&&Ge&&P,k&&Ge&&z,k&&_&&M)}return l(h,d),h.fill(),f}var p={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Vt=function(f,d){var h={};Object.assign(h,p,f),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,d instanceof HTMLCanvasElement?((d.width!==h.size||d.height!==h.size)&&(d.width=h.size,d.height=h.size),d.getContext("2d").clearRect(0,0,d.width,d.height),c(d,h)):(f=document.createElement("canvas"),f.width=h.size,f.height=h.size,h=c(f,h),d.appendChild(h))}})(function(){function e(d){var h=s.s(d);return{S:function(){return 4},b:function(){return h.length},write:function(v){for(var o=0;o<h.length;o+=1)v.put(h[o],8)}}}function t(){var d=[],h=0,v={B:function(){return d},c:function(o){return(d[Math.floor(o/8)]>>>7-o%8&1)==1},put:function(o,n){for(var g=0;g<n;g+=1)v.m((o>>>n-g-1&1)==1)},f:function(){return h},m:function(o){var n=Math.floor(h/8);d.length<=n&&d.push(0),o&&(d[n]|=128>>>h%8),h+=1}};return v}function s(d,h){function v(_,k){for(var u=-1;7>=u;u+=1)if(!(-1>=_+u||m<=_+u))for(var b=-1;7>=b;b+=1)-1>=k+b||m<=k+b||(g[_+u][k+b]=0<=u&&6>=u&&(b==0||b==6)||0<=b&&6>=b&&(u==0||u==6)||2<=u&&4>=u&&2<=b&&4>=b)}function o(_,k){for(var u=m=4*d+17,b=Array(u),S=0;S<u;S+=1){b[S]=Array(u);for(var P=0;P<u;P+=1)b[S][P]=null}for(g=b,v(0,0),v(m-7,0),v(0,m-7),u=c.G(d),b=0;b<u.length;b+=1)for(S=0;S<u.length;S+=1){P=u[b];var M=u[S];if(g[P][M]==null)for(var $=-2;2>=$;$+=1)for(var z=-2;2>=z;z+=1)g[P+$][M+z]=$==-2||$==2||z==-2||z==2||$==0&&z==0}for(u=8;u<m-8;u+=1)g[u][6]==null&&(g[u][6]=u%2==0);for(u=8;u<m-8;u+=1)g[6][u]==null&&(g[6][u]=u%2==0);for(u=c.w(n<<3|k),b=0;15>b;b+=1)S=!_&&(u>>b&1)==1,g[6>b?b:8>b?b+1:m-15+b][8]=S,g[8][8>b?m-b-1:9>b?15-b:14-b]=S;if(g[m-8][8]=!_,7<=d){for(u=c.A(d),b=0;18>b;b+=1)S=!_&&(u>>b&1)==1,g[Math.floor(b/3)][b%3+m-8-3]=S;for(b=0;18>b;b+=1)S=!_&&(u>>b&1)==1,g[b%3+m-8-3][Math.floor(b/3)]=S}if(y==null){for(_=f.I(d,n),u=t(),b=0;b<T.length;b+=1)S=T[b],u.put(4,4),u.put(S.b(),c.f(4,d)),S.write(u);for(b=S=0;b<_.length;b+=1)S+=_[b].j;if(u.f()>8*S)throw Error("code length overflow. ("+u.f()+">"+8*S+")");for(u.f()+4<=8*S&&u.put(0,4);u.f()%8!=0;)u.m(!1);for(;!(u.f()>=8*S)&&(u.put(236,8),!(u.f()>=8*S));)u.put(17,8);var pe=0;for(S=b=0,P=Array(_.length),M=Array(_.length),$=0;$<_.length;$+=1){var ve=_[$].j,ze=_[$].o-ve;for(b=Math.max(b,ve),S=Math.max(S,ze),P[$]=Array(ve),z=0;z<P[$].length;z+=1)P[$][z]=255&u.B()[z+pe];for(pe+=ve,z=c.C(ze),ve=r(P[$],z.b()-1).l(z),M[$]=Array(z.b()-1),z=0;z<M[$].length;z+=1)ze=z+ve.b()-M[$].length,M[$][z]=0<=ze?ve.c(ze):0}for(z=u=0;z<_.length;z+=1)u+=_[z].o;for(u=Array(u),z=pe=0;z<b;z+=1)for($=0;$<_.length;$+=1)z<P[$].length&&(u[pe]=P[$][z],pe+=1);for(z=0;z<S;z+=1)for($=0;$<_.length;$+=1)z<M[$].length&&(u[pe]=M[$][z],pe+=1);y=u}for(_=y,u=-1,b=m-1,S=7,P=0,k=c.F(k),M=m-1;0<M;M-=2)for(M==6&&--M;;){for($=0;2>$;$+=1)g[b][M-$]==null&&(z=!1,P<_.length&&(z=(_[P]>>>S&1)==1),k(b,M-$)&&(z=!z),g[b][M-$]=z,--S,S==-1&&(P+=1,S=7));if(b+=u,0>b||m<=b){b-=u,u=-u;break}}}var n=l[h],g=null,m=0,y=null,T=[],R={u:function(_){_=e(_),T.push(_),y=null},a:function(_,k){if(0>_||m<=_||0>k||m<=k)throw Error(_+","+k);return g[_][k]},h:function(){return m},J:function(){for(var _=0,k=0,u=0;8>u;u+=1){o(!0,u);var b=c.D(R);(u==0||_>b)&&(_=b,k=u)}o(!1,k)}};return R}function r(d,h){if(typeof d.length>"u")throw Error(d.length+"/"+h);var v=function(){for(var n=0;n<d.length&&d[n]==0;)n+=1;for(var g=Array(d.length-n+h),m=0;m<d.length-n;m+=1)g[m]=d[m+n];return g}(),o={c:function(n){return v[n]},b:function(){return v.length},multiply:function(n){for(var g=Array(o.b()+n.b()-1),m=0;m<o.b();m+=1)for(var y=0;y<n.b();y+=1)g[m+y]^=p.i(p.g(o.c(m))+p.g(n.c(y)));return r(g,0)},l:function(n){if(0>o.b()-n.b())return o;for(var g=p.g(o.c(0))-p.g(n.c(0)),m=Array(o.b()),y=0;y<o.b();y+=1)m[y]=o.c(y);for(y=0;y<n.b();y+=1)m[y]^=p.i(p.g(n.c(y))+g);return r(m,0).l(n)}};return o}s.s=function(d){for(var h=[],v=0;v<d.length;v++){var o=d.charCodeAt(v);128>o?h.push(o):2048>o?h.push(192|o>>6,128|o&63):55296>o||57344<=o?h.push(224|o>>12,128|o>>6&63,128|o&63):(v++,o=65536+((o&1023)<<10|d.charCodeAt(v)&1023),h.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63))}return h};var l={L:1,M:0,Q:3,H:2},c=function(){function d(o){for(var n=0;o!=0;)n+=1,o>>>=1;return n}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],v={w:function(o){for(var n=o<<10;0<=d(n)-d(1335);)n^=1335<<d(n)-d(1335);return(o<<10|n)^21522},A:function(o){for(var n=o<<12;0<=d(n)-d(7973);)n^=7973<<d(n)-d(7973);return o<<12|n},G:function(o){return h[o-1]},F:function(o){switch(o){case 0:return function(n,g){return(n+g)%2==0};case 1:return function(n){return n%2==0};case 2:return function(n,g){return g%3==0};case 3:return function(n,g){return(n+g)%3==0};case 4:return function(n,g){return(Math.floor(n/2)+Math.floor(g/3))%2==0};case 5:return function(n,g){return n*g%2+n*g%3==0};case 6:return function(n,g){return(n*g%2+n*g%3)%2==0};case 7:return function(n,g){return(n*g%3+(n+g)%2)%2==0};default:throw Error("bad maskPattern:"+o)}},C:function(o){for(var n=r([1],0),g=0;g<o;g+=1)n=n.multiply(r([1,p.i(g)],0));return n},f:function(o,n){if(o!=4||1>n||40<n)throw Error("mode: "+o+"; type: "+n);return 10>n?8:16},D:function(o){for(var n=o.h(),g=0,m=0;m<n;m+=1)for(var y=0;y<n;y+=1){for(var T=0,R=o.a(m,y),_=-1;1>=_;_+=1)if(!(0>m+_||n<=m+_))for(var k=-1;1>=k;k+=1)0>y+k||n<=y+k||(_!=0||k!=0)&&R==o.a(m+_,y+k)&&(T+=1);5<T&&(g+=3+T-5)}for(m=0;m<n-1;m+=1)for(y=0;y<n-1;y+=1)T=0,o.a(m,y)&&(T+=1),o.a(m+1,y)&&(T+=1),o.a(m,y+1)&&(T+=1),o.a(m+1,y+1)&&(T+=1),(T==0||T==4)&&(g+=3);for(m=0;m<n;m+=1)for(y=0;y<n-6;y+=1)o.a(m,y)&&!o.a(m,y+1)&&o.a(m,y+2)&&o.a(m,y+3)&&o.a(m,y+4)&&!o.a(m,y+5)&&o.a(m,y+6)&&(g+=40);for(y=0;y<n;y+=1)for(m=0;m<n-6;m+=1)o.a(m,y)&&!o.a(m+1,y)&&o.a(m+2,y)&&o.a(m+3,y)&&o.a(m+4,y)&&!o.a(m+5,y)&&o.a(m+6,y)&&(g+=40);for(y=T=0;y<n;y+=1)for(m=0;m<n;m+=1)o.a(m,y)&&(T+=1);return g+=Math.abs(100*T/n/n-50)/5*10}};return v}(),p=function(){for(var d=Array(256),h=Array(256),v=0;8>v;v+=1)d[v]=1<<v;for(v=8;256>v;v+=1)d[v]=d[v-4]^d[v-5]^d[v-6]^d[v-8];for(v=0;255>v;v+=1)h[d[v]]=v;return{g:function(o){if(1>o)throw Error("glog("+o+")");return h[o]},i:function(o){for(;0>o;)o+=255;for(;256<=o;)o-=255;return d[o]}}}(),f=function(){function d(o,n){switch(n){case l.L:return h[4*(o-1)];case l.M:return h[4*(o-1)+1];case l.Q:return h[4*(o-1)+2];case l.H:return h[4*(o-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v={I:function(o,n){var g=d(o,n);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+o+"/errorCorrectLevel:"+n);o=g.length/3,n=[];for(var m=0;m<o;m+=1)for(var y=g[3*m],T=g[3*m+1],R=g[3*m+2],_=0;_<y;_+=1){var k=R,u={};u.o=T,u.j=k,n.push(u)}return n}};return v}();return s}());const Ui=QrCreator;var ce=class extends I{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Ui.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${_e({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ce.styles=[D,Vi];i([C("canvas")],ce.prototype,"canvas",2);i([a()],ce.prototype,"value",2);i([a()],ce.prototype,"label",2);i([a({type:Number})],ce.prototype,"size",2);i([a()],ce.prototype,"fill",2);i([a()],ce.prototype,"background",2);i([a({type:Number})],ce.prototype,"radius",2);i([a({attribute:"error-correction"})],ce.prototype,"errorCorrection",2);i([w(["background","errorCorrection","fill","radius","size","value"])],ce.prototype,"generate",1);ce.define("sl-qr-code");var Ni=A`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,fe=class extends I{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return x`
      <span
        part="base"
        class=${E({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};fe.styles=[D,Ni];fe.dependencies={"sl-icon":re};i([F()],fe.prototype,"checked",2);i([F()],fe.prototype,"hasFocus",2);i([a()],fe.prototype,"value",2);i([a({reflect:!0})],fe.prototype,"size",2);i([a({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);i([w("checked")],fe.prototype,"handleCheckedChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1);fe.define("sl-radio");var Hi=A`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,oe=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(t+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(t+=s.textContent)}),t.trim()}render(){return x`
      <div
        part="base"
        class=${E({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};oe.styles=[D,Hi];oe.dependencies={"sl-icon":re};i([C(".option__label")],oe.prototype,"defaultSlot",2);i([F()],oe.prototype,"current",2);i([F()],oe.prototype,"selected",2);i([F()],oe.prototype,"hasHover",2);i([a({reflect:!0})],oe.prototype,"value",2);i([a({type:Boolean,reflect:!0})],oe.prototype,"disabled",2);i([w("disabled")],oe.prototype,"handleDisabledChange",1);i([w("selected")],oe.prototype,"handleSelectedChange",1);i([w("value")],oe.prototype,"handleValueChange",1);oe.define("sl-option");pi.define("sl-popup");var qi=A`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ke=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return x`
      <div
        part="base"
        class=${E({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${O(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${_e({width:`${this.value}%`})}>
          ${this.indeterminate?"":x` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ke.styles=[D,qi];i([a({type:Number,reflect:!0})],Ke.prototype,"value",2);i([a({type:Boolean,reflect:!0})],Ke.prototype,"indeterminate",2);i([a()],Ke.prototype,"label",2);Ke.define("sl-progress-bar");var Xi=A`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Nt=class extends I{render(){return x` <slot part="base" class="menu-label"></slot> `}};Nt.styles=[D,Xi];Nt.define("sl-menu-label");var Yi=A`
  :host {
    display: contents;
  }
`,me=class extends I{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return x` <slot></slot> `}};me.styles=[D,Yi];i([a({reflect:!0})],me.prototype,"attr",2);i([a({attribute:"attr-old-value",type:Boolean,reflect:!0})],me.prototype,"attrOldValue",2);i([a({attribute:"char-data",type:Boolean,reflect:!0})],me.prototype,"charData",2);i([a({attribute:"char-data-old-value",type:Boolean,reflect:!0})],me.prototype,"charDataOldValue",2);i([a({attribute:"child-list",type:Boolean,reflect:!0})],me.prototype,"childList",2);i([a({type:Boolean,reflect:!0})],me.prototype,"disabled",2);i([w("disabled")],me.prototype,"handleDisabledChange",1);i([w("attr",{waitUntilFirstUpdate:!0}),w("attr-old-value",{waitUntilFirstUpdate:!0}),w("char-data",{waitUntilFirstUpdate:!0}),w("char-data-old-value",{waitUntilFirstUpdate:!0}),w("childList",{waitUntilFirstUpdate:!0})],me.prototype,"handleChange",1);me.define("sl-mutation-observer");fi.define("sl-input");var Ki=A`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Te=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";e.preventDefault(),Ot(this.base,{onMove:r=>{this.position=parseFloat(we(r/t*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let l=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight")&&(l-=r),(t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft")&&(l+=r),e.key==="Home"&&(l=0),e.key==="End"&&(l=100),l=we(l,0,100),this.position=l}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return x`
      <div
        part="base"
        id="image-comparer"
        class=${E({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${_e({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${_e({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Te.styles=[D,Ki];Te.scopedElement={"sl-icon":re};i([C(".image-comparer")],Te.prototype,"base",2);i([C(".image-comparer__handle")],Te.prototype,"handle",2);i([a({type:Number,reflect:!0})],Te.prototype,"position",2);i([w("position",{waitUntilFirstUpdate:!0})],Te.prototype,"handlePositionChange",1);Te.define("sl-image-comparer");var Wi=A`
  :host {
    display: block;
  }
`,st=new Map;function ji(e,t="cors"){const s=st.get(e);if(s!==void 0)return Promise.resolve(s);const r=fetch(e,{mode:t}).then(async l=>{const c={ok:l.ok,status:l.status,html:await l.text()};return st.set(e,c),c});return st.set(e,r),r}var Pe=class extends I{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(s=>t.setAttribute(s.name,s.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await ji(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return x`<slot></slot>`}};Pe.styles=[D,Wi];i([a()],Pe.prototype,"src",2);i([a()],Pe.prototype,"mode",2);i([a({attribute:"allow-scripts",type:Boolean})],Pe.prototype,"allowScripts",2);i([w("src")],Pe.prototype,"handleSrcChange",1);Pe.define("sl-include");var tt=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),l=s[r]+this.unit,c=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(c,{style:"unit",unit:l,unitDisplay:this.display})}};i([a({type:Number})],tt.prototype,"value",2);i([a()],tt.prototype,"unit",2);i([a()],tt.prototype,"display",2);tt.define("sl-format-bytes");var te=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return x`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};i([a()],te.prototype,"date",2);i([a()],te.prototype,"weekday",2);i([a()],te.prototype,"era",2);i([a()],te.prototype,"year",2);i([a()],te.prototype,"month",2);i([a()],te.prototype,"day",2);i([a()],te.prototype,"hour",2);i([a()],te.prototype,"minute",2);i([a()],te.prototype,"second",2);i([a({attribute:"time-zone-name"})],te.prototype,"timeZoneName",2);i([a({attribute:"time-zone"})],te.prototype,"timeZone",2);i([a({attribute:"hour-format"})],te.prototype,"hourFormat",2);te.define("sl-format-date");var de=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};i([a({type:Number})],de.prototype,"value",2);i([a()],de.prototype,"type",2);i([a({attribute:"no-grouping",type:Boolean})],de.prototype,"noGrouping",2);i([a()],de.prototype,"currency",2);i([a({attribute:"currency-display"})],de.prototype,"currencyDisplay",2);i([a({attribute:"minimum-integer-digits",type:Number})],de.prototype,"minimumIntegerDigits",2);i([a({attribute:"minimum-fraction-digits",type:Number})],de.prototype,"minimumFractionDigits",2);i([a({attribute:"maximum-fraction-digits",type:Number})],de.prototype,"maximumFractionDigits",2);i([a({attribute:"minimum-significant-digits",type:Number})],de.prototype,"minimumSignificantDigits",2);i([a({attribute:"maximum-significant-digits",type:Number})],de.prototype,"maximumSignificantDigits",2);de.define("sl-format-number");var Gi=A`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Re=[],Ht=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var s;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=mi();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const l=St(this.element);let c=l.findIndex(f=>f===r);this.previousFocus=this.currentFocus;const p=this.tabDirection==="forward"?1:-1;for(;;){c+p>=l.length?c=0:c+p<0?c=l.length-1:c+=p,this.previousFocus=this.currentFocus;const f=l[c];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||f&&this.possiblyHasTabbableChildren(f))return;t.preventDefault(),this.currentFocus=f,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const d=[...gi()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Re.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Re=Re.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Re[Re.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=St(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],r=this.tabDirection==="forward"?t:s;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},pt=e=>{var t;const{activeElement:s}=document;s&&e.contains(s)&&((t=document.activeElement)==null||t.blur())};function Et(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ie=class extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"footer"),this.localize=new H(this),this.modal=new Ht(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ve(this)))}disconnectedCallback(){super.disconnectedCallback(),Ue(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=X(this,"drawer.denyClose",{dir:this.localize.dir()});j(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ve(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Z(this.drawer),Z(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=X(this,`drawer.show${Et(this.placement)}`,{dir:this.localize.dir()}),s=X(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([j(this.panel,t.keyframes,t.options),j(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{pt(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ue(this)),await Promise.all([Z(this.drawer),Z(this.overlay)]);const e=X(this,`drawer.hide${Et(this.placement)}`,{dir:this.localize.dir()}),t=X(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([j(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),j(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ve(this)),this.open&&this.contained&&(this.modal.deactivate(),Ue(this))}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${E({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ie.styles=[D,Gi];ie.dependencies={"sl-icon-button":ct};i([C(".drawer")],ie.prototype,"drawer",2);i([C(".drawer__panel")],ie.prototype,"panel",2);i([C(".drawer__overlay")],ie.prototype,"overlay",2);i([a({type:Boolean,reflect:!0})],ie.prototype,"open",2);i([a({reflect:!0})],ie.prototype,"label",2);i([a({reflect:!0})],ie.prototype,"placement",2);i([a({type:Boolean,reflect:!0})],ie.prototype,"contained",2);i([a({attribute:"no-header",type:Boolean,reflect:!0})],ie.prototype,"noHeader",2);i([w("open",{waitUntilFirstUpdate:!0})],ie.prototype,"handleOpenChange",1);i([w("contained",{waitUntilFirstUpdate:!0})],ie.prototype,"handleNoModalChange",1);B("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});B("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});B("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});B("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});B("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});B("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});B("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});B("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});B("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});B("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});B("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ie.define("sl-drawer");var Qi=A`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Y=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),s=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let l=this.from,c="";s?[l,c]=this.from.trim().split("."):r&&([l,c]=this.from.trim().replace(/\]$/,"").split("["));const p="getElementById"in t?t.getElementById(l):null;p?r?e=p.getAttribute(c)||"":s?e=p[c]||"":e=p.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),r=this.errorLabel||this.localize.term("error"),l=e==="success"?this.successIcon:this.errorIcon,c=X(this,"copy.in",{dir:"ltr"}),p=X(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:r,await this.copyIcon.animate(p.keyframes,p.options).finished,this.copyIcon.hidden=!0,this.status=e,l.hidden=!1,await l.animate(c.keyframes,c.options).finished,setTimeout(async()=>{await l.animate(p.keyframes,p.options).finished,l.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(c.keyframes,c.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return x`
      <sl-tooltip
        class=${E({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Y.styles=[D,Qi];Y.dependencies={"sl-icon":re,"sl-tooltip":bi};i([C('slot[name="copy-icon"]')],Y.prototype,"copyIcon",2);i([C('slot[name="success-icon"]')],Y.prototype,"successIcon",2);i([C('slot[name="error-icon"]')],Y.prototype,"errorIcon",2);i([C("sl-tooltip")],Y.prototype,"tooltip",2);i([F()],Y.prototype,"isCopying",2);i([F()],Y.prototype,"status",2);i([a()],Y.prototype,"value",2);i([a()],Y.prototype,"from",2);i([a({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);i([a({attribute:"copy-label"})],Y.prototype,"copyLabel",2);i([a({attribute:"success-label"})],Y.prototype,"successLabel",2);i([a({attribute:"error-label"})],Y.prototype,"errorLabel",2);i([a({attribute:"feedback-duration",type:Number})],Y.prototype,"feedbackDuration",2);i([a({attribute:"tooltip-placement"})],Y.prototype,"tooltipPlacement",2);i([a({type:Boolean})],Y.prototype,"hoist",2);B("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});B("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Y.define("sl-copy-button");var Zi=A`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,he=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Z(this.body);const{keyframes:t,options:s}=X(this,"details.show",{dir:this.localize.dir()});await j(this.body,Ze(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Z(this.body);const{keyframes:t,options:s}=X(this,"details.hide",{dir:this.localize.dir()});await j(this.body,Ze(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,xe(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,xe(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return x`
      <details
        part="base"
        class=${E({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};he.styles=[D,Zi];he.dependencies={"sl-icon":re};i([C(".details")],he.prototype,"details",2);i([C(".details__header")],he.prototype,"header",2);i([C(".details__body")],he.prototype,"body",2);i([C(".details__expand-icon-slot")],he.prototype,"expandIconSlot",2);i([a({type:Boolean,reflect:!0})],he.prototype,"open",2);i([a()],he.prototype,"summary",2);i([a({type:Boolean,reflect:!0})],he.prototype,"disabled",2);i([w("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);B("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});B("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});he.define("sl-details");var Ji=A`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ge=class extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"footer"),this.localize=new H(this),this.modal=new Ht(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ve(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ue(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=X(this,"dialog.denyClose",{dir:this.localize.dir()});j(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ve(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Z(this.dialog),Z(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=X(this,"dialog.show",{dir:this.localize.dir()}),s=X(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([j(this.panel,t.keyframes,t.options),j(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{pt(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Z(this.dialog),Z(this.overlay)]);const e=X(this,"dialog.hide",{dir:this.localize.dir()}),t=X(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([j(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),j(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ue(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}render(){return x`
      <div
        part="base"
        class=${E({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ge.styles=[D,Ji];ge.dependencies={"sl-icon-button":ct};i([C(".dialog")],ge.prototype,"dialog",2);i([C(".dialog__panel")],ge.prototype,"panel",2);i([C(".dialog__overlay")],ge.prototype,"overlay",2);i([a({type:Boolean,reflect:!0})],ge.prototype,"open",2);i([a({reflect:!0})],ge.prototype,"label",2);i([a({attribute:"no-header",type:Boolean,reflect:!0})],ge.prototype,"noHeader",2);i([w("open",{waitUntilFirstUpdate:!0})],ge.prototype,"handleOpenChange",1);B("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});B("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});B("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});B("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});B("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ge.define("sl-dialog");q.define("sl-checkbox");var es=A`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,qt=class extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${E({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};qt.styles=[D,es];qt.define("sl-card");var ts=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},is=A`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ss(e,t){if(e!==void 0){let s=0;for(const r of e)yield t(r,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*as(e,t,s=1){const r=t===void 0?0:e;t??=e;for(let l=r;s>0?l<t:t<l;l+=s)yield l}var N=class extends I{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new ts(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new H(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,l=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||s!==l)&&(e.scrollTo({left:r,top:l,behavior:$t()?"auto":"smooth"}),await xe(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(s=>[...s.addedNodes,...s.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:s,loop:r}=this,l=r?e/s:(e-t)/s+1;return Math.ceil(l)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),s=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+s*s)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,l=e.key==="ArrowDown"||!s&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft",c=e.key==="ArrowUp"||!s&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight";e.preventDefault(),c&&this.previous(),l&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var p;const f=(p=this.shadowRoot)==null?void 0:p.querySelector('[part~="pagination-item--active"]');f&&f.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const f of t){const d=f.target;d.toggleAttribute("inert",!f.isIntersecting),d.classList.toggle("--in-view",f.isIntersecting),d.setAttribute("aria-hidden",f.isIntersecting?"false":"true")}const s=t.find(f=>f.isIntersecting);if(!s)return;const r=this.getSlides({excludeClones:!1}),l=this.getSlides().length,c=r.indexOf(s.target),p=this.loop?c-this.slidesPerPage:c;if(this.activeSlide=(Math.ceil(p/this.slidesPerMove)*this.slidesPerMove+l)%l,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const f=Number(s.target.getAttribute("data-clone"));this.goToSlide(f,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(e.setAttribute("id",`slide-${t+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${t+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,s=e.slice(-t),r=e.slice(0,t);s.reverse().forEach((l,c)=>{const p=l.cloneNode(!0);p.setAttribute("data-clone",String(e.length-c-1)),this.prepend(p)}),r.forEach((l,c)=>{const p=l.cloneNode(!0);p.setAttribute("data-clone",String(c)),this.append(p)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,s)=>{t.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((s,r)=>{(r+t)%t===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:r}=this,l=this.getSlides(),c=this.getSlides({excludeClones:!1});if(!l.length)return;const p=r?(e+l.length)%l.length:we(e,0,l.length-s);this.activeSlide=p;const f=this.localize.dir()==="rtl",d=we(e+(r?s:0)+(f?s-1:0),0,c.length-1),h=c[d];this.scrollToSlide(h,$t()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,r=s.getBoundingClientRect(),l=e.getBoundingClientRect(),c=l.left-r.left,p=l.top-r.top;c||p?(this.pendingSlideChange=!0,s.scrollTo({left:c+s.scrollLeft,top:p+s.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,s=this.getPageCount(),r=this.getCurrentPage(),l=this.canScrollPrev(),c=this.canScrollNext(),p=this.localize.dir()==="ltr";return x`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${E({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?x`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${E({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!l})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${l?"false":"true"}"
                  @click=${l?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${p?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${E({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!c})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${c?"false":"true"}"
                  @click=${c?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${p?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?x`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${ss(as(s),f=>{const d=f===r;return x`
                    <button
                      part="pagination-item ${d?"pagination-item--active":""}"
                      class="${E({"carousel__pagination-item":!0,"carousel__pagination-item--active":d})}"
                      role="tab"
                      id="tab-${f+1}"
                      aria-controls="slide-${f+1}"
                      aria-selected="${d?"true":"false"}"
                      aria-label="${d?this.localize.term("slideNum",f+1):this.localize.term("goToSlide",f+1,s)}"
                      tabindex=${d?"0":"-1"}
                      @click=${()=>this.goToSlide(f*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};N.styles=[D,is];N.dependencies={"sl-icon":re};i([a({type:Boolean,reflect:!0})],N.prototype,"loop",2);i([a({type:Boolean,reflect:!0})],N.prototype,"navigation",2);i([a({type:Boolean,reflect:!0})],N.prototype,"pagination",2);i([a({type:Boolean,reflect:!0})],N.prototype,"autoplay",2);i([a({type:Number,attribute:"autoplay-interval"})],N.prototype,"autoplayInterval",2);i([a({type:Number,attribute:"slides-per-page"})],N.prototype,"slidesPerPage",2);i([a({type:Number,attribute:"slides-per-move"})],N.prototype,"slidesPerMove",2);i([a()],N.prototype,"orientation",2);i([a({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],N.prototype,"mouseDragging",2);i([C(".carousel__slides")],N.prototype,"scrollContainer",2);i([C(".carousel__pagination")],N.prototype,"paginationContainer",2);i([F()],N.prototype,"activeSlide",2);i([F()],N.prototype,"scrolling",2);i([F()],N.prototype,"dragging",2);i([nt({passive:!0})],N.prototype,"handleScroll",1);i([w("loop",{waitUntilFirstUpdate:!0}),w("slidesPerPage",{waitUntilFirstUpdate:!0})],N.prototype,"initializeSlides",1);i([w("activeSlide")],N.prototype,"handleSlideChange",1);i([w("slidesPerMove")],N.prototype,"updateSlidesSnap",1);i([w("autoplay")],N.prototype,"handleAutoplayChange",1);N.define("sl-carousel");var rs=A`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Xt=class extends I{connectedCallback(){super.connectedCallback()}render(){return x` <slot></slot> `}};Xt.styles=[D,rs];Xt.define("sl-carousel-item");var os=A`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,ke=class extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(e){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return x`
      <div
        part="base"
        class=${E({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${O(this.target?this.target:void 0)}"
                rel=${O(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?x`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ke.styles=[D,os];i([C("slot:not([name])")],ke.prototype,"defaultSlot",2);i([F()],ke.prototype,"renderType",2);i([a()],ke.prototype,"href",2);i([a()],ke.prototype,"target",2);i([a()],ke.prototype,"rel",2);i([w("href",{waitUntilFirstUpdate:!0})],ke.prototype,"hrefChanged",1);ke.define("sl-breadcrumb-item");var ls=A`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,be=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=x``;return this.initials?t=x`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,x`
      <div
        part="base"
        class=${E({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};be.styles=[D,ls];be.dependencies={"sl-icon":re};i([F()],be.prototype,"hasError",2);i([a()],be.prototype,"image",2);i([a()],be.prototype,"label",2);i([a()],be.prototype,"initials",2);i([a()],be.prototype,"loading",2);i([a({reflect:!0})],be.prototype,"shape",2);i([w("image")],be.prototype,"handleImageChange",1);be.define("sl-avatar");var ns=A`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Me=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,s)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),s===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Me.styles=[D,ns];Me.dependencies={"sl-icon":re};i([C("slot")],Me.prototype,"defaultSlot",2);i([C('slot[name="separator"]')],Me.prototype,"separatorSlot",2);i([a()],Me.prototype,"label",2);Me.define("sl-breadcrumb");var cs=A`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,ue=class extends I{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:s}=this.animatedImage;e.width=t,e.height=s,e.getContext("2d").drawImage(this.animatedImage,0,0,t,s),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return x`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?x`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};ue.styles=[D,cs];ue.dependencies={"sl-icon":re};i([C(".animated-image__animated")],ue.prototype,"animatedImage",2);i([F()],ue.prototype,"frozenFrame",2);i([F()],ue.prototype,"isLoaded",2);i([a()],ue.prototype,"src",2);i([a()],ue.prototype,"alt",2);i([a({type:Boolean,reflect:!0})],ue.prototype,"play",2);i([w("play",{waitUntilFirstUpdate:!0})],ue.prototype,"handlePlayChange",1);i([w("src")],ue.prototype,"handleSrcChange",1);ue.define("sl-animated-image");var ds=A`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,We=class extends I{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return x`
      <span
        part="base"
        class=${E({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};We.styles=[D,ds];i([a({reflect:!0})],We.prototype,"variant",2);i([a({type:Boolean,reflect:!0})],We.prototype,"pill",2);i([a({type:Boolean,reflect:!0})],We.prototype,"pulse",2);We.define("sl-badge");var hs=A`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,se=class Se extends I{constructor(){super(...arguments),this.hasSlotController=new le(this,"icon","suffix"),this.localize=new H(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,s="100%",r="0";this.countdownAnimation=t.animate([{width:s},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Z(this.base),this.base.hidden=!1;const{keyframes:t,options:s}=X(this,"alert.show",{dir:this.localize.dir()});await j(this.base,t,s),this.emit("sl-after-show")}else{pt(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Z(this.base);const{keyframes:t,options:s}=X(this,"alert.hide",{dir:this.localize.dir()});await j(this.base,t,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,xe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xe(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Se.toastStack.parentElement===null&&document.body.append(Se.toastStack),Se.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Se.toastStack.removeChild(this),t(),Se.toastStack.querySelector("sl-alert")===null&&Se.toastStack.remove()},{once:!0})})}render(){return x`
      <div
        part="base"
        class=${E({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?x`
              <div
                class=${E({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};se.styles=[D,hs];se.dependencies={"sl-icon-button":ct};i([C('[part~="base"]')],se.prototype,"base",2);i([C(".alert__countdown-elapsed")],se.prototype,"countdownElement",2);i([a({type:Boolean,reflect:!0})],se.prototype,"open",2);i([a({type:Boolean,reflect:!0})],se.prototype,"closable",2);i([a({reflect:!0})],se.prototype,"variant",2);i([a({type:Number})],se.prototype,"duration",2);i([a({type:String,reflect:!0})],se.prototype,"countdown",2);i([F()],se.prototype,"remainingTime",2);i([w("open",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpenChange",1);i([w("duration")],se.prototype,"handleDurationChange",1);var us=se;B("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});B("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});us.define("sl-alert");const ps=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],fs=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],ms=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],gs=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],bs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],vs=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ys=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],_s=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ws=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ks=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Cs=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],zs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ss=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],$s=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Is=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ts=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],As=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Es=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Ds=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Fs=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ls=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ps=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ms=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Os=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rs=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bs=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Vs=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Us=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Ns=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Hs=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],qs=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Xs=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ys=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ks=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ws=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],js=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gs=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qs=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zs=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Js=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ea=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ta=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ia=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sa=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],aa=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],ra=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],oa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],la=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],na=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],ca=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],da=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],ha=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],ua=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],pa=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],fa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],ma=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ga=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],ba=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],va=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],ya=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],_a=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],xa=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],wa=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ka=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ca=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],za=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Sa=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],$a=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ia=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ta=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Aa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Ea=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Da=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Fa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],La=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Pa=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ma=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Oa=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ra=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ba=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Va=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Ua=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],Na=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Ha=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],qa=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Xa=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ya=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Ka=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Wa=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ja=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ga=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qa=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Za=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Ja=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],er=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],tr=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],ir=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yt={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},sr=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ss,backInLeft:$s,backInRight:Is,backInUp:Ts,backOutDown:As,backOutLeft:Es,backOutRight:Ds,backOutUp:Fs,bounce:ps,bounceIn:Ls,bounceInDown:Ps,bounceInLeft:Ms,bounceInRight:Os,bounceInUp:Rs,bounceOut:Bs,bounceOutDown:Vs,bounceOutLeft:Us,bounceOutRight:Ns,bounceOutUp:Hs,easings:Yt,fadeIn:qs,fadeInBottomLeft:Xs,fadeInBottomRight:Ys,fadeInDown:Ks,fadeInDownBig:Ws,fadeInLeft:js,fadeInLeftBig:Gs,fadeInRight:Qs,fadeInRightBig:Zs,fadeInTopLeft:Js,fadeInTopRight:ea,fadeInUp:ta,fadeInUpBig:ia,fadeOut:sa,fadeOutBottomLeft:aa,fadeOutBottomRight:ra,fadeOutDown:oa,fadeOutDownBig:la,fadeOutLeft:na,fadeOutLeftBig:ca,fadeOutRight:da,fadeOutRightBig:ha,fadeOutTopLeft:ua,fadeOutTopRight:pa,fadeOutUp:fa,fadeOutUpBig:ma,flash:fs,flip:ga,flipInX:ba,flipInY:va,flipOutX:ya,flipOutY:_a,headShake:ms,heartBeat:gs,hinge:Ha,jackInTheBox:qa,jello:bs,lightSpeedInLeft:xa,lightSpeedInRight:wa,lightSpeedOutLeft:ka,lightSpeedOutRight:Ca,pulse:vs,rollIn:Xa,rollOut:Ya,rotateIn:za,rotateInDownLeft:Sa,rotateInDownRight:$a,rotateInUpLeft:Ia,rotateInUpRight:Ta,rotateOut:Aa,rotateOutDownLeft:Ea,rotateOutDownRight:Da,rotateOutUpLeft:Fa,rotateOutUpRight:La,rubberBand:ys,shake:_s,shakeX:xs,shakeY:ws,slideInDown:Pa,slideInLeft:Ma,slideInRight:Oa,slideInUp:Ra,slideOutDown:Ba,slideOutLeft:Va,slideOutRight:Ua,slideOutUp:Na,swing:ks,tada:Cs,wobble:zs,zoomIn:Ka,zoomInDown:Wa,zoomInLeft:ja,zoomInRight:Ga,zoomInUp:Qa,zoomOut:Za,zoomOutDown:Ja,zoomOutLeft:er,zoomOutRight:tr,zoomOutUp:ir},Symbol.toStringTag,{value:"Module"}));var ar=A`
  :host {
    display: contents;
  }
`,K=class extends I{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const s=(e=Yt[this.easing])!=null?e:this.easing,r=(t=this.keyframes)!=null?t:sr[this.name],c=(await this.defaultSlot).assignedElements()[0];return!c||!r?!1:(this.destroyAnimation(),this.animation=c.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return x` <slot @slotchange=${this.handleSlotChange}></slot> `}};K.styles=[D,ar];i([vi("slot")],K.prototype,"defaultSlot",2);i([a()],K.prototype,"name",2);i([a({type:Boolean,reflect:!0})],K.prototype,"play",2);i([a({type:Number})],K.prototype,"delay",2);i([a()],K.prototype,"direction",2);i([a({type:Number})],K.prototype,"duration",2);i([a()],K.prototype,"easing",2);i([a({attribute:"end-delay",type:Number})],K.prototype,"endDelay",2);i([a()],K.prototype,"fill",2);i([a({type:Number})],K.prototype,"iterations",2);i([a({attribute:"iteration-start",type:Number})],K.prototype,"iterationStart",2);i([a({attribute:!1})],K.prototype,"keyframes",2);i([a({attribute:"playback-rate",type:Number})],K.prototype,"playbackRate",2);i([w(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],K.prototype,"handleAnimationChange",1);i([w("play")],K.prototype,"handlePlayChange",1);i([w("playbackRate")],K.prototype,"handlePlaybackRateChange",1);K.define("sl-animation");var rr=Object.create,ft=Object.defineProperty,or=Object.getOwnPropertyDescriptor,Kt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Oe=e=>{throw TypeError(e)},lr=(e,t,s)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Dt=(e,t)=>ft(e,"name",{value:t,configurable:!0}),mt=e=>{var t;return[,,,rr((t=e?.[Kt("metadata")])!=null?t:null)]},Wt=["class","method","getter","setter","accessor","field","value","get","set"],Be=e=>e!==void 0&&typeof e!="function"?Oe("Function expected"):e,nr=(e,t,s,r,l)=>({kind:Wt[e],name:t,metadata:r,addInitializer:c=>s._?Oe("Already initialized"):l.push(Be(c||null))}),cr=(e,t)=>lr(t,Kt("metadata"),e[3]),J=(e,t,s,r)=>{for(var l=0,c=e[t>>1],p=c&&c.length;l<p;l++)t&1?c[l].call(s):r=c[l].call(s,r);return r},Ce=(e,t,s,r,l,c)=>{var p,f,d,h,v,o=t&7,n=!!(t&8),g=!!(t&16),m=o>3?e.length+1:o?n?1:2:0,y=Wt[o+5],T=o>3&&(e[m-1]=[]),R=e[m]||(e[m]=[]),_=o&&(!g&&!n&&(l=l.prototype),o<5&&(o>3||!g)&&or(o<4?l:{get[s](){return Ft(this,c)},set[s](u){return Lt(this,c,u)}},s));o?g&&o<4&&Dt(c,(o>2?"set ":o>1?"get ":"")+s):Dt(l,s);for(var k=r.length-1;k>=0;k--)h=nr(o,s,d={},e[3],R),o&&(h.static=n,h.private=g,v=h.access={has:g?u=>dr(l,u):u=>s in u},o^3&&(v.get=g?u=>(o^1?Ft:hr)(u,l,o^4?c:_.get):u=>u[s]),o>2&&(v.set=g?(u,b)=>Lt(u,l,b,o^4?c:_.set):(u,b)=>u[s]=b)),f=(0,r[k])(o?o<4?g?c:_[y]:o>4?void 0:{get:_.get,set:_.set}:l,h),d._=1,o^4||f===void 0?Be(f)&&(o>4?T.unshift(f):o?g?c=f:_[y]=f:l=f):typeof f!="object"||f===null?Oe("Object expected"):(Be(p=f.get)&&(_.get=p),Be(p=f.set)&&(_.set=p),Be(p=f.init)&&T.unshift(p));return o||cr(e,l),_&&ft(l,s,_),g?o^4?c:_:l},gt=(e,t,s)=>t.has(e)||Oe("Cannot "+s),dr=(e,t)=>Object(t)!==t?Oe('Cannot use the "in" operator on this value'):e.has(t),Ft=(e,t,s)=>(gt(e,t,"read from private field"),s?s.call(e):t.get(e)),He=(e,t,s)=>t.has(e)?Oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Lt=(e,t,s,r)=>(gt(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),hr=(e,t,s)=>(gt(e,t,"access private method"),s),jt,Gt,Qt,ot,Zt,ae,bt,vt,yt,Jt,ei,lt,ti,ye,_t,xt,ii,wt,si;yi();function ur(e){let t="";e.underline&&(t+="underline"),e.strike&&(t+=" line-through");let s={};return e.code&&(s={"font-family":'"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',"line-height":"normal",background:"rgba(135,131,120,0.15)",color:"#EB5757","border-radius":"3px","font-size":"85%",padding:"0.2em 0.4em"}),_e({"font-weight":e.bold?"bold":"normal","font-style":e.italic?"italic":"normal","text-decoration":t.length>0?t:"none",...s})}const pr=({delta:e,selected:t})=>{var s;if((s=e.attributes)!=null&&s.embed)return x`<span
      style=${_e({padding:"0 0.4em",border:t?"1px solid #eb763a":"",background:"rgba(135,131,120,0.15)"})}
      >@flrande<v-text .str=${ki}></v-text
    ></span>`;const r=e.attributes?ur(e.attributes):_e({});return x`<span style=${r}
    ><v-text .str=${e.insert}></v-text
  ></span>`};function Ae(e,t){const s=e.getInlineRange();if(!s)return;const r=e.rootElement;if(!r)return;const l=e.getDeltasByInlineRange(s);let c={};for(const[f]of l){const d=f.attributes;d&&(c={...d})}const p=Object.fromEntries(Object.entries(t).map(([f,d])=>typeof d=="boolean"&&d===c[f]?[f,null]:[f,d]));e.formatText(s,p,{mode:"merge"}),r.blur(),e.setInlineRange(s)}Zt=[ht("test-rich-text")];class De extends(ot=dt,Qt=[C(".rich-text-container")],Gt=[a({attribute:!1})],jt=[a({attribute:!1})],ot){constructor(){super(...arguments),He(this,bt,J(ae,8,this)),J(ae,11,this),He(this,vt,J(ae,12,this)),J(ae,15,this),He(this,yt,J(ae,16,this)),J(ae,19,this)}firstUpdated(){this.contentEditable="true",this.style.outline="none",this.inlineEditor.mount(this._container,this),this.inlineEditor.slots.textChange.subscribe(()=>{const t=this.querySelector(".y-text");if(t){const s=this.inlineEditor.yText.toDelta(),r=document.createElement("span");r.innerHTML=JSON.stringify(s),t.replaceChildren(r)}}),Ci(()=>{const t=this.inlineEditor.inlineRange$.value,s=this.querySelector(".v-range");if(s&&t){const r=document.createElement("span");r.innerHTML=JSON.stringify(t),s.replaceChildren(r)}})}render(){return x`<style>
        test-rich-text {
          display: grid;
          grid-template-rows: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr);
          grid-template-columns: minmax(0, 1fr);
          width: 100%;
        }

        .rich-text-container {
          outline: none;
        }

        code {
          font-family:
            'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono',
            Courier, monospace;
          line-height: normal;
          background: rgba(135, 131, 120, 0.15);
          color: #eb5757;
          border-radius: 3px;
          font-size: 85%;
          padding: 0.2em 0.4em;
        }

        .v-range,
        .y-text {
          font-family:
            'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono',
            Courier, monospace;
          line-height: normal;
          background: rgba(135, 131, 120, 0.15);
        }

        .v-range,
        .y-text > span {
          display: block;
          word-wrap: break-word;
        }
      </style>
      <div class="rich-text-container"></div>
      <div contenteditable="false" class="v-range"></div>
      <div contenteditable="false" class="y-text"></div>`}}ae=mt(ot);bt=new WeakMap;vt=new WeakMap;yt=new WeakMap;Ce(ae,4,"_container",Qt,De,bt);Ce(ae,4,"inlineEditor",Gt,De,vt);Ce(ae,4,"undoManager",jt,De,yt);De=Ce(ae,0,"TestRichText",Zt,De);J(ae,1,De);const Pt="inline-editor",kt=new Rt,Ct=new Rt;kt.on("update",e=>{Bt(Ct,e)});Ct.on("update",e=>{Bt(kt,e)});ti=[ht("custom-toolbar")];class Fe extends(lt=dt,ei=[a({attribute:!1})],Jt=[a({attribute:!1})],lt){constructor(){super(...arguments),He(this,_t,J(ye,8,this)),J(ye,11,this),He(this,xt,J(ye,12,this)),J(ye,15,this)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",t=>{t.preventDefault()})}firstUpdated(){var t;const s=this.querySelector(".bold"),r=this.querySelector(".italic"),l=this.querySelector(".underline"),c=this.querySelector(".strike"),p=this.querySelector(".code"),f=this.querySelector(".embed"),d=this.querySelector(".reset"),h=this.querySelector(".undo"),v=this.querySelector(".redo");if(!s||!r||!l||!c||!p||!f||!d||!h||!v)throw new Error("Cannot find button");const o=new at(this.inlineEditor.yText,{trackedOrigins:new Set([(t=this.inlineEditor.yText.doc)==null?void 0:t.clientID])});addEventListener("keydown",n=>{n instanceof KeyboardEvent&&(n.ctrlKey||n.metaKey)&&n.key==="z"&&(n.preventDefault(),n.shiftKey?o.redo():o.undo())}),h.addEventListener("click",()=>{o.undo()}),v.addEventListener("click",()=>{o.redo()}),s.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{bold:!0})}),r.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{italic:!0})}),l.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{underline:!0})}),c.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{strike:!0})}),p.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{code:!0})}),f.addEventListener("click",()=>{o.stopCapturing(),Ae(this.inlineEditor,{embed:!0})}),d.addEventListener("click",()=>{o.stopCapturing();const n=this.inlineEditor.getInlineRange();n&&this.inlineEditor.resetText(n)})}render(){return x`
      <div class="custom-toolbar">
        <sl-button class="bold">bold</sl-button>
        <sl-button class="italic">italic</sl-button>
        <sl-button class="underline">underline</sl-button>
        <sl-button class="strike">strike</sl-button>
        <sl-button class="code">code</sl-button>
        <sl-button class="embed">embed</sl-button>
        <sl-button class="reset">reset</sl-button>
        <sl-button class="undo">undo</sl-button>
        <sl-button class="redo">redo</sl-button>
      </div>
    `}}ye=mt(lt);_t=new WeakMap;xt=new WeakMap;Ce(ye,4,"inlineEditor",ei,Fe,_t);Ce(ye,4,"undoManager",Jt,Fe,xt);Fe=Ce(ye,0,"CustomToolbar",ti,Fe);Fe.styles=A`
    .custom-toolbar {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }
  `;J(ye,1,Fe);ii=[ht("test-page")];class Je extends(si=dt){constructor(){super(...arguments),this._editorA=null,this._editorB=null,this._undoManagerA=null,this._undoManagerB=null}firstUpdated(){var t,s;const r=kt.getText(Pt);this._editorA=new It(r,{isEmbed:c=>{var p;return!!((p=c.attributes)!=null&&p.embed)}}),this._editorA.setAttributeSchema(_i.extend({embed:xi(!0).optional().catch(void 0)})),this._editorA.setAttributeRenderer(pr),this._undoManagerA=new at(r,{trackedOrigins:new Set([(t=r.doc)==null?void 0:t.clientID])});const l=Ct.getText(Pt);this._editorB=new It(l),this._undoManagerB=new at(l,{trackedOrigins:new Set([(s=l.doc)==null?void 0:s.clientID])}),this.requestUpdate()}render(){return this._editorA?x`
      <div class="container">
        <div class="editors">
          <div class="doc-a">
            <custom-toolbar
              .inlineEditor=${this._editorA}
              .undoManager=${this._undoManagerA}
            ></custom-toolbar>
            <test-rich-text
              .inlineEditor=${this._editorA}
              .undoManager=${this._undoManagerA}
            ></test-rich-text>
          </div>
          <div class="doc-b">
            <custom-toolbar
              .inlineEditor=${this._editorB}
              .undoManager=${this._undoManagerB}
            ></custom-toolbar>
            <test-rich-text
              .inlineEditor=${this._editorB}
              .undoManager=${this._undoManagerB}
            ></test-rich-text>
          </div>
        </div>
      </div>
    `:wi}}wt=mt(si);Je=Ce(wt,0,"TestPage",ii,Je);Je.styles=A`
    .container {
      display: grid;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }

    .editors {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      padding: 20px;
      background-color: #202124;
      border-radius: 10px;
      color: #fff;
      grid-gap: 20px;
    }

    .editors > div {
      height: 600px;
      max-width: 400px;
      display: grid;
      grid-template-rows: 150px minmax(0, 1fr);
      grid-template-columns: minmax(0, 1fr);
      overflow-y: scroll;
    }
  `;J(wt,1,Je);
//# sourceMappingURL=inline-jPhJlPwn.js.map
