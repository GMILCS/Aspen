/*Shows the format buttons in mobile view when there are multple formats*/

<script>
$(() => {
    const overrides = `
  @media (max-width: 767px) {
    [class*="hidethisdiv"].hidden-xs,
    [id^="relatedManifestationsValue"].hidden-xs {
      display: block !important;
    }

    .visible-xs > [class^="hidethisdiv"],
    .visible-xs > [class*=" hidethisdiv"] {
      display: none !important;
    }
  }
  `;

    const $style = $('<style>', { type: 'text/css', text: overrides });
    $('head').append($style);
  });
</script>
