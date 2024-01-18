<script>
import Navbar from '$lib/components/Navbar.svelte';
import Footer from '$lib/components/Footer.svelte';

</script>

<div>
<Navbar />
    <slot />
<Footer />
</div>