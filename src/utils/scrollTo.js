import _ from 'lodash';

const DURATION = 200;

// Usage:
// - scrollTo(100);
// - scrollTo('#some-element');
// - scrollTo(element);
export default function scrollTo(y) {
  if (y == null) return;
  if (_.isString(y)) y = document.querySelector(y);
  if (y && y.offsetTop) y = y.offsetTop;
  y -= 20;

  let start = null;
  let startPosition = null;

  function scroll(time) {
    if (start == null) {
      start = time;
      startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    const delta = time - start;
    let position = 1 - (delta / DURATION);
    position = -0.5 * (Math.cos(Math.PI * position) - 1);

    if (delta >= DURATION) {
      window.scrollTo(0, y);
      return;
    }

    const nextY = y + ((startPosition - y) * position);

    window.scrollTo(0, nextY);

    window.requestAnimationFrame(scroll);
  }

  window.requestAnimationFrame(scroll);
}
