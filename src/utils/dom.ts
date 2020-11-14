export const computedBoxProperties =  (el) => {
    if(!el)return;
    const {width, height, paddingTop, paddingRight, paddingBottom, paddingLeft } = window.getComputedStyle(el, null);
    return {
        width,
        height,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
    }
}
