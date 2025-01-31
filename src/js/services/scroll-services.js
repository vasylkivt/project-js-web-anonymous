/**
 * Блокує прокручування сторінки.
 */
const blockScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = getWidthScrollbar() + 'px';
};

/**
 * Відновлює прокручування сторінки.
 */
const restoreScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

/**
 * Отримує ширину полоси прокрутки.
 * @returns {number} - Ширина полоси прокрутки в пікселях.
 */
function getWidthScrollbar() {
  const scrollbarMeasure = document.createElement('div');
  scrollbarMeasure.style.overflow = 'scroll';
  scrollbarMeasure.style.visibility = 'hidden';
  scrollbarMeasure.style.position = 'absolute';
  scrollbarMeasure.style.width = '100px';
  scrollbarMeasure.style.height = '100px';
  scrollbarMeasure.style.top = '-9999px';
  document.body.appendChild(scrollbarMeasure);
  const scrollbarWidth =
    scrollbarMeasure.offsetWidth - scrollbarMeasure.clientWidth;
  document.body.removeChild(scrollbarMeasure);
  return scrollbarWidth;
}

export const ScrollService = { blockScroll, restoreScroll };
