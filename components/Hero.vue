<script>
export default {
    props: {
        items: Array[String]
    }
}
</script>

<template>
    <div class="hero min-h-screen bg-base-200 min-w-[50%]">
        <div class="hero-content text-center flex-col min-w-[50%]">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li v-for="item in items">
                        <p href="#" class="text-info">{{ item }}</p>
                    </li>
                </ul>
            </div>

            <div class="mr-a ml-a border-y-2 min-w-[50%] border-neutral">
                <slot />
            </div>
        </div>
    </div>
</template>