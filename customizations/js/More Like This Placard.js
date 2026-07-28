/*Needs accompaning css, see "More Like This Placard (HTML, CSS and JavaScript) 
https://aspen-discovery.atlassian.net/wiki/spaces/Help/pages/315686941/CSS+and+JavaScript+Code+Library#Placards
*/

<script>
(function(){
var mltc = document.querySelector(".placard #moreLikeThisCarousel");
if (location.pathname == '/Union/Search' &&  mltc !== null) {
    var gwId = document.getElementById('placardGroupedWork').innerText;
    AspenDiscovery.GroupedWork.loadMoreLikeThis(gwId, true);
    var i = 0;
    var mltCheck = setInterval(function() { 
        if (mltc.innerHTML == "") {
            if (i == 8) {
                document.querySelector("section.placard").remove();
                clearInterval(mltCheck);
            }
			i++;
        } else {
			mltc.classList.add("jcarousel","horizontalCarouselSpotlight");
            AspenDiscovery.initCarousels();
            mltc.parentElement.parentElement.hidden = false;
            clearInterval(mltCheck);
        }
    }, 500);
}
})();
</script>
