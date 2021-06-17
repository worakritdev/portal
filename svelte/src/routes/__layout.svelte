<script>
import "../app.postcss";
import Header from "$lib/pages/header.svelte";

</script>



<main>
    <Header></Header>
    <slot><!-- optional fallback --></slot>
</main>