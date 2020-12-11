<script>
    export let title = "item";
    export let removerMeuItem = function(){};
	let check = false;

</script>

<main>
    <div class="list-group-item big-checkbox ">
        <input bind:checked={check} on:change={(e)=>{e.target.value = check; e.target.indeterminate = false}} on:click={removerMeuItem(title)} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <a href="/" >{title}</a>
    </div>
</main>
