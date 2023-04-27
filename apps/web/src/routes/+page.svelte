<script lang="ts">
    import type { Product } from 'shared/types'
    import { base64Encode } from 'shared/utils'

    let encodedString = base64Encode('Encoded string on client!')
    let product: Product = {
        id: "394280329",
        name: "Client Product",
        price: 290,
        description: "This product was created on the client!"
    }

</script>

<div class="container">
    <h1>{encodedString}</h1>
    <h1>{JSON.stringify(product)}</h1>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 12px;
    }
</style>