consts: [["aria-label", "hello", "aria-label", "hi"], [2, "height", "0"], [1, "cls2"], [3, "tabindex"]],
template: function MyComponent_Template(rf, ctx) { 
  if (rf & 1) {
    i0.ɵɵelement(0, "div", 0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵelement(2, "div", 2)(3, "div")(4, "div", 3)(5, "div")(6, "div");
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("aria-label", ctx.value1)("aria-label", ctx.value2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tabindex", ctx.value1)("tabindex", ctx.value2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx.value2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx.value2);
  }
}