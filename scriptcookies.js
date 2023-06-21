// on click copy the content from #copy-id to clipboard
document.
querySelector('#click-to-copy').
addEventListener('click', e => {
  let value = document.querySelector('#copy-id');
  value.select();
  document.execCommand("copy");

});