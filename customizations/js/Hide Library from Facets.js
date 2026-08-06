/*These scripts are used to hide a branch (children's catalog) from showing up in the facets */

/*Hide Kelley Kids Catalog form Facets>More*/
/*Select all Libraries and all Locations, except for Kelly Kids Catalog*/
<Script>
// This ensures that the script runs after the modal content is loaded
const modalContent = document.querySelector('.modal-body'); // Adjust selector if needed
if (modalContent) {
    // Create a MutationObserver to detect changes in the modal content
    const observer = new MutationObserver(function(mutationsList) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Look for the specific elements that need to be hidden
                const targetDivs = document.querySelectorAll('.col-tn-12.standardFacet a[href*="Kelley+Kids+Catalog"]');
                targetDivs.forEach(function(targetDiv) {
                    // Hide the parent div once found
                    targetDiv.closest('.col-tn-12.standardFacet').style.display = 'none';
                });
            }
        });
    });

    // Start observing for child list changes within the modal body
    observer.observe(modalContent, { childList: true, subtree: true });
}
</script>


/*Hide Kelley Kids Catalog from other lib facets*/
/*Select all Libraries and all Locations, except for Kelly Kids Catalog*/
<script>
document.querySelectorAll('.facetValue').forEach(function(div) {
  if (div.querySelector('a') && div.querySelector('a').href.includes("Kelley+Kids+Catalog")) {
    div.style.display = 'none';
  }
});

</script>


/*Hide Kelley Library from Kelley Kids facets*/
/*Select Kelley Kids Catalog in Locations*/
<script>
document.querySelectorAll('.facetValue').forEach(function(div) {
  if (div.querySelector('a') && div.querySelector('a').href.includes("Kelley+Library")) {
    div.style.display = 'none';
  }
});

</script>


/*Hide Kelly Library from Kelley Kids Facets>More*/
/*Select Kelley Kids Catalog in Locations*/
<Script>
// This ensures that the script runs after the modal content is loaded
const modalContent = document.querySelector('.modal-body'); // Adjust selector if needed
if (modalContent) {
    // Create a MutationObserver to detect changes in the modal content
    const observer = new MutationObserver(function(mutationsList) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // Look for the specific elements that need to be hidden
                const targetDivs = document.querySelectorAll('.col-tn-12.standardFacet a[href*="Kelley+Library"]');
                targetDivs.forEach(function(targetDiv) {
                    // Hide the parent div once found
                    targetDiv.closest('.col-tn-12.standardFacet').style.display = 'none';
                });
            }
        });
    });

    // Start observing for child list changes within the modal body
    observer.observe(modalContent, { childList: true, subtree: true });
}
</script>
