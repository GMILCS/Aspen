/*This addes a link to the Advanced Search under the Search Bar */ 

<script>

var div1 = document.createElement('div');
div1.setAttribute('class', 'row row-no-gutters');
div1.setAttribute('style', "padding-top: 10px;padding-left:15px")

const target = document.getElementById('horizontal-search-button-container');
target.parentNode.insertBefore(div1, target.nextSibling);

var div2 = document.createElement('div');
div2.setAttribute('class', "col-xs-12");
div2.innerHTML = ' <a id="advancedSearch" href="https://discover.amherstlibrary.org//Union/Search?view=list&amp;showCovers=on&amp;lookfor=&amp;searchIndex=advanced&amp;searchSource=local">Advanced Search</a> '

const target2 = div1;
target2.appendChild(div2);

</script>
