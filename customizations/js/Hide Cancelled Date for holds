<script>
function hideCancelledOnRow() {
  document.querySelectorAll('.result-label').forEach(label => {
    if (label.textContent.trim() === 'Cancelled On') {
      label.closest('.row')?.style.setProperty('display', 'none', 'important');
    }
  });
}

hideCancelledOnRow();
new MutationObserver(hideCancelledOnRow).observe(document.body, {
  childList: true,
  subtree: true
});

</script>
