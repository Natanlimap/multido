<template>
    <div className="list-group-item big-checkbox ">
         <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
         <a href="/" key={key}>{{name}}</a>
    </div>
</template>
<script>
export default {
    name: "Checkitem",
    props: ['name']
};
</script>

<style>
</style>