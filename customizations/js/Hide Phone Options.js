/*This hides the phone options in the patron's Notice Preference and self-registration. */

<script>
$( "#noticesSelect option[value=3]" ).hide(); // hides Phone 1 as option for notices select dropdown
$( "#noticesSelect option[value=4]" ).hide(); // hides Phone 2 as option for notices select dropdown
$( "#noticesSelect option[value=5]" ).hide(); // hides Phone 3 as option for notices select dropdown

$( "#noticesSelect option[value=3]" ).attr("disabled","disabled");
$( "#noticesSelect option[value=4]" ).attr("disabled","disabled");
$( "#noticesSelect option[value=5]" ).attr("disabled","disabled");
</script>
